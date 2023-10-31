import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { UserContext } from "./UserContext";

export const DataContext = createContext();

const DataContextProvider = ({ children }) => {
  const { user, loading } = useContext(UserContext);
  const [services, setServices] = useState([]);
  const [bookings, setBookings] = useState([]);
  const apiURI = "http://localhost:3033";

  // loading services
  const loadServices = async () => {
    try {
      const response = await axios.get(`${apiURI}/services`);
      setServices(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  // load bookings
  const loadBookings = async () => {
    try {
      const response = await axios.get(
        `${apiURI}/bookings/?email=${user?.email}`
      );
      if (response.status === 200) {
        setBookings(response.data);
      } else {
        console.error("Request failed with status:", response.status);
        // handle error or set appropriate state
      }
    } catch (error) {
      console.error("An error occurred:", error);
      // handle error or set appropriate state
    }
  };

  useEffect(() => {
    loadServices();
  }, []);

  useEffect(() => {
    loadBookings();
  }, [user]);

  const data = { apiURI, services, bookings, setBookings };
  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};

export default DataContextProvider;
