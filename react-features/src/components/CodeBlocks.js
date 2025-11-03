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
