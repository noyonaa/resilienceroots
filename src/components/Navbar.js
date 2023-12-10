// src/components/Navbar.js
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-black bg-opacity-20 text-white">
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
            <Link to="/" className="text-2xl font-bold font-montserrat">
              Resilience Roots
            </Link>
          </div>
          <button
            className="text-white hover:text-gray-300 focus:outline-none lg:hidden"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <div className="hamburger">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
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
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
