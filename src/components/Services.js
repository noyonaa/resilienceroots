// src/components/Services.js
import React from "react";
import { useEffect } from "react";
import "../styles/Home.css";
import Navbar from "./Navbar";

const ContentSection = ({ title, text, image, imagePosition ="left"}) => {
  const isImageOnLeft = imagePosition === "left";

  return (
    <section
      className={`content5 bg-white ${
        isImageOnLeft ? "flex" : "flex flex-row-reverse"
      }`}
      data-aos={isImageOnLeft ? "fade-left" : "fade-right"}
      data-aos-duration="2000"
    >
      <div className="container mx-auto py-8 sm:py-12 md:py-16 lg:py-20 flex flex-col md:flex-row items-center">
        <div
          className={`text-section max-w-3xl mx-auto ${
            isImageOnLeft ? "md:mr-8" : "md:ml-8"
          }`}
        >
          <h4 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            {title}
          </h4>
          <div className="text-justify">
            <p className="text-base sm:text-lg md:text-xl mb-4 md:mb-8">
              {text}
            </p>
          </div>
        </div>
        <div className="image-section max-w-lg mx-auto">
          <img src={image} alt="Content" className="w-full h-auto" />
        </div>
      </div>
    </section>
  );
};

const ContentSectionRight = ({
  title,
  text,
  image,
  imagePosition = "right",
}) => {
  const isImageOnLeft = imagePosition === "left";
  return (
    <section
      className={`content5 bg-white ${
        isImageOnLeft ? "flex" : "flex flex-row-reverse"
      }`}
      data-aos={isImageOnLeft ? "fade-left" : "fade-right"}
      data-aos-duration="2000"
    >
      <div className="container mx-auto py-8 sm:py-12 md:py-16 lg:py-20 flex flex-col md:flex-row items-center">
        <div
          className={`max-w-3xl mx-auto ${
            isImageOnLeft ? "md:mr-8" : "md:ml-8"
          }`}
        >
          <h4 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            {title}
          </h4>
          <div className="text-justify">
            <p className="text-base sm:text-lg md:text-xl mb-4 md:mb-8">
              {text}
            </p>
          </div>
        </div>
        <div className="max-w-lg mx-auto md:order-first">
          <img src={image} alt="Content" className="w-full h-auto" />
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Navbar />

      {/* Header Section */}
      <section
        className="header13 bg-cover bg-center text-white relative h-40 sm:h-56 md:h-64 lg:h-80 flex items-center"
        style={{
          backgroundImage: "url('/images/servicepic.jpg')", // Replace with the correct path
        }}
      >
        <div className="overlay"></div>
        <div className="container mx-auto text-center relative z-10">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight">
              Our Services
            </h1>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <ContentSection
        title="Individual Therapy Sessions"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        image="/images/individual.png"
        imagePosition="left"
      />

      <ContentSectionRight
        title="Group Therapy Sessions"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        image="/images/group.png"
      />

      <ContentSection
        title="Workshops for Corporates, NGOs and Schools"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        image="/images/workshops.png"
        imagePosition="left"
      />

      <ContentSectionRight
        title="Parenting Packages"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        image="/images/parenting.png"
      />
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

export default Services;
