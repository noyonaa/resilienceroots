import React from "react";
import Navbar from "./Navbar";
import "../styles/Home.css";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
        <div className="overlay"></div>
        <div className="container mx-auto text-center relative z-10">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight">
              Welcome to Resilience Roots
            </h1>
            <p className="text-base sm:text-lg md:text-2xl mb-6">
              From Struggle to Strength, Every Step Counts
            </p>

            <div className="social-row text-base sm:text-lg md:text-2xl mt-8">
              {/* Add your social media icons here */}
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="content5 bg-white">
        <div className="container mx-auto py-8 sm:py-12 md:py-16 lg:py-20">
          <div className="max-w-3xl mx-auto text-center">
            <h4 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
              Personalized Therapy and Holistic well-being Practices
            </h4>
            <div className="text-justify mb-6 mx-4 sm:mx-6 md:mx-8">
              <p className="text-base sm:text-lg md:text-xl mb-4 md:mb-8">
                At Resilience Roots, we believe in cultivating resilience from
                the roots up. Our journey began with a group of passionate
                individuals who, as students, recognized a critical need to
                bring mental health and well-being to the forefront of our daily
                lives. In an era where the importance of mental health is
                gaining recognition, we embarked on a mission to make therapy
                and psychological interventions more accessible, relatable, and
                mainstream.
              </p>
              <p className="text-base sm:text-lg md:text-xl mb-4 md:mb-8">
                As we continue to grow, our commitment remains strong. We strive
                to create a supportive community where individuals can explore
                their personal growth and well-being. Our team of dedicated
                professionals is here to guide you on your journey towards a
                resilient and balanced life.
              </p>
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

export default Home;
