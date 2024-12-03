import CartItem from "../model/cart.js";
import Product from "../model/product.js";

//add items to cart(add using id then fetch title qty image and price)
export const addCartItem = async (req, res) => {
  const { productId, qty } = req.body;
  const userId = req.user.id;

  if (!productId || !qty) {
    return res
      .status(400)
      .json({ message: "Product ID and quantity are required." });
  }

  if (qty <= 0) {
    return res
      .status(400)
      .json({ message: "Quantity must be greater than zero." });
  }

  try {
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    const existingCartItem = await CartItem.findOne({ userId, productId });
    if (existingCartItem) {
      return res
        .status(400)
        .json({ message: "Item already in cart. Please update the quantity." });
    }

    const newCartItem = new CartItem({
      userId,
      productId: product._id,
      title: product.title,
      image: product.image,
      price: product.price,
      qty,
    });

    await newCartItem.save();
    res
      .status(201)
      .json({ message: "Item added to cart successfully", newCartItem });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Error adding item to cart", error: error.message });
  }
};

//get items from user cart using user id
export const getUserCart = async (req, res) => {
  const userId = req.user.id;

  try {
    const cartItems = await CartItem.find({ userId });
    res.status(200).json(cartItems);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching cart items", error: error.message });
  }
};

//update quantity in cart item
export const updateCartItem = async (req, res) => {
  const { id } = req.params;
  const { qty } = req.body;

  try {
    const updatedItem = await CartItem.findByIdAndUpdate(
      id,
      { qty },
      { new: true }
    );
    if (!updatedItem) {
      return res.status(404).json({ message: "Cart item not found" });
    }
    res
      .status(200)
      .json({ message: "Cart item updated successfully", updatedItem });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error updating cart item", error: error.message });
  }
};

//delete items from cart using id
export const removeCartItem = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedItem = await CartItem.findByIdAndDelete(id);
    if (!deletedItem) {
      return res.status(404).json({ message: "Cart item not found" });
    }
    res.status(200).json({ message: "Cart item removed successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error removing cart item", error: error.message });
  }
};
