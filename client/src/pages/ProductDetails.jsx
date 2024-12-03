
import { Link, useParams } from "react-router-dom";
import { InfinitySpin } from "react-loader-spinner";
import useFetchProductDetail from "../hooks/useFetchProductDetails";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/CartSlice";
import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";

const ProductDetail = () => {
  const { id } = useParams();
  const { product, loading, error } = useFetchProductDetail(id);
  const [singleProduct, setSingleProduct] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (product) {
      setSingleProduct(product);
    }
  }, [product]);

  const handleAddToCart = () => {
    if (singleProduct) {
      const cartItem = {
        id: singleProduct.id,
        name: singleProduct.title,
        price: singleProduct.price,
        qty: 1,
        image: singleProduct.thumbnail,
      };
      dispatch(addToCart(cartItem));
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[60vh]">
        <InfinitySpin width="200" color="#1995AD" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-[60vh]">
        <p className="text-red-500 text-2xl font-semibold">{error}</p>
      </div>
    );
  }

  return (
    <div className="px-8 py-10 max-w-3xl mx-auto">
      {singleProduct && (
        <div className="flex flex-col items-center sm:flex-row gap-8">
          {/* Product Image */}
          <div className="w-full sm:w-1/2 flex justify-center">
            <img
              src={singleProduct.thumbnail}
              alt={singleProduct.title}
              className="max-w-full object-cover rounded-lg"
            />
          </div>

          {/* Product Details */}
          <div className="w-full sm:w-1/2 flex flex-col items-center sm:items-start">
            <h1 className="text-3xl font-semibold text-center sm:text-left mb-4">
              {singleProduct.title}
            </h1>
            <p className="text-xl font-semibold text-[#d6ae7b] mb-6">
              ${singleProduct.price}
            </p>
            <p className="text-sm text-zinc-600 mb-6">{singleProduct.description}</p>
            <div className="flex flex-wrap gap-4 mb-6">
              <div className="flex items-center gap-1">
                <FaStar className="text-yellow-500" />
                <p className="text-sm">{singleProduct.rating}</p>
              </div>
              <p className="text-sm text-zinc-600">
                Category: {singleProduct.category}
              </p>
              <p className="text-sm text-zinc-600">
                Brand: {singleProduct.brand}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 w-full">
              <button
                onClick={handleAddToCart}
                className="bg-[#eacda3] hover:bg-[#d6ae7b] transition-all duration-300 ease-linear text-white px-6 py-3 rounded-md shadow-lg"
              >
                Add to Cart
              </button>
              <Link to="/">
                <button className="bg-[#eacda3] hover:bg-[#d6ae7b] transition-all duration-300 ease-linear text-white px-6 py-3 rounded-md shadow-lg">
                  Back to Browse Products
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
