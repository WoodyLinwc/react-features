import React from "react";
import Navigation from "../Navigation";
// import { debounce, throttle } from "lodash";

// most basic debounce
function basicDebounce(fn, delay) {
  let timer;

  // (...args) vs ()
  return function (...args) {
    clearTimeout(timer);
    // () => fn.apply(this, args) vs fn
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}

function SearchBar() {
  const handleSeach = basicDebounce(
    (term) => console.log("Searching for: ", term),
    2000
  );

  return <input type="text" onChange={(e) => handleSeach(e.target.value)} />;
}

const DebouncingThrottling = () => {
  return (
    <div>
      <Navigation />
      <p>
        <strong>Debouncing</strong>: delay execution until user stops action
        (search input)
      </p>
      <p>
        <strong>Throttling</strong>: limit execution rate (scroll, resize
        events)
      </p>
      <p>Prevents excessive function calls, overwhelm APIs, make UI laggy</p>
      <SearchBar />
    </div>
  );
};

export default DebouncingThrottling;
