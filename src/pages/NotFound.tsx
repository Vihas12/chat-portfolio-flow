
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();
  const [count, setCount] = useState(5);

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
    
    const timer = setInterval(() => {
      setCount((prevCount) => prevCount - 1);
    }, 1000);

    const redirectTimer = setTimeout(() => {
      window.location.href = "/";
    }, 5000);

    return () => {
      clearInterval(timer);
      clearTimeout(redirectTimer);
    };
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-8xl font-bold dark:text-portfolio-teal mb-6">404</h1>
          <h2 className="text-3xl font-semibold mb-4">Page Not Found</h2>
          <p className="text-portfolio-light mb-8">
            Oops! The page you're looking for doesn't exist or has been moved.
          </p>

          <div className="text-portfolio-light mb-6">
            Redirecting to home page in {count} seconds...
          </div>

          <Link
            to="/"
            className="btn-primary dark:btn-primary inline-flex items-center justify-center text-black bg-white border-black hover:bg-black hover:text-white transition-colors duration-300 "
          >
            <Home size={18} className="mr-2" />
            Back to Home
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
