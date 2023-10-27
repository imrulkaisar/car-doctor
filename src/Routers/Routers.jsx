import { createBrowserRouter } from "react-router-dom";
import PageTemplate from "../Layouts/PageTemplate";
import Home from "../Pages/Home";

const Routers = createBrowserRouter([
  {
    path: "/",
    element: <PageTemplate />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

export default Routers;
