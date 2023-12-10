import React from "react";
import Navbar from "./Navbar";
import "../styles/Home.css";
import { useEffect } from "react";

const About = () => {
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
          backgroundImage: "url('/images/aboutpic.jpg')", // Replace with the correct path
        }}
      >
        <div className="overlay"></div>
        <div className="container mx-auto text-center relative z-10">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight">
              About Us
            </h1>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="content5 bg-white">
        <div className="container mx-auto py-8 sm:py-12 md:py-16 lg:py-20">
          <div className="max-w-3xl mx-auto text-center">
            <h4 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
              Our Story
            </h4>
            <div className="text-justify mb-6 mx-4 sm:mx-6 md:mx-8">
              <p className="text-base sm:text-lg md:text-xl mb-4 md:mb-8">
                Resilience Roots was born out of a shared realization that
                mental well-being is the cornerstone of a fulfilling life. As
                students navigating the challenges of academia and personal
                growth, our founders experienced firsthand the transformative
                power of mental health support. However, they also observed the
                barriers that often hindered people from seeking the help they
                needed.
              </p>
              <p className="text-base sm:text-lg md:text-xl mb-4 md:mb-8">
                Determined to break down these barriers, Resilience Roots
                emerged as a mental health startup committed to fostering
                resilience right from the roots. We understand that everyone's
                journey is unique, and the path to mental well-being begins with
                acknowledging and addressing individual needs.
              </p>
            </div>
            <h4 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
              Our Mission
            </h4>
            <div className="text-justify mb-6 mx-4 sm:mx-6 md:mx-8">
              <p className="text-base sm:text-lg md:text-xl mb-4 md:mb-8">
                At Resilience Roots, our mission is to make mental health
                support accessible, destigmatize therapy, and empower
                individuals to proactively cultivate their mental resilience. We
                strive to create an inclusive space where people from all walks
                of life can find the support they need to thrive.
              </p>
            </div>
            <h4 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
              What Sets Us Apart
            </h4>
            <div className="text-justify mb-6 mx-4 sm:mx-6 md:mx-8">
              <p className="text-lg font-bold mb-2 sm:text-xl md:text-2xl">
                Holistic Approach
              </p>
              <p className="text-base sm:text-lg md:text-xl mb-4 md:mb-8">
                We believe in addressing mental health from a holistic
                perspective, considering the interconnectedness of mind, body,
                and spirit.
              </p>
              <p className="text-lg font-bold mb-2 sm:text-xl md:text-2xl">
                Inclusivity
              </p>
              <p className="text-base sm:text-lg md:text-xl mb-4 md:mb-8">
                Resilience Roots is dedicated to providing inclusive and diverse
                mental health resources that cater to the unique needs of each
                individual.
              </p>
              <p className="text-lg font-bold mb-2 sm:text-xl md:text-2xl">
                Technology-Driven Solutions
              </p>
              <p className="text-base sm:text-lg md:text-xl mb-4 md:mb-8">
                Leveraging the power of technology, we offer innovative and
                user-friendly platforms to connect individuals with qualified
                mental health professionals and resources.
              </p>
              <p className="text-lg font-bold mb-2 sm:text-xl md:text-2xl">
                Community Building
              </p>
              <p className="text-base sm:text-lg md:text-xl mb-4 md:mb-8">
                We understand the importance of a supportive community.
                Resilience Roots encourages open dialogue, shared experiences,
                and the building of connections that foster resilience.
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

export default About;
