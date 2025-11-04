import React, { useState, useRef } from "react";
import Navigation from "../Navigation";
import CodeBlock from "../CodeBlock";
import { ControlledComponentCode } from "../CodeBlocks";

function ControlledForm() {
  const [name, setName] = useState("");

  function handleChange(e) {
    setName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert(`Submited name: ${name}`);
    setName("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Controlled Form: </label>
      <input type="text" value={name} onChange={handleChange} />
      <button type="submit">Submit</button>
    </form>
  );
}

function UncontrolledForm() {
  const nameRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    alert(`Submitted name: ${nameRef.current.value}`);
    nameRef.current.value = "";
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Uncontrolled Form: </label>
      <input type="text" ref={nameRef} />
      <button type="submit">Submit</button>
    </form>
  );
}

const ControlledComponent = () => {
  return (
    <div>
      <Navigation />
      <ControlledForm />
      <p>
        <strong>React</strong> controls the <strong>form data</strong>, state is
        the single source of truth input comes from the state, you updates it
        through event handler
      </p>
      <br />
      <UncontrolledForm />
      <p>
        <strong>DOM</strong> itself controls the form data, You use ref, React
        doesn’t track it on every change.
      </p>
      <CodeBlock code={ControlledComponentCode} />
    </div>
  );
};

export default ControlledComponent;
