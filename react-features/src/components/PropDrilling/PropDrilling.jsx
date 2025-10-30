import Navigation from "../Navigation";
// import { Link } from "react-router";

function Grandchild({ user }) {
  return (
    <div>
      <p>Hello, {user}!</p>
      <p>Using prop drilling from parent to grandchild</p>
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
    </div>
  );
};

export default PropDrilling;
