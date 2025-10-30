import { NavLink } from "react-router";
import "./Navigation.css";

const Navigation = () => {
  return (
    <nav className="navigation">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/prop-drilling">Prop Drilling</NavLink>
      <NavLink to="/state-lifting">State Lifting</NavLink>
      <NavLink to="/controlled-component">Controlled Component</NavLink>
    </nav>
  );
};

export default Navigation;
