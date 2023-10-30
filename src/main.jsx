import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import Routers from "./Routers/Routers";
import UserContextProvider from "./Contexts/UserContext";
import DataContextProvider from "./Contexts/DataContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserContextProvider>
      <DataContextProvider>
        <RouterProvider router={Routers} />
      </DataContextProvider>
    </UserContextProvider>
  </React.StrictMode>
);
