// src/components/Services.js
import React from "react";
import { useEffect } from "react";
const Services = () => {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <div>
      <h2>Services Page</h2>
      <p>This is the Services component.</p>
    </div>
  );
};

export default Services;
