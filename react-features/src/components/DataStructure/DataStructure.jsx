import React from "react";
import Navigation from "../Navigation";
import { NavLink } from "react-router";

const DataStructure = () => {
  return (
    <div>
      <Navigation />
      <nav style={{ display: "flex", gap: "20px" }}>
        <NavLink to="/data-structure/array">Array Operation</NavLink>
        <NavLink to="/data-structure/object">Object Operation</NavLink>
      </nav>
    </div>
  );
};

export default DataStructure;
