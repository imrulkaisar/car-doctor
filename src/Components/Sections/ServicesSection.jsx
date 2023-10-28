import React from "react";
import SectionHeading from "../Sectionheading";
import ServiceArchive from "../ServiceArchive";
import { Link } from "react-router-dom";

const ServicesSection = () => {
  return (
    <section className="space-y-8">
      <SectionHeading
        subTitle="Services"
        title="Our Service Area"
        className="items-center text-center max-w-xl mx-auto"
      >
        the majority have suffered alteration in some form, by injected humour,
        or randomised words which don't look even slightly believable.
      </SectionHeading>
      <ServiceArchive />
      <div className="text-center">
        <Link
          to="/services"
          className="btn btn-bordered inline-block hover:btn-primary"
        >
          More Services
        </Link>
      </div>
    </section>
  );
};

export default ServicesSection;
