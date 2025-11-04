export const PropDrillingCode = `function Grandchild({ user }) {
  return (
    <div>
      <p>Hello, {user}!</p>
    </div>
  );
}

function Child({ user }) {
  return <Grandchild user={user} />;
}

function Parent() {
  const user = "Woody Lin";

  return <Child user={user} />;
}`;

export const StateLiftingCode = `function InputA({ value, setText }) {
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
      <InputA value={text} setText={setText} />
      <InputB value={text} setText={setText} />
      <p>Shared text: {text}</p>
    </div>
  );
}`;

export const ControlledComponentCode = `function ControlledForm() {
  const [name, setName] = useState("");

  function handleChange(e) {
    setName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert(\`Submitted name: $name}\`);
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
    alert(\`Submitted name: $nameRef.current.value}\`);
    nameRef.current.value = "";
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Uncontrolled Form: </label>
      <input type="text" ref={nameRef} />
      <button type="submit">Submit</button>
    </form>
  );
}`;
