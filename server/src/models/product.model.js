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
        type: Schema.Types.ObjectId,
        ref: "Category"
    }
})