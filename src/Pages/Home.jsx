import HomeSlider from "../Components/HomeSlider/HomeSlider";
import AboutSection from "../Components/Sections/AboutSection";
import CoreFeatures from "../Components/Sections/CoreFeatures";
import FeacturesSection from "../Components/Sections/FeacturesSection";
import ProductsSection from "../Components/Sections/ProductsSection";
import ServicesSection from "../Components/Sections/ServicesSection";
import TeamSection from "../Components/Sections/TeamSection";
import TestimonialSection from "../Components/Sections/TestimonialSection";

const Home = () => {
  return (
    <div className="space-y-24">
      <HomeSlider />
      <AboutSection />
      <ServicesSection />
      <FeacturesSection />
      <ProductsSection />
      <TeamSection />
      <CoreFeatures />
      <TestimonialSection />
      <div className=""></div>
    </div>
  );
};

export default Home;
