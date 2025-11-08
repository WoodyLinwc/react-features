import React from "react";
import Navigation from "../Navigation";
import { NavLink } from "react-router";
import DisqusComments from "../DisqusComments";

const DataStructure = () => {
  return (
    <div>
      <Navigation />
      <nav style={{ display: "flex", gap: "20px" }}>
        <NavLink to="/data-structure/array">Array Operation</NavLink>
        <NavLink to="/data-structure/object">Object Operation</NavLink>
      </nav>
      <DisqusComments identifier="array-operations" title="Array Operations" />
    </div>
  );
};

export default DataStructure;
