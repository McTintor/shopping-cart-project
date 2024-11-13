import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import App from "./App";
import ErrorPage from './components/ErrorPage'
import HomePage from "./components/HomePage";
import Details from './components/Details'
import Cart from './components/Cart'
import store from "./store";
import Checkout from "./components/Checkout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "cart", element: <Cart />},
      { path: "checkout", element: <Checkout />},
      { path: "details/:id", element: <Details />}
    ]
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
