import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const DataContext = createContext();

const DataContextProvider = ({ children }) => {
  const [services, setServices] = useState([]);
  const [bookings, setBookings] = useState([]);
  const apiURI = "http://localhost:3033";

  useEffect(() => {
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
        const response = await axios.get(`${apiURI}/bookings`);
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

    // function calls
    loadServices();
    loadBookings();
  }, []);

  const data = { apiURI, services, bookings, setBookings };
  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};

export default DataContextProvider;
