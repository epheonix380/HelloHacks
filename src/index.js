import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Navigate,
} from "react-router-dom";
import App from "./App";
import "./index.css";
import Home from "./Pages/Home";
import Other from "./Pages/Other";



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App></App>
  </React.StrictMode>
);