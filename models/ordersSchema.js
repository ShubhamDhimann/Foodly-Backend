import mongoose from "mongoose"

const orderSchema = new mongoose.Schema({
    userEmail: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    cart: {
        type: Array,
        required: true
    },
})

const Order = new mongoose.model("Order", orderSchema )

export default Order 