
import { useSelector, useDispatch } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";
import {
  incrementQty,
  decrementQty,
  removeFromCart,
  selectTotalPrice,
  selectTotalItems,
} from "../redux/slices/CartSlice";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";

const CartPage = () => {
  const cartItems = useSelector((state) => state.cart.cart); // for cart items
  const totalPrice = useSelector(selectTotalPrice); // for total price
  const totalItems = useSelector(selectTotalItems); // for total quantity

  const dispatch = useDispatch();

  const handleIncrement = (id) => {
    dispatch(incrementQty(id)); // increment quantity of product
  };

  const handleDecrement = (id) => {
    dispatch(decrementQty(id)); // decrement product quantity
  };

  const handleRemove = (id) => {
    dispatch(removeFromCart(id)); // remove product from cart
  };

  return (
    <div
      className="min-h-screen" 
      style={{
        backgroundImage: "url('https://img.freepik.com/free-vector/white-elegant-texture-wallpaper_23-2148417584.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed', // To prevent scrolling issue with background
      }}
    >
      <div className="border-t pt-14">
        <div className="text-2xl mb-3 text-center">
          <h1 className="text-3xl font-bold flex items-center justify-center gap-2 text-zinc-500">
            Your Cart <FaShoppingCart />
          </h1>
        </div>

        {cartItems.length === 0 ? (
          <div className="flex flex-col items-center mt-10">
            <p className="text-black text-2xl">Your cart is empty.</p>
            <div className="mt-6">
              <Link to="/">
                <button className="bg-[#eacda3] hover:bg-[#d6ae7b] transition-all duration-300 ease-linear text-white px-6 py-3 rounded">
                  Browse Products to Add
                </button>
              </Link>
            </div>
          </div>
        ) : (
          <div>
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4"
              >
                <div className="flex items-start gap-6">
                  <img className="w-16 sm:w-20" src={item.image} alt={item.name} />
                  <div>
                    <p className="text-xs sm:text-lg font-medium">{item.name}</p>
                    <div className="flex items-center gap-5 mt-2">
                      <p className="text-lg">${item.price}</p>
                      <p className="px-2 sm:px-3 sm:py-1 border bg-slate-50">{item.size}</p>
                    </div>
                  </div>
                </div>

                {/* Quantity Adjusters */}
                <div className="flex items-center justify-between">
                  <button
                    onClick={() => handleDecrement(item.id)}
                    className="text-xl font-bold text-[#1995AD] hover:text-[#356570] px-2 py-1"
                  >
                    -
                  </button>
                  <input
                    className="border w-12 text-center"
                    type="number"
                    min={1}
                    value={item.qty}
                    onChange={(e) =>
                      e.target.value === "" || e.target.value === "0"
                        ? null
                        : handleIncrement(item.id, Number(e.target.value))
                    }
                  />
                  <button
                    onClick={() => handleIncrement(item.id)}
                    className="text-xl font-bold text-[#1995AD] hover:text-[#356570] px-2 py-1"
                  >
                    +
                  </button>
                </div>

                {/* Remove Item */}
                <img
                  onClick={() => handleRemove(item.id)}
                  className="w-4 mr-4 sm:w-5 cursor-pointer"
                  src="https://img.icons8.com/ios-filled/50/000000/trash.png"
                  alt="remove item"
                />
              </div>
            ))}
          </div>
        )}

        <div className="flex justify-end my-20 pr-4">
          <div className="w-full sm:w-[450px]">
            <div className="flex justify-between mb-2">
              <span className="font-semibold text-black text-lg">Total Items:</span>
              <span className="text-black text-lg">{totalItems}</span>
            </div>
            <div className="flex justify-between mb-4">
              <span className="font-semibold text-black text-lg">Total Price:</span>
              <span className="text-black text-lg">${totalPrice.toFixed(2)}</span>
            </div>
            <div className="flex justify-center">
              <Link to="/checkout">
                <button className="bg-[#eacda3] hover:bg-[#d6ae7b] transition-all duration-300 ease-linear text-white px-6 py-3 rounded">
                  Checkout
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
