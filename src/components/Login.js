// src/components/Login.js
import React from "react";
import { useEffect } from "react";

const Login = () => {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <div>
      <h2>Login Page</h2>
      <p>This is the Login component.</p>
    </div>
  );
};

export default Login;
