import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "ee" }, "this is heading"),
    React.createElement("h2", { id: "ee" }, "this is heading2"),
  ])
);
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "hello world form React!"
);
const jsxHeading = (
  <h1 id="jsxH1">
    this is from jsx hwlloo import java.util jjjjjjj kkkkkk akkaj
  </h1>
);
const Heading = () => <h1>this is functaional component</h1>;
const Title = () => (
  <div>
    <h1>this is h1{console.log("what is this")}</h1>
    <Heading />
  </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Title />);
