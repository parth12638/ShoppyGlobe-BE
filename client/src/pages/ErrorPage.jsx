
import { Link } from "react-router-dom";

// Basic error page for unknown routes
const ErrorPage = () => {
  return (
    <div
      className="sm:min-h-[75vh] min-h-screen flex flex-col items-center justify-center px-8"
      style={{
        backgroundImage:
          "url('https://img.freepik.com/free-vector/white-abstract-wallpaper_23-2148830026.jpg')",
        backgroundSize: "cover", // Ensures the image covers the page
        backgroundPosition: "center", // Centers the image on the page
        backgroundAttachment: "fixed", // Keeps the background fixed during scroll
      }}
    >
      <h1 className="text-4xl font-bold mb-4 text-black">404 - Page Not Found</h1>
      <p className="text-lg mb-6 text-black">
        Oops! The page you're looking for doesn't exist.
      </p>
      <Link
        to="/home2"
        className="bg-[#eacda3] hover:bg-[#d6ae7b] transition-all duration-300 ease-linear text-white px-4 py-2 mt-2 rounded flex items-center gap-1"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default ErrorPage;
