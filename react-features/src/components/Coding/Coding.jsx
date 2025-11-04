import React from "react";
import Editor from "@monaco-editor/react";
import Navigation from "../Navigation";

const Coding = () => {
  return (
    <div>
      <Navigation />
      <Editor
        height="70vh"
        width="70vw"
        defaultLanguage="javascript"
        theme="vs-dark"
        defaultValue="// practice coding"
      />
    </div>
  );
};

export default Coding;
