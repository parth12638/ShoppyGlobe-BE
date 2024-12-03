import express from "express";

//controller for add items get items update item and remove items from cart
import {
  addCartItem,
  getUserCart,
  updateCartItem,
  removeCartItem,
} from "../controllers/cartController.js";
import { authenticateUser } from "../middleware/authMiddleware.js"; //middleware to verify jwt

const router = express.Router();

router.use(authenticateUser);

router.post("/", addCartItem); //to post item by id in cart

router.get("/", getUserCart); //get all products added in cart

router.put("/:id", updateCartItem); //update item qty in cart

router.delete("/:id", removeCartItem); //delete item from cart 

export default router;
