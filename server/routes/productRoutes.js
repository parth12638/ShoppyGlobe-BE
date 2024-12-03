import express from "express";
import {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/productController.js"; //to get all product, product by id and create new product update and delete product.

const router = express.Router();
 
router.get("/products", getAllProducts); //route to get all product
router.get("/product/:id", getProductById); //route to get product by id
router.post("/product", createProduct); //route to post new product
router.put("/product/:id", updateProduct); //route to update existing product by id
router.delete("/product/:id", deleteProduct); //route to delete existing product by id

export default router;
