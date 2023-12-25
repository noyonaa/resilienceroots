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
        text="Our individual counseling and therapy services provide a personalized and confidential space for self-exploration and healing. Our experienced therapists offer compassionate support to help individuals navigate life's challenges, fostering a deeper understanding of themselves and their unique journey. Whether facing personal struggles, relationship issues, or seeking personal growth, our therapeutic approach is tailored to each individual's needs. Through evidence-based techniques and empathetic guidance, we empower our clients to build resilience, enhance self-awareness, and cultivate positive change in their lives. Take the first step towards personal well-being and self-discovery with our dedicated team of professionals committed to guiding you on your path to mental and emotional wellness."
        image="/images/individual.png"
        imagePosition="left"
      />

      <ContentSectionRight
        title="Group Therapy Sessions"
        text="Our group counseling sessions provide a supportive community where individuals can connect with others facing similar experiences and share their journey towards healing. Led by skilled facilitators, these sessions create a safe and inclusive environment for open dialogue and mutual understanding. Group counseling offers a unique opportunity to gain diverse perspectives, build a sense of belonging, and develop interpersonal skills. Participants often discover that sharing their challenges and triumphs within a group setting fosters a powerful sense of solidarity. With a focus on collaboration and shared growth, our group counseling services are designed to promote collective healing, personal insight, and the building of a supportive network that extends beyond the sessions. Join our community and embark on a shared path towards well-being and resilience."
        image="/images/group.png"
      />

      <ContentSection
        title="Workshops for Corporates, NGOs and Schools"
        text="Our workshops and training programs cater to a diverse range of organizations, including NGOs, corporates, schools, and various community groups. Tailored to meet the unique needs of each audience, our programs aim to enhance skills, foster collaboration, and promote positive change. Whether it's team-building exercises for corporate environments, skill development for NGOs, or educational initiatives for schools, our experienced facilitators deliver engaging and informative sessions. We offer a dynamic blend of interactive activities, expert insights, and practical strategies, equipping participants with valuable tools to navigate challenges and drive success. Empower your team or community with our customizable workshops designed to inspire growth, foster resilience, and cultivate a culture of continuous improvement. Elevate your organization's potential through our impactful and results-driven training initiatives."
        image="/images/workshops.png"
        imagePosition="left"
      />

      <ContentSectionRight
        title="Parenting Packages"
        text="Discover comprehensive support for your family's unique needs with our specialized parenting packages. Our parenting and therapy packages offer a holistic approach, combining therapy sessions for your child with empowering guidance for you as a parent. Navigate the intricacies of parenting with confidence as our expert therapists provide tailored strategies to address learning disabilities. Through collaborative sessions with your child and targeted support for you, our learning disability packages aim to create an environment conducive to growth and success. Additionally, we understand the complexities of adolescence, and our dedicated packages for adolescent issues provide a safe space for teens to express themselves while equipping parents with the tools to foster understanding and connection. Invest in your family's well-being with our thoughtfully crafted packages, designed to nurture harmonious relationships and support your child's developmental journey."
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
