import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";


const connectDB = async() => {
    try {
        const connectedInstance = await mongoose.connect(`${process.env.DB_URI}/${DB_NAME}`)
        console.log(`Mongo DB connected!! Hosted on: ${connectedInstance.connection.host}`);
    } catch (error) {
        console.log("Error: ", error?.message || "MongoDB failed to connect")
    }
}

export { connectDB }