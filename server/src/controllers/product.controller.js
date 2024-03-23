import { Product } from "../models/product.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const addProduct = asyncHandler(async (req, res) => {
    const {name, category, description, price, stock} = req.body

    if(
        [name, category,description, price, stock].some((field) => field?.trim() === "")
    ){
        throw new Error("Required fields are empty!")
    }

    const newProduct = await Product.create({
        name,
        category,
        description,
        price,
        stock,
        farmer: req.user._id
    })

    if(!newProduct){
        throw new Error("Something went wrong while adding a product")
    }

    return res.status(201).json(
        new ApiResponse(200, newProduct, "New Product added successfully!")
    )

})

const modifyProduct = asyncHandler(async (req, res) => {
    try {
        const productId = req.params.productId

        const {name, description, price, stock} = req.body

        if(
            [name, category,description, price, stock].some((field) => field?.trim() === "")
        ){
            throw new Error("Required fields are empty!")
        }

        const product  = await Product.findById(productId)

        if(!product){
            throw new Error("Product not found")
        }

        if(product.farmer.toString() !== req.user._id.toString()){
            throw new Error("Unauthorized access!!")
        }

        product.name = name
        product.description = description
        product.price = price
        product.stock = stock

        const updatedProduct = await product.save();

        return res.status(200).json(
            new ApiResponse(200, updatedProduct, "Product updated successfully")
        )

    } catch (error) {
        console.error("Error: ", error)
    }
})

const deleteProduct = asyncHandler(async (req, res) => {
    try {
        const productId = req.params.productId;

        if(!productId){
            throw new Error("Product id is required")
        }

        const product = await Product.findById()

        if(!product){
            throw new Error("Product not found")
        }

        if(product.farmer.toString() !== req.user._id.toString()){
            throw new Error("Unauthorized access!!")
        }

        await product.remove()

        return res.status(204).end()
    } catch (error) {
        console.error("Error: ", error)
    }
})


export { addProduct, modifyProduct, deleteProduct }