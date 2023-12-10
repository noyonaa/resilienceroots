// src/components/Services.js
import React from "react";
import { useEffect } from "react";
const Signup = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <h2>Signup Page</h2>
      <p>This is the Signup component.</p>
    </div>
  );
};

export default Signup;
