import React from "react";
import ReactDOM from "react-dom/client";

let root = ReactDOM.createRoot(document.getElementById("root"));


const h1 =React.createElement("h1",{key:"heading1"},"heading 1 using React.createElement.")
const h2 =React.createElement("h2",{key:"heading2"},"heading 2 using React.createment.")
const h3 =React.createElement("h3",{key:"heading3"},"heading 3 using React.createElement.")
const div =React.createElement("div",{className:"title", key:"divider"},[h1,h2,h3])


console.log(div);

root.render(div)


// Array.map()  // polyfill // mordern Js is converted to older JS

// function myFun()// older code==> babel

// babel => package/ library / actually compiler // transpiler