// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Notice the change here
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Contacts from "./components/Contacts";
import Login from "./components/Login";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
