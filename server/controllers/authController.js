import User from "../model/user.js";
import jwt from "jsonwebtoken";
import dotenv from 'dotenv';
dotenv.config(); // To load the .env file and get environment variables

//for registering new user
export const registerUser = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email }); //check by email if user already exit then return
    if (existingUser) {
      return res
        .status(400)
        .json({ message: "User already exists, please login." });
    }

    //add new user email username and password
    const newUser = new User({ username, email, password });
    await newUser.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Error registering user", error: error.message });
  }
};

//login the existing user
export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) { //check if user exist then match password and then generate jwt token that will expire in 1hour.
      return res
        .status(404)
        .json({ message: "User not found, please register." });
    }

    if (user.password === password) {
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
        expiresIn: "1h",
      });
      return res.status(200).json({ message: "Login successful", token });
    }

    return res.status(401).json({ message: "Invalid credentials" });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Error in logging in", error: error.message });
  }
};
