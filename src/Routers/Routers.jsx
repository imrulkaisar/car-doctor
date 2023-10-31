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
import ServiceDetails from "../Layouts/ServiceDetails";
import Checkout from "../Pages/Checkout";
import AddService from "../Pages/AddService";
import NotFound from "../Pages/NotFound";
import PrivateRouter from "./PrivateRouter";
import { Profiler } from "react";
import Profile from "../Pages/Profile";

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
        path: "/service/",
        element: <ServiceDetails />,
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
        element: (
          <PrivateRouter>
            <Cart />
          </PrivateRouter>
        ),
      },
      {
        path: "/checkout",
        element: (
          <PrivateRouter>
            <Checkout />
          </PrivateRouter>
        ),
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
        path: "/add-service",
        element: <AddService />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/profile",
        element: (
          <PrivateRouter>
            <Profile />
          </PrivateRouter>
        ),
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default Routers;
