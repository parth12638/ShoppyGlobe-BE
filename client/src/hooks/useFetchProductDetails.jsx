import { useState, useEffect } from "react";

const useFetchProductDetail = (id) => { 
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProductDetail = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        if (!response.ok) throw new Error("Failed to fetch");
        const data = await response.json();
        setProduct(data);
      } catch (err) {
        setError("Failed to load product details...");
      } finally {
        setLoading(false);
      }
    };

    fetchProductDetail();
  }, [id]);

  return { product, loading, error }; // Returned the states
};

export default useFetchProductDetail;
