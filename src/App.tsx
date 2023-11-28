import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
