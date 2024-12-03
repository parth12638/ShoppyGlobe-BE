
import { InfinitySpin } from "react-loader-spinner";
import ProductItem from "../components/ProductItem";
import SearchProduct from "../components/SearchProduct";
import useFetchProducts from "../hooks/useFetchProducts";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const ProductList = () => {
  const { products, loading, error } = useFetchProducts();
  const [filteredProducts, setFilteredProducts] = useState([]);

  const searchedText = useSelector((state) => state.search.search);

  useEffect(() => {
    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(searchedText.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [products, searchedText]);

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
    <div
      style={{
        backgroundImage: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe--_4Uh2k0uvMW84kfSN1a0Xttq7uP4GpKTkl6Lgb25lQc7Ygi1kaXzTGEpCMRR6Ytdc&usqp=CAU')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="min-h-screen"
    >
      <SearchProduct />
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-3 gap-3">
        {filteredProducts.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            name={product.title}
            price={product.price}
            image={product.thumbnail}
            rating={product.rating}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
