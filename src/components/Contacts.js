// src/components/Contacts.js
import React from "react";
import { useEffect } from "react";

const Contacts = () => {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <div>
      <h2>Contacts Page</h2>
      <p>This is the Contacts component.</p>
    </div>
  );
};

export default Contacts;
