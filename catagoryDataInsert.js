import mongoose from "mongoose";
import FoodCatagory from "./models/dishCatagorySchema.js";

const catagoryArray = [
    {
      "CategoryName": "Pizza",
      "description": "Delicious and freshly baked pizzas with a variety of toppings."
    },
    {
      "CategoryName": "Burger",
      "description": "Juicy and flavorful burgers made with fresh ingredients."
    },
    {
      "CategoryName": "Pasta",
      "description": "Mouthwatering pasta dishes cooked in rich and creamy sauces."
    },
    {
      "CategoryName": "Beverage",
      "description": "Refreshing drinks and beverages to quench your thirst."
    }
  ]
  

mongoose.connect("mongodb+srv://Shubham:Shubham%40123@foodly-cluster1.5enl5.mongodb.net/Foodly?retryWrites=true&w=majority").then(console.log("connected")).catch(( err) => {console.log(err);})

FoodCatagory.create(catagoryArray).then(console.log("Aaahh..... ho gya bhai")).catch((err) => {console.log(err);})