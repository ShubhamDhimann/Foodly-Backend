import mongoose, { model } from "mongoose";

const dishSchema = new mongoose.Schema({
    CategoryName: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    url: {
        type: String,
        required: true
    }
})  

const Dish = new mongoose.model("Dish",dishSchema);

export default Dish;