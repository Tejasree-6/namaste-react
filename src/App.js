import React, { lazy, Suspense} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider,Outlet} from "react-router-dom";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import PageNotFound from "./components/PageNotFound";
import Error from "./components/Error";
import RecipePage from "./components/RecipePage";
import Cart from "./components/Cart";
import Login from "./components/Login";

// import Grocery from "./components/Grocery";

const Grocery=lazy(()=> import("./components/Grocery"));
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet/>
    </div>
  );
};
const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    children:[
      {
      path:"/",
      element:<Body/>
    },
      {
        path:"/about",
        element:<About/>
      },
      {
        path:"/contact",
        element:<ContactUs/>
      },
      {
        path:"/grocery",
        element:<Suspense fallback={<h1>Loading....</h1>}><Grocery/></Suspense>
      },
      {
        path:"/pagenotfound",
        element:<PageNotFound/>
      },
      {
        path:"/recipe/:rId",
        element:<RecipePage/>
      },
      {
        path:"/cart",
        element:<Cart/>
      },
      {
        path:"/login",
        element:<Login/>
      }
    ],
    errorElement:<Error/>
  },
  
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);
