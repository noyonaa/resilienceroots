import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isSmallDevice, setIsSmallDevice] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallDevice(window.innerWidth <= 768);
    };

    const handleScroll = () => {
      const scrolled = window.scrollY > 100;
      if (scrolled !== isScrolled) {
        setIsScrolled(scrolled);
      }
    };

    // Initial check on mount
    handleResize();

    // Add event listeners for window resize and scroll
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listeners on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isScrolled]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navbarStyle = {
    backgroundColor: isScrolled ? "black" : "transparent",
    opacity: isScrolled ? 0.7 : 1,
    transition: "background-color 0.3s ease, opacity 0.3s ease",
  };

  return (
    <nav className="text-white fixed w-full z-50" style={navbarStyle}>
      <div className="container mx-auto">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center">
            <Link to="/">
              <img
                src="/images/logo.png"
                alt="Resilience roots"
                style={{ height: "3rem" }}
                className="mr-4"
              />
            </Link>
            <Link to="/" className="text-4xl font-bold font-montserrat">
              Resilience Roots
            </Link>
          </div>
          <button
            className="text-white hover:text-gray-300 focus:outline-none lg:hidden"
            type="button"
            onClick={toggleMenu}
          >
            <div className="hamburger">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
          {isSmallDevice && (
            <div
              style={{ display: isMenuOpen ? "block" : "none" }}
              className="lg:hidden absolute top-16 right-0 bg-black w-full"
            >
              <ul className="flex flex-col space-y-2 p-4">
                <li>
                  <Link
                    to="/about"
                    className="text-white hover:text-gray-300 block"
                    onClick={toggleMenu}
                  >
                    About us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    className="text-white hover:text-gray-300 block"
                    onClick={toggleMenu}
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contacts"
                    className="text-white hover:text-gray-300 block"
                    onClick={toggleMenu}
                  >
                    Contacts
                  </Link>
                </li>
                <li>
                  <Link
                    to="/login"
                    className="btn btn-success text-white bg-green-700 hover:bg-green-600 focus:ring focus:ring-green-300 transition duration-300 ease-in-out font-montserrat py-2 px-6 rounded-full"
                    onClick={toggleMenu}
                  >
                    Login
                  </Link>
                </li>
                <li>
                  <Link
                    to="/signup"
                    className="btn btn-success-light text-white bg-green-600 hover:bg-green-500 focus:ring focus:ring-green-300 transition duration-300 ease-in-out font-montserrat py-2 px-6 rounded-full mt-2"
                    onClick={toggleMenu}
                  >
                    Sign Up
                  </Link>
                </li>
              </ul>
            </div>
          )}
          <div className="hidden lg:flex lg:items-center lg:justify-end lg:flex-grow">
            <ul className="flex flex-col lg:flex-row lg:space-x-6">
              <li>
                <Link
                  to="/about"
                  className="text-primary text-sm lg:text-xl hover:text-gray-300"
                >
                  About us
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-primary text-sm lg:text-xl hover:text-gray-300"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/contacts"
                  className="text-primary text-sm lg:text-xl hover:text-gray-300"
                >
                  Contacts
                </Link>
              </li>
            </ul>
            <div className="ml-4">
              <Link
                to="/login"
                className="btn btn-success text-white bg-green-700 hover:bg-green-600 focus:ring focus:ring-green-300 transition duration-300 ease-in-out font-montserrat py-2 px-6 rounded-full"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="btn btn-success-light text-white bg-green-600 hover:bg-green-500 focus:ring focus:ring-green-300 transition duration-300 ease-in-out font-montserrat py-2 px-6 rounded-full ml-2"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
