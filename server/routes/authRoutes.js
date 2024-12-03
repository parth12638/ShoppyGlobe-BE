import express from "express";
import { registerUser, loginUser } from "../controllers/authController.js";

const router = express.Router();

router.post("/register", registerUser); //route for register user
router.post("/login", loginUser); //route for login user

export default router;
