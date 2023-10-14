import React, { lazy, Suspense, useState } from "react";
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
import Instamart from "./components/Instamart";
//Dynamic import/ lazy loading/ on demand loading
const Grocery = lazy(() => import("./components/Grocery"));
import UserContext from "./utils/UserContext";

const AppLayout = () => {
  const [newUser, setNewUser] = useState({
    user: {
      name: "mike",
      email: "helloworld@gamil.com",
    },
  });

  const networkStatus = useOnlineStatus();
  if (!networkStatus) {
    return (
      <h2>Looks like you are offline. Please Check your internet connection</h2>
    );
  } else {
    return (
      <UserContext.Provider value={{
        user : newUser.user,
        setNewUser
      }}>
        <div className="app">
          <UserContext.Provider value={{
        user: {
          name : "mangal pandey"
        }
      }}>
            <Header></Header>
          </UserContext.Provider>

          <Outlet />
          <Footer></Footer>
        </div>
      </UserContext.Provider>
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
        path: "/accordion",
        element: <Instamart />,
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
