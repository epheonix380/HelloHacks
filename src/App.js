import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Navigate,
} from "react-router-dom";
import Home from './Pages/Home';
import Other from './Pages/Other';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>,
    },
    {
      path: "other",
      element: <Other></Other>,
    },
  ]);
  
  return(
    <RouterProvider router={router} />
  );
}

export default App;
