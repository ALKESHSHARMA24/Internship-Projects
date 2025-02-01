import React, { useContext, useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import Header from "./components/header";
import Body from "./components/body";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import path from "path-browserify";
import { Shimmar } from "./components/ShimmerUI";
import RestroMenu from "./components/restroMenu";
import BasicButtons from "./components/AddImage";
import { lazy, Suspense } from "react";
import { UserContext } from "./utils/UserContext.js";
// import LazyComponent from "./components/LazyComponent";
import { UserContext } from "./utils/UserContext.js";
import { useContext } from "react";

//Lazy Loading component which will only be used when it required
const LazyComponent = lazy(() => import("./components/LazyComponent.js"));

const AppLayout = () => {
  const { UserName } = useContext(UserContext);
  const [LoginUser, setLoginUser] = useState(UserName);
  // console.log(LoginUser);

  useEffect(function () {
    setLoginUser("alkesh");
  }, []);
  return (
    // BINDED THE CONTEXT API OBJECT VALUE TO THE USE STATE HOOKS SO THAT THE USERNAME VALUE  OF THE CONTEXT CAN BE CHANGE USING THE SETSTATE AND THEN APPLAYOUT WILL BE RE RENDERS
    <UserContext.Provider value={{ UserName: LoginUser, setLoginUser }}>
      <div className="app">
        <Header />
        <Outlet />
        {/* this will be <Outlet /> replaced by the child route of AppLayout based on the child routes will be used*/}
      </div>
    </UserContext.Provider>
  );
};

//define the rotuers and subchild routes
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/AboutUs",
        element: <AboutUs />,
      },
      {
        path: "/ContactUs",
        element: <ContactUs />,
      },
      {
        path: "/Home",
        element: <AppLayout />,
      },
      {
        path: "/LazyComponent",
        element: (
          <Suspense fallback={<h1>Waiting for LazyComponent</h1>}>
            <LazyComponent />
          </Suspense>
        ),
      },
      {
        path: "/Restaurant/:resId",
        element: <RestroMenu />,
      },
    ],
    errorElement: <Error />, //if any kind of error occures then error component will be displayed
  },
]);

const root = createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
//AFTER DEFINING THE ROUTES WE HAVE TO PROVIDE THOSE ROUTES TO THE ROUTEPROVIDER
