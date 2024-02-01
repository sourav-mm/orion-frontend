import React from "react";
import { Link } from "react-router-dom";

const Menus = () => {
  return (
    <ul >
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About us</Link>
      </li>
      <li>
        <Link to="/service-details">Products</Link>
      </li>
      <li>
        <Link to="/contact">Contact Us</Link>
      </li>
     
    </ul>
  );
};

export default Menus;
