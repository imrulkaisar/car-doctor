import React from "react";
import SectionHeading from "../Sectionheading";
import TestimonialSlider from "../TestimonialSlider/TestimonialSlider";

const TestimonialSection = () => {
  return (
    <section className="space-y-8">
      <SectionHeading
        subTitle="Testimonials"
        title="What Customer Says"
        className="items-center text-center max-w-xl mx-auto"
      >
        The majority have suffered alteration in some form, by injected humour,
        or randomised words which don't look even slightly believable.
      </SectionHeading>
      <TestimonialSlider />
    </section>
  );
};

export default TestimonialSection;
