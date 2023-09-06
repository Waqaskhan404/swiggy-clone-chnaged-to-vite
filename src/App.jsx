import React, { Children, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { Footer } from "./components/Footer";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
// import About from "./components/About"
import { lazy } from "react";
import Contact from "./components/Contact"
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import Instamart from "./components/Instamart";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import store from "./utils/store";
import Cart from "./components/Cart";
// const heading1=React.createElement("h1",{},"This is Heading1 created with React");
// const heading2=React.createElement("h2",{},"This is Heading2 created with React");
// const container=React.createElement("div",{
//     id:"container"
// },[heading1,heading2])




const About=lazy(()=> import("./components/About"))


export const AppLayout = () => {
  const customUserData = {
    name: "Waqas Khan",
    email: "waqaskhan@gmail.com"
  };

  return (
    <Provider store={store}>
    <UserContext.Provider value={{user:customUserData
}}>
      <Header />
      <Outlet/>
      <Footer />
      </UserContext.Provider>
    </Provider>
  );
};

export const appRoute=createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    errorElement:<Error/>,
    children:[
      {
        path:"/",
        element:<Body/>
      },
      // {
      //   path:"/about",
      //   element:<About/>
      // },
      {
        path:"/about",
        element:<Suspense><About/></Suspense>
      },
      {
        path:"/contact",
        element:<Contact/>
      },
      {
        path:"/restaurantmenu/:id",
        element:<RestaurantMenu/>,
      },
      {
        path:"/instamart",
        element:<Instamart/>,
      },
      {
        path:"/cart",
        element:<Cart/>,
      }

    ]
  },

  
])



