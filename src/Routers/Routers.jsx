import { createBrowserRouter } from "react-router-dom";
import PageTemplate from "../Layouts/PageTemplate";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Services from "../Pages/Services";
import Blog from "../Pages/Blog";
import Contact from "../Pages/Contact";
import Appointments from "../Pages/Appointments";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import Appointment from "../Pages/Appointment";
import Cart from "../Pages/Cart";

const Routers = createBrowserRouter([
  {
    path: "/",
    element: <PageTemplate />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/appointment",
        element: <Appointment />,
      },
      {
        path: "/appointments",
        element: <Appointments />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

export default Routers;
