import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import Error from "./components/Error";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Menu from "./components/RestaurantMenu";
import useOnlineStatus from "./utils/useOnlineStatus";
import Shimmer from "./components/Shimmer";
//Dynamic import/ lazy loading/ on demand loading
const Grocery = lazy(() => import("./components/Grocery"));

const AppLayout = () => {
  const networkStatus = useOnlineStatus();

  if (!networkStatus) {
    return (
      <h2>Looks like you are offline. Please Check your internet connection</h2>
    );
  } else {
    return (
      <div className="app">
        <Header></Header>
        <Outlet />
        <Footer></Footer>
      </div>
    );
  }
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/menu/:resId",
        element: <Menu />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Grocery />
          </Suspense>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}></RouterProvider>);
