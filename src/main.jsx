import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import Routers from "./Routers/Routers";
import UserContextProvider from "./Contexts/UserContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserContextProvider>
      <RouterProvider router={Routers} />
    </UserContextProvider>
  </React.StrictMode>
);
