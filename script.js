import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/Header";
import Body from "./src/Body";
import Footer from "./src/Footer";


let root = ReactDOM.createRoot(document.getElementById("root"));



const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

root.render(<AppLayout />);
