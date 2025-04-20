import mongoose, { mongo } from "mongoose";

const dishCatagorySchema = new mongoose.Schema({
    CategoryName: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      }
});

const FoodCatagory = new mongoose.model("FoodCatagory",dishCatagorySchema);

export default FoodCatagory;