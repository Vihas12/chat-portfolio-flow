
import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "py-3 glass-effect shadow-lg" : "py-5 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <NavLink to="/" className="flex items-center w-30">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="flex items-center text-gray-800 dark:text-portfolio-teal"
          >
            <img src="/favicon.ico" alt="Logo" className=" w-10 mr-2" />
            <span className="font-bold text-xl">Portfolio</span>
          </motion.div>
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
        {navItems.map((item, index) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `nav-link ${
                isActive ? "text-gray-500 dark:text-portfolio-teal" : ""
              } hover:text-gray-500`
            }
          >
            <motion.span
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 + 0.2 }}
            >
              {item.name}
            </motion.span>
          </NavLink>
        ))}

          <motion.a
            href="https://drive.google.com/file/d/1DDB2agGBzqOPuaPzQnM0Hvn5YhxZrRqZ/view?usp=drive_link"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary dark:btn-primary text-center text-black bg-white border-black hover:bg-black hover:text-white transition-colors duration-300"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: navItems.length * 0.1 + 0.2 }}
          >
            Resume
          </motion.a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden dark:text-portfolio-teal focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden glass-effect"
        >
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) => 
                  `nav-link text-lg ${isActive ? "text-gray-500 dark:text-portfolio-teal" : ""}hover:text-gray-500`
                }
              >
                {item.name}
              </NavLink>
            ))}
            <a href="https://drive.google.com/file/d/1DDB2agGBzqOPuaPzQnM0Hvn5YhxZrRqZ/view?usp=drive_link" className="btn-primary dark:btn-primary text-center text-black bg-white border-black hover:bg-black hover:text-white transition-colors duration-300 ">
              Resume
            </a>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Navbar;
