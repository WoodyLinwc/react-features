import React, { useEffect, useState } from "react";
import CodeBlock from "../CodeBlock";
import Navigation from "../Navigation";
import { arrayOfObjects, arrayOfObjectsCode } from "./data";
// export const arrayOfObjects = [
//   {
//     id: 1,
//     name: "Alice Johnson",
//     age: 28,
//     city: "New York",
//   },
//   {
//     id: 2,
//     name: "Bob Smith",
//     age: 34,
//     city: "Los Angeles",
//   },
//   {
//     id: 3,
//     name: "Carol White",
//     age: 22,
//     city: "Chicago",
//   },
// ];

// Update Bob Smith's age to 35

const ArrayOperation = () => {
  const [people, setPeople] = useState(arrayOfObjects);

  useEffect(() => {
    // setter function with prev and callback
    setPeople((prev) =>
      prev.map((obj) => {
        // ternary operator, map() requires return for every elements
        return obj.name === "Bob Smith" ? { ...obj, age: 35 } : obj;
      })
    );
  }, []);

  console.log(people);

  return (
    <div>
      <Navigation />
      <h2>Array of Objects</h2>
      <CodeBlock code={arrayOfObjectsCode}></CodeBlock>
    </div>
  );
};

export default ArrayOperation;
