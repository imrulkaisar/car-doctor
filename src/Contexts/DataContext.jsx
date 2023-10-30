import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const DataContext = createContext();

const DataContextProvider = ({ children }) => {
  const [services, setServices] = useState([]);
  const apiURI = "http://localhost:5349";

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

    // function calls
    loadServices();
  }, []);

  const data = { apiURI, services };
  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};

export default DataContextProvider;
