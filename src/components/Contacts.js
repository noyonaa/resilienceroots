import React from "react";
import Navbar from "./Navbar";
import "../styles/Home.css";
import { useEffect } from "react";

const Contacts = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Resilience Roots - Contact Us";
  }, []);
  return (
    <div>
      <Navbar />

      {/* Header Section */}
      <section
        className="header13 bg-cover bg-center text-white relative h-40 sm:h-56 md:h-64 lg:h-80 flex items-center"
        style={{
          backgroundImage: "url('/images/contactpic.jpg')", // Replace with the correct path
        }}
      >
        <div className="overlay"></div>
        <div className="container mx-auto text-center relative z-10">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight">
              Contact Us
            </h1>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="content5 bg-white">
        <div className="container mx-auto py-8 sm:py-12 md:py-16 lg:py-20">
          <div className="max-w-3xl mx-auto text-center">
            <h4 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
              How to reach Us
            </h4>
            <div className="text-justify mb-6 mx-4 sm:mx-6 md:mx-8">
              <p className="text-base sm:text-lg md:text-xl mb-4 md:mb-8">
                Follow us on Instagram{" "}
                <a
                  href={"https://instagram.com/resilienceroots_"} // Replace with your actual URL
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base sm:text-lg md:text-xl mb-4 md:mb-8 underline hover:text-pink-500"
                >
                  here
                </a>
              </p>

              <p className="text-base sm:text-lg md:text-xl mb-4 md:mb-8">
                Email: resiliencerootss@gmail.com
              </p>
            </div>
            <h4 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
              Book an Appointment
            </h4>
            <div className="mt-6">
              <a
                href={
                  "https://docs.google.com/forms/d/e/1FAIpQLSdqc3dL0oJyfvjdnkNRlvnKC7qHpapc8jKEx8SxDqq0syzVEQ/viewform?pli=1"
                } // Replace with your actual URL
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-green-800 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                FILL THIS FORM TO BOOK
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-black text-white py-6 sm:py-8 md:py-10 lg:py-12">
        <div className="container mx-auto text-center">
          <p className="text-base sm:text-lg md:text-xl">
            &copy; 2023 Resilience Roots. All rights reserved.
          </p>
          <div className="mt-2 sm:mt-4">
            <a href="#" className="text-gray-400 hover:text-white mx-2">
              LinkedIn
            </a>
            <span className="text-gray-400">|</span>
            <a
              href="https://instagram.com/resilienceroots_"
              className="text-gray-400 hover:text-white mx-2"
            >
              Instagram
            </a>
          </div>
        </div>
      </footer>
      {/* Your other sections go here */}
    </div>
  );
};

export default Contacts;
