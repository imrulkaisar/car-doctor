import { useContext } from "react";
import ServiceCard from "./ServiceCard";
import { DataContext } from "../Contexts/DataContext";

const ServiceArchive = () => {
  const { services } = useContext(DataContext);

  console.log(services);
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
      {services ? (
        services.map((service) => (
          <ServiceCard key={service._id} data={service} />
        ))
      ) : (
        <p>Loading ....</p>
      )}
    </div>
  );
};

export default ServiceArchive;
