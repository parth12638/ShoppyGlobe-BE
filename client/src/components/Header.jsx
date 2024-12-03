
import { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const cartItemCount = useSelector((state) => state.cart.cart.length);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className="flex flex-col">
      <nav className="flex items-center justify-between py-5 px-4 bg-gradient-to-r from-[#eacda3] to-[#d6ae7b] text-zinc-100 shadow-md transition-all duration-300 border-b-4 border-white shadow-lg">


        {/* Logo (linked to root path) */}
        <Link to="/home2">
          <h1 className="text-2xl font-bold hover:scale-105 hover:shadow-lg transition-transform duration-300">
            Shoppy <span className="text-zinc-700 font-normal">Globe</span>
          </h1>
        </Link>
        {/* Navigation Links */}
        <ul className="hidden sm:flex gap-6 text-sm">
          <NavLink
            to="/home2"
            className="hover:text-gray-300 transition-all duration-300 hover:scale-105 hover:underline"
          >
            HOME
          </NavLink>
          <NavLink
            to="/"
            className="hover:text-gray-300 transition-all duration-300 hover:scale-105 hover:underline"
          >
            PRODUCTS
          </NavLink>
          <NavLink
            to="/about"
            className="hover:text-gray-300 transition-all duration-300 hover:scale-105 hover:underline"
          >
            ABOUT
          </NavLink>
          <NavLink
            to="/contact"
            className="hover:text-gray-300 transition-all duration-300 hover:scale-105 hover:underline"
          >
            CONTACT
          </NavLink>
          <NavLink
            to="/login"
            className="hover:text-gray-300 transition-all duration-300 hover:scale-105 hover:underline"
          >
            LOGIN
          </NavLink>
        </ul>

        {/* Action Icons */}
        <div className="flex items-center gap-6">
          <NavLink
            to="/cart"
            className="relative flex items-center gap-1 text-sm hover:text-gray-300 transition-all duration-300 hover:scale-105"
          >
            <FaShoppingCart />
            <span>Cart ({cartItemCount})</span>
          </NavLink>
          <button
            onClick={toggleMenu}
            className="sm:hidden text-zinc-100 hover:text-zinc-400 transition-transform duration-300 hover:rotate-90"
          >
            {isMenuOpen ? <AiOutlineClose size={24} /> : <CiMenuFries size={24} />}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;

