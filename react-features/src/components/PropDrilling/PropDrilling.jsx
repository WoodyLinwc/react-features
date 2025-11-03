import Navigation from "../Navigation";
import { PropDrillingCode } from "../CodeBlocks";
import CodeBlock from "../CodeBlock";

function Grandchild({ user }) {
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
}

const PropDrilling = () => {
  return (
    <div>
      <Navigation />
      <Parent />
      <p>
        <strong>Prop drilling</strong>: the process of passing down props
        through multiple layers of components, even when some of those
        components do not directly use the props.
      </p>
      <CodeBlock code={PropDrillingCode} language="javascript" />
    </div>
  );
};

export default PropDrilling;
