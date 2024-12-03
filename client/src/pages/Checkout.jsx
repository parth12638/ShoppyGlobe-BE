import { useFormik } from "formik";
import * as Yup from "yup";
import { useSelector } from "react-redux";
import { selectTotalItems, selectTotalPrice } from "../redux/slices/CartSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clearCart } from "../redux/slices/CartSlice";

// Checkout page with Formik and Yup validation
const CheckoutForm = () => {
  const totalPrice = useSelector(selectTotalPrice);
  const totalItems = useSelector(selectTotalItems);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Form validation
  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    address: Yup.string().required("Address is required"),
    cardNumber: Yup.string()
      .required("Card number is required")
      .matches(/^[0-9]{16}$/, "Card number must be 16 digits"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      address: "",
      cardNumber: "",
    },
    validationSchema,
    onSubmit: () => {
      alert("Order successful!");
      navigate("/order");
      dispatch(clearCart());
    },
  });

  return (
    <div
      className="p-8 min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('https://img.freepik.com/free-vector/white-abstract-wallpaper_23-2148830026.jpg')",
      }}
    >
      <div className="container mx-auto">
        <h2 className="text-4xl sm:text-5xl text-black font-semibold mb-8 text-center tracking-widest text-shadow-lg">
          Checkout
        </h2>
        <form onSubmit={formik.handleSubmit} className="max-w-lg mx-auto p-6 bg-white bg-opacity-70 rounded-lg shadow-xl backdrop-blur-md">
          <div className="mb-6">
            <label htmlFor="name" className="block text-gray-800 text-lg font-medium mb-2">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              className="w-full p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold transition-all duration-300"
              onChange={formik.handleChange}
              value={formik.values.name}
            />
            {formik.touched.name && formik.errors.name ? (
              <div className="text-red-500 text-sm mt-1">{formik.errors.name}</div>
            ) : null}
          </div>

          <div className="mb-6">
            <label htmlFor="address" className="block text-gray-800 text-lg font-medium mb-2">Address</label>
            <input
              id="address"
              name="address"
              type="text"
              className="w-full p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold transition-all duration-300"
              onChange={formik.handleChange}
              value={formik.values.address}
            />
            {formik.touched.address && formik.errors.address ? (
              <div className="text-red-500 text-sm mt-1">{formik.errors.address}</div>
            ) : null}
          </div>

          <div className="mb-6">
            <label htmlFor="cardNumber" className="block text-gray-800 text-lg font-medium mb-2">Card Number</label>
            <input
              id="cardNumber"
              name="cardNumber"
              type="text"
              className="w-full p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold transition-all duration-300"
              onChange={formik.handleChange}
              value={formik.values.cardNumber}
            />
            {formik.touched.cardNumber && formik.errors.cardNumber ? (
              <div className="text-red-500 text-sm mt-1">{formik.errors.cardNumber}</div>
            ) : null}
          </div>

          <div className="mb-6">
            <p className="text-sm text-gray-700">Total Items: <span className="font-semibold">{totalItems}</span></p>
            <p className="text-sm text-gray-700">Total Price: <span className="font-semibold">${totalPrice.toFixed(2)}</span></p>
          </div>

          <button
  type="submit"
  className="w-full bg-gradient-to-r from-[#eacda3] via-[#d6ae7b] to-[#eacda3] hover:from-[#d6ae7b] hover:to-[#eacda3] transition-all duration-300 ease-in-out text-black py-3 px-6 rounded-lg shadow-lg transform hover:scale-105"
>
  Pay Now
</button>

        </form>
      </div>
    </div>
  );
};

export default CheckoutForm;
