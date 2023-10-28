import React from "react";
import SectionHeading from "../Sectionheading";
import IconBox from "../IconBox";

import team from "./../../assets/icons/group.svg";
import clock from "./../../assets/icons/clock.svg";
import support from "./../../assets/icons/support.svg";
import equipment from "./../../assets/icons/Wrench.svg";
import check from "./../../assets/icons/check.svg";
import delivery from "./../../assets/icons/deliveryt.svg";

const CoreFeatures = () => {
  return (
    <section className="space-y-8">
      <SectionHeading
        subTitle="Core Features"
        title="Why Choose Us"
        className="items-center text-center max-w-xl mx-auto"
      >
        The majority have suffered alteration in some form, by injected humour,
        or randomised words which don't look even slightly believable.
      </SectionHeading>
      <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-5">
        <IconBox
          icon={team}
          title="Export Team"
          className="flex-col border p-4 rounded-lg hover:bg-primary hover:text-white"
        />
        <IconBox
          icon={clock}
          title="Timely Delivery"
          className="flex-col border p-4 rounded-lg bg-primary text-white"
        />
        <IconBox
          icon={support}
          title="24/7 Support"
          className="flex-col border p-4 rounded-lg hover:bg-primary hover:text-white"
        />
        <IconBox
          icon={equipment}
          title="Best Equipment"
          className="flex-col border p-4 rounded-lg hover:bg-primary hover:text-white"
        />
        <IconBox
          icon={check}
          title="100% Guranty"
          className="flex-col border p-4 rounded-lg hover:bg-primary hover:text-white"
        />
        <IconBox
          icon={delivery}
          title="Timely Delivery"
          className="flex-col border p-4 rounded-lg hover:bg-primary hover:text-white"
        />
      </div>
    </section>
  );
};

export default CoreFeatures;
