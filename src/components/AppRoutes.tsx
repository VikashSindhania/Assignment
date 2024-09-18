import { createBrowserRouter } from "react-router-dom";
import Invoice from "./invoice";
import InvoiceDetails from "./invoiceDetails";

export const appStore = createBrowserRouter([
  { path: "/", element: <Invoice /> },
  { path: "/invoiceDetail", element: <InvoiceDetails /> },
]);
