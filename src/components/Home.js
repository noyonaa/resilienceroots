// src/components/Home.js
import React from "react";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />

      {/* Header Section */}
      <section
        className="header13 bg-cover bg-center text-white relative h-screen flex items-center"
        style={{
          backgroundImage: "url('/images/homepic.png')", // Replace with the correct path
        }}
      >
        <div
          className="overlay"
          style={{ opacity: 0.3, backgroundColor: "rgb(187, 187, 187)" }}
        ></div>
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-7xl font-bold mb-4 leading-tight">
              Cultivating Resilience from the Roots Up!
            </h1>
            <p className="text-2xl mb-6">
              Personalized Therapy and Holistic well-being Practices
            </p>

            <div className="social-row text-2xl mt-8">
              {/* Add your social media icons here */}
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="content5 bg-white">
        <div className="container mx-auto py-16">
          <div className="max-w-3xl mx-auto text-center">
            <h4 className="text-3xl font-bold mb-4">
              Enter your subtitle here
            </h4>
            <p className="text-lg">
              You can use content blocks to arrange your articles, large texts,
              instructions. Combine these blocks with media blocks to add
              illustrations and video tutorials. You can use various content
              blocks to work with your text. Add quotations, lists, buttons.
              Select your text to change its formatting or add links. Mobirise
              is a simple website builder that helps you create amazing web
              pages without knowing any code.
            </p>
          </div>
        </div>
      </section>
      {/* Footer Section */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto text-center">
          <p className="text-lg">
            &copy; 2023 Your Website Name. All rights reserved.
          </p>
          <div className="mt-4">
            <a href="#" className="text-gray-400 hover:text-white mx-2">
              Terms of Service
            </a>
            <span className="text-gray-400">|</span>
            <a href="#" className="text-gray-400 hover:text-white mx-2">
              Privacy Policy
            </a>
          </div>
        </div>
      </footer>

      {/* Your other sections go here */}
    </div>
  );
};

export default Home;
