import { useNavigate } from "react-router-dom";

// Order success page with redirect to home button
const OrderSuccess = () => {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate("/home2");
  };

  return (
    <div className="flex flex-col items-center justify-center h-[80vh]">
      <h2 className="text-3xl font-bold mb-4">Order Successful!</h2>
      <p className="text-xl mb-8">Thank you for your purchase.</p>
      <button
        onClick={handleBackToHome}
        className="bg-[#eacda3] hover:bg-[#b18c59] transition-all duration-300 ease-linear text-white px-4 py-2 mt-2 rounded"
      >
        Back to Home
      </button>
    </div>
  );
};

export default OrderSuccess;
