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
import ThemeContext from "./utils/ThemeContext";
import CartContext from "./utils/CartContext";
import { Provider } from "react-redux";
import appStore from "./utils/store";
import Cart from "./components/Cart";

const AppLayout = () => {
  const [newTheme, setNewTheme] = useState("Dark");
  const [cartValue, setCartValue] = useState(0);

  // Code for whether user has a network connection or not
  const networkStatus = useOnlineStatus();
  if (!networkStatus) {
    return (
      <h2>Looks like you are offline. Please Check your internet connection</h2>
    );
  } else {
    return (
      <Provider store={appStore}>
        <ThemeContext.Provider value={[newTheme, setNewTheme]}>
          <CartContext.Provider value={[cartValue, setCartValue]}>
            <Header></Header>

            <Outlet />

            {/* <Footer></Footer> */}
          </CartContext.Provider>
        </ThemeContext.Provider>
      </Provider>
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
      {
        path: "/cart",
        element: <Cart />
      }
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}></RouterProvider>);
