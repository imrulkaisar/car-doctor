import PageHeader from "../Components/PageHeader";
import ServiceArchive from "../Components/ServiceArchive";

const Services = () => {
  return (
    <>
      <PageHeader title="Services" />
      <div className="space-y-24 py-20">
        <ServiceArchive />
      </div>
    </>
  );
};

export default Services;
