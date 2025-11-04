import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
import App from "./App.jsx";

import PropDrilling from "./components/PropDrilling/PropDrilling.jsx";
import StateLifting from "./components/StateLifting/StateLifting.jsx";
import ControlledComponent from "./components/ControlledComponent/ControlledComponent.jsx";
import ContextAPI from "./components/ContextAPI/ContextAPI.jsx";
import DebouncingThrottling from "./components/DebouncingThrottling/DebouncingThrottling.jsx";
import ErrorBoundaries from "./components/ErrorBoundaries/ErrorBoundaries.jsx";
import FormValidation from "./components/FormValidation/FormValidation.jsx";
import HOC from "./components/HOC/HOC.jsx";
import LazyLoading from "./components/LazyLoading/LazyLoading.jsx";
import DataStructure from "./components/DataStructure/DataStructure.jsx";
import DataFetch from "./components/DataFetch/DataFetch.jsx";

import ArrayOperation from "./components/DataStructure/ArrayOperation.jsx";
import ObjectOperation from "./components/DataStructure/ObjectOperation.jsx";

import Coding from "./components/Coding/Coding.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/prop-drilling" element={<PropDrilling />} />
      <Route path="/state-lifting" element={<StateLifting />} />
      <Route path="/controlled-component" element={<ControlledComponent />} />
      <Route path="/context-api" element={<ContextAPI />} />
      <Route path="/debounce" element={<DebouncingThrottling />} />
      <Route path="/error-boundaries" element={<ErrorBoundaries />} />
      <Route path="/form-validation" element={<FormValidation />} />
      <Route path="/hoc" element={<HOC />} />
      <Route path="/lazy-loading" element={<LazyLoading />} />
      <Route path="/data-fetch" element={<DataFetch />} />

      <Route path="/data-structure" element={<DataStructure />} />
      <Route path="/data-structure/array" element={<ArrayOperation />} />
      <Route path="/data-structure/object" element={<ObjectOperation />} />

      <Route path="/coding" element={<Coding />} />
    </Routes>
  </BrowserRouter>
);
