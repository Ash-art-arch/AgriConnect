import mongoose, { Schema } from "mongoose";

const roleSchema = new Schema({
    buyer: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    seller: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
}, {timestamps: true})

export const Role = mongoose.model("Role", roleSchema)