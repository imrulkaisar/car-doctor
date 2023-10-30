import PageHeader from "../Components/PageHeader";
import AboutSection from "../Components/Sections/AboutSection";
import CoreFeatures from "../Components/Sections/CoreFeatures";
import FeacturesSection from "../Components/Sections/FeacturesSection";
import TeamSection from "../Components/Sections/TeamSection";
import TestimonialSection from "../Components/Sections/TestimonialSection";

const About = () => {
  return (
    <>
      <PageHeader title="About" />
      <div className="space-y-24 py-20">
        <AboutSection />
        <FeacturesSection />
        <TeamSection />
        <CoreFeatures />
        <TestimonialSection />
        <div className=""></div>
      </div>
    </>
  );
};

export default About;
