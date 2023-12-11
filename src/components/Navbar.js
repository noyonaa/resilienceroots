import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  const [isSmallDevice, setIsSmallDevice] = useState(window.innerWidth <= 768);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallDevice(window.innerWidth <= 768);
    };
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    handleResize(); // Check screen size immediately on mount
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navbarStyle = {
    backgroundColor: isScrolled ? "black" : "transparent",
    opacity: isScrolled ? 0.7 : 1,
    transition: "background-color 0.3s ease, opacity 0.3s ease",
    zIndex: 100,
  };
  const hamburgerStyle = {
    cursor: "pointer",
    display: "block",
    width: "30px",
    height: "3px",
    margin: "5px auto",
    transition: "all 0.3s ease-in-out",
    backgroundColor: "#fff",
  };

  const mobileDropdownStyle = {
    display: isMenuOpen ? "block" : "none",
    position: "absolute",
    top: "100%",
    left: 0,
    right: 0,
    zIndex: 1000,
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
            <Link
              to="/"
              className="brand-name text-4xl font-bold font-montserrat"
            >
              Resilience Roots
            </Link>
          </div>
          <button
            className="text-white hover:text-gray-300 focus:outline-none lg:hidden"
            type="button"
            onClick={toggleMenu}
          >
            <div className="hamburger">
              <span style={hamburgerStyle}></span>
              <span style={hamburgerStyle}></span>
              <span style={hamburgerStyle}></span>
            </div>
          </button>
          <div
            style={mobileDropdownStyle}
            className="lg:hidden bg-black w-full"
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
            </ul>
          </div>
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
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
