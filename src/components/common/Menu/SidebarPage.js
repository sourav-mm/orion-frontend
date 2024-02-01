// SidebarPage.js
import React from "react";

const SidebarPage = () => {
  return (
    <div className="sidebar">
        
      <h2>Category </h2>
      {/* Add more navigation links as needed */}
      <a href="/fittings">Fittings </a>
      <br />
      <a href="/electro-mechanical">ElectroMechanical </a>
      <br />
      <a href="/safety">Safety </a>
      <br />
      <a href="/welding">Welding </a>
      <br />
      <a href="/flanges">Flanges </a>
      <br />
      <a href="/valves">Valves </a>
      <br />
      <a href="/fasteners">Fasteners </a>
      <br />
      <a href="/instrumentation">Instrumentation </a>
      <br />
      <a href="/lifting-tackles">LiftingTackles </a>
      <br />
      <a href="/fender">Fender </a>
      <br />
      <a href="/electrical">Electrical </a>
      <br />
      <a href="/other-general-items">OtherGeneralItems </a>
      <br />
    </div>
  );
};

export default SidebarPage;
