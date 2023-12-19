import React from "react";
import ReactDOM from "react-dom/client";

let root = ReactDOM.createRoot(document.getElementById("root"));

const heading4 = (
  <h1 id="title" key="h4">
    This is Namaste React
  </h1>
);
const div = React.createElement("div", { className: "title", key: "divider" }, [
  heading4,
]);

console.log(div);

root.render(div);
