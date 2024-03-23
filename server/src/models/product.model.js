import mongoose, { Schema } from "mongoose";

const productSchema = new Schema({
    name:{
        type: String,
        required: true,
        trim: true
    },
    price:{
        type: Number,
        required: true,
        trim: true
    },
    category:{
        type: String,
        default: "Mischellaneous"
    },
    description:{
        type: String,
        required: true,
    },
    stock:{
        type: Number,
        required: true
    },
    farmer: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
})

export const Product = mongoose.model("Product", productSchema)