import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Invoice from "./components/invoice";
import InvoiceDetails from "./components/invoiceDetails";
import ShowDocument from "./components/ShowDocument";
import { appStore } from "./components/AppRoutes";
import { RouterProvider } from "react-router-dom";

function App() {
  return (
    <div>
      <RouterProvider router={appStore}></RouterProvider>
    </div>
  );
}

export default App;
