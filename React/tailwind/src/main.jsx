import React from "react";
import {
  BrowserRouter as Router,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";

import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Header from "./components/header.jsx";
import PasswordGenerator from "./components/customizedPassword.jsx";
import IndexCurr from "./components/IndexCurr.jsx";
import Contact from "./components/contact.jsx";
import Github from "./components/github.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/pass",
        element: <PasswordGenerator />,
      },
      {
        path: "/curr",
        element: <IndexCurr />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/git",
        element: <Github />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
