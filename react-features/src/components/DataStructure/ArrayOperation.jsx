import React, { useEffect, useState } from "react";
import CodeBlock from "../CodeBlock";
import Navigation from "../Navigation";
import { DiscussionEmbed } from "disqus-react";
import {
  arrayOfObjects,
  arrayOfObjectsCode,
  arrayOfStrings,
  arrayOfStringsCode,
} from "./data";
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
//   {
//     id: 4,
//     name: "Johny Chris",
//     age: 28,
//     city: "Chicago",
//   },
// ];

//

const ArrayOperation = () => {
  const [people, setPeople] = useState(arrayOfObjects);
  // const [languages, setLanguages] = useState(arrayOfStrings);

  return (
    <div>
      <Navigation />
      <h2>Array of Objects</h2>
      <CodeBlock code={arrayOfObjectsCode}></CodeBlock>
      <h2>Array of Strings Operations</h2>
      <CodeBlock code={arrayOfStringsCode}></CodeBlock>

      <DiscussionEmbed
        shortname="react-features"
        config={{
          url: window.location.href,
          identifier: "array-operations",
          title: "Array Operations",
          language: "zh_TW",
        }}
      />
    </div>
  );
};

export default ArrayOperation;
