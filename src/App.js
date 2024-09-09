// App.js
import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header"
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter, RouterProvider,Outlet } from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import RestaurantMenu from "./components/RestaurantMenu";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

// const heading = React.createElement("h1", {}, "Hello World!");
// const root = ReactDOM.createRoot(document.getElementById("root"));

// console.log(heading);
// root.render(heading);

// const title = <h1 className="head">Hello World!</h1>;
// const HeadingComponent = () => {
//   return (
//     <div id="Container">
//       {title}
//       <h1>Hello World from Component!</h1>
//     </div>
//   );
// };
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<HeadingComponent />);

const AppLayout = () => {
  return (
    <Provider store={appStore}>
    <div className="app">
      {/* header
                body
                footer
            */}
      <Header />
      <Outlet/>
      <Footer/>
    </div>  
    </Provider>
  );
};

//array of objects
const appRouter=createBrowserRouter([
  {
    path:'/',
    element:<AppLayout/>,
    children : [
      {
        path:'/',
        element:<Body/>,
      },
      {
        path:'/about',
        element:<About/>,
      },
      {
        path:'/contact',
        element:<Contact/>,
      },
      {
        path:'/cart',
        element:<Cart/>,
      },
      {
        path:"/restaurants/:resId",
        element:<RestaurantMenu/>,
      }
    ],
    errorElement: <Error/>,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
