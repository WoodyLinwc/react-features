import { NavLink } from "react-router";
import "./Navigation.css";

const Navigation = () => {
  return (
    <nav className="navigation">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/prop-drilling">Prop Drilling</NavLink>
      <NavLink to="/state-lifting">State Lifting</NavLink>
      <NavLink to="/controlled-component">Controlled Component</NavLink>
      <NavLink to="/context-api">Context API</NavLink>
      <NavLink to="/error-boundaries">Error Boundaries</NavLink>
      <NavLink to="/form-validation">Form Validation</NavLink>
      <NavLink to="/hoc">HOC</NavLink>
      <NavLink to="/lazy-loading">Lazy Loading</NavLink>
      <NavLink to="/debounce">Debounce</NavLink>
      <NavLink to="/data-fetch">Data Fetch</NavLink>
      <NavLink to="/data-structure">Data Structure</NavLink>
      <NavLink to="/coding">Coding</NavLink>
    </nav>
  );
};

export default Navigation;
