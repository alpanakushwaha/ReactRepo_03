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

// React Component

const HeaderComponent = () => {
  return (
    <div>
      {heading4}

      <h1>Namaste React Functional Component</h1>
    </div>
  );
};
const HeaderComponent2 = function () {
  <div>
    {heading4}
    <h1>Namaste React Functional Component</h1>
  </div>;
};

root.render(<HeaderComponent />);
