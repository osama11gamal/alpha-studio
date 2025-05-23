import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-grow flex items-center justify-center">
        <div className="text-center px-4">
          <h1 className="alpha-title mb-4">404</h1>
          <div className="bg-blue-glow absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] opacity-50"></div>
          <p className="text-xl text-gray-400 mb-8">The page you're looking for has vanished into another dimension.</p>
          <Link to="/" className="btn-primary inline-block">
            Return to Reality
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
