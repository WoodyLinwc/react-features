import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
import App from "./App.jsx";

import PropDrilling from "./components/PropDrilling/PropDrilling.jsx";
import StateLifting from "./components/StateLifting/StateLifting.jsx";
import ControlledComponent from "./components/ControlledComponent/ControlledComponent.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/prop-drilling" element={<PropDrilling />} />
      <Route path="/state-lifting" element={<StateLifting />} />
      <Route path="/controlled-component" element={<ControlledComponent />} />
    </Routes>
  </BrowserRouter>
);
