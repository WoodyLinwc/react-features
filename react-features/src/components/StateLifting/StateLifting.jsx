import { useState } from "react";
import Navigation from "../Navigation";

function InputA({ value, setText }) {
  return (
    <div>
      <h3>InputA</h3>
      <input
        type="text"
        value={value}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
}

function InputB({ value, setText }) {
  return (
    <div>
      <h3>InputB</h3>
      <input
        type="text"
        value={value}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
}

function Parent() {
  const [text, setText] = useState("");

  return (
    <div>
      <p>State Lifting</p>
      <a href="https://github.com/WoodyLinwc/react-features/blob/main/react-features/src/components/StateLifting/StateLifting.jsx">
        Example Code
      </a>
      <InputA value={text} setText={setText} />
      <InputB value={text} setText={setText} />
      <p>Shared text: {text}</p>
    </div>
  );
}

const StateLifting = () => {
  return (
    <div>
      <Navigation />
      <Parent />
    </div>
  );
};

export default StateLifting;
