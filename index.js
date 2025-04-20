import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import { body, validationResult } from "express-validator"
import FoodCatagory from "./models/dishCatagorySchema.js"
import Dish from "./models/foodCardSchems.js"
import User from './models/NewUserSchema.js'
import Order from './models/ordersSchema.js'
import jwt from 'jsonwebtoken'
import bcrypt from "bcrypt"

const app = express()
const port = 3000
const jwtSecret = "iamfounderandceooffoodly"

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: 'https://foodly-138t.onrender.com' }));

mongoose.connect("mongodb+srv://Shubham:Shubham%40123@foodly-cluster1.5enl5.mongodb.net/Foodly?retryWrites=true&w=majority")

app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Server Status</title>
      </head>
      <body style="background-color:#111111; font-family:sans-serif; text-align:center; padding:50px;">
        <h1 style="color:#333;">😎 Ha Ha, Chal raha hai!!</h1>
        <p style="color:#555;">Your Express server is up and running.</p>
      </body>
    </html>
  `)
})

app.get('/getFoodData', async (req, res) => {
  try {
    const allDishes = await Dish.find();
    const allCategories = await FoodCatagory.find();

    res.status(200).json({
      dishes: allDishes,
      categories: allCategories
    });
  } catch (err) {
    console.error("Error fetching data:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ error: "User not found. Please register first." });
    }

    const passCompare = await bcrypt.compare(password , user.password)
    console.log("Bycrypt conparision status: ",passCompare);
    if (!passCompare) {
      return res.status(401).json({ error: "Incorrect password. Please try again." });
    }

    const data = {
      user:{
        id:user.id
      }
    }

    const authtoken = jwt.sign(data,jwtSecret) 

    return res.status(200).json({ message: "Login successful!", token:authtoken, user});
  } catch (err) {
    console.error("Login error:", err);
    return res.status(500).json({ error: "Server error. Please try again later." });
  }
}); 

app.post("/signup", [
  body("name")
    .notEmpty().withMessage("Name cannot be empty")
    .isLength({ min: 2 }).withMessage("Name must be at least 2 characters long"),

  body('email')
    .notEmpty().withMessage("Email cannot be empty")
    .isEmail().withMessage('Enter a valid email address')
    .normalizeEmail(),

  body('password')
    .isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
    .matches(/[A-Z]/).withMessage('Must contain at least one uppercase letter')
    .matches(/\d/).withMessage('Must contain at least one number')
    .matches(/[@$!%*#?&]/).withMessage('Must contain one special character')
],  async (req, res) => {
  const hashedPass = await bcrypt.hash(req.body.password, 10)
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  } else {
    try {
      const existing =  await User.findOne({ email : req.body.email})
      if(existing){
        return res.status(409).json({ error: "User already exists with this E-Mail address" });
      }
      const newUser = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: hashedPass
      });

      const data = {
        user: {
          id: newUser._id   
        }
      };
      
  
      const authtoken = jwt.sign(data,jwtSecret) 

      // console.log("User created:", newUser);
      return res.status(201).json({ message: "User registered successfully!", token: authtoken,  newUser });
    } catch (error) {
      console.error("Error creating user:", error);
      return res.status(500).json({ message: "Error saving user to database" });
    }
  }
});

app.post("/placeOrder", (req, res) => {
  const orderData = req.body
  // console.log(orderData);

  Order.create(orderData)
    .then(() => {
      res.status(201).json({ message: "Order placed successfully!" });
    })
    .catch((error) => { 
      console.error("Error placing order:", error);
      res.status(500).json({ message: "Error placing order" });
    });

})

app.get("/getOrders", async (req, res) => {
  const {userEmail} = req.query
  // console.log(userEmail); 
  try {
    const orders = await Order.find({ userEmail: userEmail });
    orders ? res.status(200).json({ orders }) : res.status(404).json({message: "Order history not found"})
    // console.log(orders);
    
  } catch (error) {
    console.error("Error fetching orders:", error);
    res.status(500).json({ message: "Error fetching orders" });
  }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
