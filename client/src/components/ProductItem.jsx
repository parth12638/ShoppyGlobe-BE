
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/slices/CartSlice";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { IoIosStar } from "react-icons/io";

const ProductItem = ({ id, name, price, image, rating }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const [showAlert, setShowAlert] = useState(false);

  const shortedTitle = (title) => {
    return title.length > 20 ? title.substring(0, 20) + "..." : title;
  };

  const handleAddToCart = () => {
    dispatch(addToCart({ id, name, price, qty: 1, image }));
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 2000); // Hide alert after 2 seconds
  };

  return (
    <div className="m-2 w-[350px] h-[520px] group px-10 py-5 bg-white/10 rounded-lg flex flex-col items-center justify-center gap-2 relative after:absolute after:h-full after:bg-gradient-to-r after:from-[#eacda3] after:to-[#d6ae7b] z-20 shadow-lg after:-z-20 after:w-full after:inset-0 after:rounded-lg transition-all duration-300 hover:transition-all hover:duration-300 after:transition-all after:duration-500 after:hover:transition-all after:hover:duration-500 overflow-hidden cursor-pointer after:-translate-y-full after:hover:translate-y-0 [&_p]:delay-200 [&_p]:transition-all">
      <Link to={`/products/${id}`}>
        <img
          src={image || "https://via.placeholder.com/150"}
          alt={name}
          className="h-56 w-full object-cover mb-3 rounded-lg"
        />
        <p className="font-semibold text-gray-500 tracking-wider group-hover:text-gray-700 text-xl">
          {shortedTitle(name)}
        </p>
        <p className="font-semibold text-gray-600 text-xs my-3 flex items-center gap-1">
          <IoIosStar className="text-yellow-500" />
          {rating}
        </p>
      </Link>
      <div className="flex flex-row justify-between items-center w-full">
        <p className="text-[#A2B59B] font-semibold group-hover:text-gray-800">
          ${price}
        </p>
        <Link to={`/products/${id}`}>
          <button className="bg-gradient-to-r from-[#eacda3] to-[#d6ae7b] shadow-[10px_10px_150px_#A2B59B] cursor-pointer py-2 px-4 text-sm font-semibold rounded-full hover:bg-gradient-to-r hover:from-[#eacda3] hover:to-[#d6ae7b] transition duration-300">
            Details
          </button>
        </Link>
        {cart.products?.some((p) => p.id === id) ? (
          <p className="font-semibold text-gray-500">In Cart</p>
        ) : (
          <button
            onClick={handleAddToCart}
            className="lg:inline-flex items-center gap-3 group-hover:bg-[#5C6E37] group-hover:text-white bg-gradient-to-r from-[#eacda3] to-[#d6ae7b] shadow-[10px_10px_150px_#A2B59B] cursor-pointer py-2 px-4 text-sm font-semibold rounded-full hover:bg-gradient-to-r hover:from-[#eacda3] hover:to-[#d6ae7b] transition duration-300"
          >
            <FaShoppingCart /> Add to cart
          </button>
        )}
      </div>

      {/* Alert when item is added to the cart */}
      {showAlert && (
        <div className="absolute top-0 right-0 mt-4 mr-4 bg-gradient-to-r from-[#eacda3] to-[#d6ae7b] text-white p-4 rounded-lg shadow-lg">
          <p>Added to Cart!</p>
        </div>
      )}
    </div>
  );
};

export default ProductItem;
