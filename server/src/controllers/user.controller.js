import { asyncHandler } from "../utils/asyncHandler.js"
import { User } from "../models/user.model.js"
import { ApiResponse } from "../utils/ApiResponse.js"

const options = {
    httpOnly : true,
    secure : true
}

const generateAccessAndRefreshTokens = async(userId) =>{
    try {
        const user = await User.findById(userId)
        const accessToken = user.generateAccessToken()
        const refreshToken = user.generateRefreshToken()

        user.refreshToken = refreshToken
        await user.save({ validateBeforeSave: false })

        return {accessToken, refreshToken}

    } catch (error) {
        throw new Error(error?.message || "Something went wrong while generating referesh and access token")
    }
}

const registerUser = asyncHandler(async (req, res) => {
    const {username, password, email} = req.body

    if(
        [username, email, password].some((field) => field?.trim() === "")
    ){
        throw new Error("Enter required fields.")
    }

    const userExists = await User.findOne({
        $or: [{ username }, { email }]
    })

    if(userExists){
        throw new Error("User already exists!!")
    }

    const user = await User.create({
        username,
        email,
        password
    })

    const registeredUser = await User.findById(user._id).select("-password -refreshToken")

    if(!registeredUser){
        throw new Error("Something went wrong while registering the user!")
    }

    return res.status(201).json(
        new ApiResponse(201, registeredUser, "User created successfully")
    )

})

const loginUser = asyncHandler(async(req, res) => {
    
    const {email, username, password} = req.body

    if(!(username || email)){
        throw new Error("Enter the username / email")
    }

    const user = await User.findOne({
        $or: [{username}, {email}]
    })

    if(!user){
        throw new Error("Please register first.")
    }

    const isPasswordValid = await user.isPasswordCorrect(password)
    // console.log(password)
    // console.log(isPasswordValid)

    if(!isPasswordValid){
        throw new Error("Password is incorrect!")
    }

    const {accessToken, refreshToken} = await generateAccessAndRefreshTokens(user._id)

    const loggedInUser = await User.findById(user._id).select("-password -refreshToken")

    return res.status(200)
    .cookie("accessToken", accessToken, options)
    .cookie("refreshToken", refreshToken, options)
    .json(
        new ApiResponse(200, loggedInUser, "User logged in successfully")
    )
})

const logoutUser = asyncHandler( async(req, res) => {
    await User.findByIdAndUpdate(
        req.user._id,
        {
            $unset: {
                refreshToken : 1
            } 
        },
        {
            new : true
        }
    )

    return res.status(200)
    .clearCookie("accessToken", options)
    .clearCookie("refreshToken", options)
    .json(
        new ApiResponse(200, {}, "User logged out")
    )
})


export { registerUser, loginUser, logoutUser }