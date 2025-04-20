import mongoose from "mongoose";
import Dish from "./models/foodCardSchems.js";

mongoose.connect("mongodb+srv://Shubham:Shubham%40123@foodly-cluster1.5enl5.mongodb.net/Foodly?retryWrites=true&w=majority").then(console.log("connected")).catch(( err) => {console.log(err);})

const dishArr = [
  {"CategoryName": "Pizza","name": "Pepperoni Pizza","price": "250","url": "https://images.pexels.com/photos/3682837/pexels-photo-3682837.jpeg?auto=compress&cs=tinysrgb&w=600"},
  {"CategoryName": "Pizza","name": "Veggie Supreme","price": "220","url": "https://images.unsplash.com/photo-1636044994717-40c9893834f9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8VmVnZ2llJTIwU3VwcmVtZSUyMHBpenphfGVufDB8MHwwfHx8Mg%3D%3D"},
  {"CategoryName": "Pizza","name": "BBQ Chicken Pizza","price": "280","url": "https://images.unsplash.com/photo-1734769484424-36b99dd84818?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fEJCUSUyMENoaWNrZW4lMjBQaXp6YXxlbnwwfDB8MHx8fDI%3D"},
  {"CategoryName": "Pizza","name": "Cheese Burst Pizza","price": "240","url": "https://images.pexels.com/photos/2619970/pexels-photo-2619970.jpeg?auto=compress&cs=tinysrgb&w=600"},
  {"CategoryName": "Pizza","name": "Margherita Pizza","price": "200","url": "https://images.pexels.com/photos/6605214/pexels-photo-6605214.jpeg?auto=compress&cs=tinysrgb&w=600"},
  {"CategoryName": "Pizza","name": "Paneer Tikka Pizza","price": "260","url": "https://images.pexels.com/photos/578009/pexels-photo-578009.jpeg?auto=compress&cs=tinysrgb&w=600"},
  {"CategoryName": "Pizza","name": "Mexican Wave Pizza","price": "270","url": "https://images.unsplash.com/photo-1657047404609-37219e9705cc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8TWV4aWNhbiUyMFdhdmUlMjBQaXp6YXxlbnwwfDB8MHx8fDI%3D"},
  {"CategoryName": "Pizza","name": "Farmhouse Delight","price": "230","url": "https://images.pexels.com/photos/19260836/pexels-photo-19260836/free-photo-of-top-view-of-pizza.jpeg?auto=compress&cs=tinysrgb&w=600"},

  {"CategoryName": "Burger","name": "Cheese Burst Burger","price": "150","url": "https://images.unsplash.com/photo-1584178639036-613ba57e5e39?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fENoZWVzZSUyMEJ1cnN0JTIwQnVyZ2VyfGVufDB8MHwwfHx8Mg%3D%3D"},
  {"CategoryName": "Burger","name": "Double Patty Burger","price": "180","url": "https://images.pexels.com/photos/5908280/pexels-photo-5908280.jpeg?auto=compress&cs=tinysrgb&w=600"},
  {"CategoryName": "Burger","name": "Grilled Chicken Burger","price": "170","url": "https://images.unsplash.com/photo-1710265146071-177fb53ebcc4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8R3JpbGxlZCUyMENoaWNrZW4lMjBCdXJnZXJ8ZW58MHwwfDB8fHx8fDI%3D"},
  {"CategoryName": "Burger","name": "Crispy Veg Burger","price": "140","url": "https://images.unsplash.com/photo-1690650262031-b01b6e172374?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Q3Jpc3B5JTIwVmVnJTIwQnVyZ2VyfGVufDB8MHwwfHx8Mg%3D%3D"},
  {"CategoryName": "Burger","name": "Spicy Mexican Burger","price": "190","url": "https://images.unsplash.com/photo-1592860012968-831b6c831a82?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fFNwaWN5JTIwTWV4aWNhbiUyMEJ1cmdlcnxlbnwwfDB8MHx8fDI%3D"},
  {"CategoryName": "Burger","name": "BBQ Beef Burger","price": "200","url": "https://images.unsplash.com/photo-1613160775054-d4a634592b7f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8QkJRJTIwQmVlZiUyMEJ1cmdlcnxlbnwwfDB8MHx8fDI%3D"},
  {"CategoryName": "Burger","name": "Tandoori Aloo Burger","price": "160","url": "https://images.unsplash.com/photo-1687580713658-dc3cc2f3aaae?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fFRhbmRvb3JpJTIwQWxvbyUyMEJ1cmdlcnxlbnwwfDB8MHx8fDI%3D"},
  {"CategoryName": "Burger","name": "Chicken Mayo Burger","price": "170","url": "https://images.pexels.com/photos/6896379/pexels-photo-6896379.jpeg?auto=compress&cs=tinysrgb&w=600"},

  {"CategoryName": "Pasta","name": "Creamy Alfredo Pasta","price": "200","url": "https://images.pexels.com/photos/11220208/pexels-photo-11220208.jpeg?auto=compress&cs=tinysrgb&w=600"},
  {"CategoryName": "Pasta","name": "Spicy Arrabbiata Pasta","price": "190","url": "https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?auto=compress&cs=tinysrgb&w=600"},
  {"CategoryName": "Pasta","name": "Mac & Cheese","price": "210","url": "https://images.pexels.com/photos/9397238/pexels-photo-9397238.jpeg?auto=compress&cs=tinysrgb&w=600"},
  {"CategoryName": "Pasta","name": "Penne Pesto Pasta","price": "220","url": "https://images.pexels.com/photos/30373423/pexels-photo-30373423/free-photo-of-delicious-homemade-italian-pasta-dish.jpeg?auto=compress&cs=tinysrgb&w=600"},
  {"CategoryName": "Pasta","name": "Four Cheese Pasta","price": "230","url": "https://images.pexels.com/photos/1256875/pexels-photo-1256875.jpeg?auto=compress&cs=tinysrgb&w=600"},
  {"CategoryName": "Pasta","name": "Mushroom Truffle Pasta","price": "250","url": "https://images.pexels.com/photos/2773940/pexels-photo-2773940.jpeg?auto=compress&cs=tinysrgb&w=600"},
  {"CategoryName": "Pasta","name": "Garlic Butter Pasta","price": "210","url": "https://images.pexels.com/photos/725990/pexels-photo-725990.jpeg?auto=compress&cs=tinysrgb&w=600"},
  {"CategoryName": "Pasta","name": "Schezwan Noodle Pasta","price": "220","url": "https://images.pexels.com/photos/6287525/pexels-photo-6287525.jpeg?auto=compress&cs=tinysrgb&w=600"},

  {"CategoryName": "Beverage","name": "Cold Coffee","price": "120","url": "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Q29sZCUyMENvZmZlZXxlbnwwfDB8MHx8fDA%3D"},
  {"CategoryName": "Beverage","name": "Mango Smoothie","price": "130","url": "https://images.pexels.com/photos/31490093/pexels-photo-31490093/free-photo-of-colorful-fruit-smoothies-in-mason-jars.jpeg?auto=compress&cs=tinysrgb&w=600"},
  {"CategoryName": "Beverage","name": "Lemon Iced Tea","price": "110","url": "https://images.unsplash.com/photo-1656936632107-0bfa69ea06de?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TGVtb24lMjBJY2VkJTIwVGVhfGVufDB8MHwwfHx8MA%3D%3D"},
  {"CategoryName": "Beverage","name": "Strawberry Milkshake","price": "140","url": "https://images.pexels.com/photos/3625372/pexels-photo-3625372.jpeg?auto=compress&cs=tinysrgb&w=600"},
  {"CategoryName": "Beverage","name": "Green Apple Mojito","price": "150","url": "https://images.pexels.com/photos/616833/pexels-photo-616833.jpeg?auto=compress&cs=tinysrgb&w=600"},
  {"CategoryName": "Beverage","name": "Chocolate Frappe","price": "160","url": "https://images.pexels.com/photos/7091582/pexels-photo-7091582.jpeg?auto=compress&cs=tinysrgb&w=600"},
  {"CategoryName": "Beverage","name": "Blue Lagoon","price": "140","url": "https://images.pexels.com/photos/1535086/pexels-photo-1535086.jpeg?auto=compress&cs=tinysrgb&w=600"},
  {"CategoryName": "Beverage","name": "Kiwi Punch","price": "135","url": "https://plus.unsplash.com/premium_photo-1661347868028-55440b53c791?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8S2l3aSUyMGp1aWNlfGVufDB8MHwwfHx8MA%3D%3D"}
]

  
  

Dish.create(dishArr).then(console.log("ye insertion to shuru hone se pehle hi khatam ho gya bhai")).catch((err) => {console.log(err);})