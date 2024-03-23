import { asyncHandler } from "../utils/asyncHandler.js";
import { Order } from "../models/order.model.js";
import {ApiResponse} from "../utils/ApiResponse.js"

const createOrder = asyncHandler(async (req, res) => {
    
    const {customerId, products} = req.body

    if(
        !customerId || !products || products.length === 0
    ){
        throw new Error("The cart is empty")
    }

    let orderTotal = 0
    for (const product of products){
        orderTotal += product.price * product.quantity
    }
    
    const order = await Order.create({
        customer : customerId,
        orderPrice : orderTotal,
        orderItems : products,
        status : "PENDING"
    })

    if(!order){
        throw new Error("Something went wrong while creating the order.")
    }

    return res.status(201).json(
        new ApiResponse(201, order, "Order created successfully")
    )

})

const orderUpdate = asyncHandler(async (req, res) => {
    try {
        const orderId = req.params.orderId;
        const status = req.body

        if(!orderId){
            throw new Error("Order Id is not found")
        }

        if(!status){
            throw new Error("Status is not found")
        }

        const order = await Order.findById(orderId);
        if(!order){
            throw new Error("Order not found")
        }

        order.status = status

        const updatedOrder = await order.save()

        return res.status(200).json(
            new ApiResponse(200, updatedOrder, "Order updated successfully!")
        )
    } catch (error) {
        console.error("Error while updating order: ", error);
        res.status(500).json({error : "Internal server Error"})
    }
})

const deleteOrder = asyncHandler(async (req, res) => {
    try {
        const orderId = req.params.orderId

        if(!orderId){
            throw new Error("Order Id is required!")
        }

        const order = await Order.findById(orderId)

        if(!order){
            throw new Error("Order not found")
        }

        await order.remove()

        res.status(204).end();
    } catch (error) {
        console.error("Error while deleting order: ", error)
        res.status(500).json({error : "Internal server error"})
    }
})

export { createOrder, orderUpdate, deleteOrder }