import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/Header";
import Body from "./src/Body";
import Footer from "./src/Footer";
import About from "./src/About";
import Contact from "./src/Contact";
import Error from "./src/Error";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import RestaurantMenu from "./src/RestaurantMenu";

const AppLayout = () => {
  return (
    <>
      <Header />
      {/** {Outlet} */}
      <Outlet />
      <Body />
      <Footer />
    </>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/about",
        element: <About />,
        errorElement: <Error />,
      },
      {
        path: "/contact",
        element: <Contact />,
        errorElement: <Error />,
      },
      {
        path: "/restaurant/:restaurantId",
        element: <RestaurantMenu />,
        errorElement: <Error />,
      },
      {
        
      },
    ],
  },
]);

let root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<AppLayout />);
root.render(<RouterProvider router={appRouter} />);
