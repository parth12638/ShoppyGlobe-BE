import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useFetchProducts from "../hooks/useFetchProducts";

function HomePage() {
  const { products, loading, error } = useFetchProducts();
  const [displayProducts, setDisplayProducts] = useState([]);

  // Randomly select 5 products when products are loaded
  useEffect(() => {
    if (products.length > 0) {
      const shuffled = [...products].sort(() => 0.5 - Math.random());
      setDisplayProducts(shuffled.slice(0, 5));
    }
  }, [products]);

  return (
    <main
      className="min-h-32 md:min-h-screen w-full px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-normal md:justify-between gap-4 md:gap-16 py-8 md:py-24"
      style={{
        backgroundImage:
          "url('https://img.freepik.com/free-vector/abstract-black-shapes-background-design_1017-31904.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-full md:w-1/2 flex flex-col justify-center space-y-4 md:space-y-8">
        <div className="space-y-1 md:space-y-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold text-[#eacda3] font-poppins animate-fade-in-up">
            Discover
          </h2>
          <h2 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold text-[#eacda3] font-poppins animate-fade-in-up delay-100">
            Most Suitable
          </h2>
          <h2 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold text-[#eacda3] font-poppins animate-fade-in-up delay-200">
            Products
          </h2>
        </div>
        <p className="text-base sm:text-lg md:text-2xl xl:text-3xl font-serif text-[#d6ae7b] max-w-2xl animate-fade-in-up delay-300">
          Shop for the best products at the best prices.
        </p>
        <Link to="/">
          <button className="inline-flex items-center justify-center px-6 py-3 md:px-8 md:py-4 bg-[#eacda3] hover:bg-[#d6ae7b] text-white font-bold rounded-lg shadow-lg hover:shadow-xl transform transition-all duration-200 ease-in-out hover:-translate-y-1 active:translate-y-0 active:shadow-md text-sm sm:text-base md:text-lg">
            Shop Now
          </button>
        </Link>
      </div>

      {/* Popular Products Section */}
      <div className="mt-16 w-full">
        <h3 className="text-xl sm:text-2xl md:text-3xl xl:text-4xl font-semibold text-[#d6ae7b] mb-8 text-center">
          Popular Products
        </h3>
        <div className="relative w-full overflow-hidden">
          <div className="flex space-x-6 animate-scroll">
            {[...products, ...products].map((product, index) => (
              <Link to={`/products/${product.id}`} key={`${product.id}-${index}`}>
                <div className="w-56 h-72 bg-white rounded-lg shadow-md p-4 transform transition-transform duration-200 hover:scale-105 hover:shadow-xl">
                  <img
                    src={product.thumbnail}
                    alt={product.title}
                    className="w-full h-40 object-cover rounded-t-lg mb-4"
                  />
                  <div className="flex flex-col space-y-1">
                    <h3 className="text-lg font-semibold text-[#eacda3] truncate">
                      {product.title}
                    </h3>
                    <span className="text-green-600 font-bold">
                      ${product.price}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

export default HomePage;
