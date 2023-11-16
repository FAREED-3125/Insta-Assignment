import React from "react";
import Navbar from "./Components/Navbar";
import Homepage from "./Components/Homepage";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Account from "./Components/Account";
import Home from "./Components/Home";
import { Provider } from "react-redux";
import { store } from "./Redux/store";
import CreatePost from "./Components/CreatePost";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
    children: [
      {
        path: "/account",
        element: <Account />,
      },
      {
        path: "/",
        index: true,
        element: <Home />,
      },
      {
        path: "/create",
        element: <CreatePost />,
      },
    ],
  },
]);

const App = () => {
  return (
    <Provider store={store}>
      {" "}
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  );
};

export default App;
