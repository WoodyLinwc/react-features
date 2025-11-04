import React, { createContext, useContext } from "react";
import Navigation from "../Navigation";
import { ContextAPICode } from "../CodeBlocks";
import CodeBlock from "../CodeBlock";

// create a context
const UserContext = createContext();

// create a provider with multiple values
function Parent() {
  const userFirstName = "Woody";
  const userLastName = "Lin";

  const userData = { userFirstName, userLastName };

  return (
    <UserContext.Provider value={userData}>
      <Child />
    </UserContext.Provider>
  );
}

// no prop passed
function Child() {
  return <Grandchild />;
}

// consume context in a nested component
function Grandchild() {
  const { userFirstName, userLastName } = useContext(UserContext);

  return (
    <div>
      <p>
        Hello, {userFirstName} {userLastName}!
      </p>
    </div>
  );
}

const ContextAPI = () => {
  return (
    <div>
      <Navigation />
      <p>
        I use it to share <strong>global state</strong> across components
        without <strong>prop drilling</strong>. I usually combine it with
        useReducer for more complex state logic, which keeps state predictable
        and maintainable.
      </p>
      <a href="https://codesandbox.io/p/sandbox/6j8wnn">
        useReducer and useContext, built-in
      </a>
      <Parent />
      <CodeBlock code={ContextAPICode} />
    </div>
  );
};

export default ContextAPI;
