import { Link } from "react-router-dom";
import aboutImg from "./../../assets/images/about-section.png";
import aboutImg2 from "./../../assets/images/about-section2.png";
import SectionHeading from "../Sectionheading";

const AboutSection = () => {
  return (
    <section className="flex gap-10">
      <div className="flex-1 relative">
        <img className="pr-16 pb-20 inline-block" src={aboutImg} alt="" />
        <img className="absolute bottom-0 right-0" src={aboutImg2} alt="" />
      </div>
      <div className="flex-1 space-y-4">
        <SectionHeading
          subTitle="About Us"
          title="We are qualified & of experience in this field"
          className="max-w-sm"
        />
        <p className="max-w-md">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
        </p>
        <p className="max-w-md">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
        </p>
        <Link to="/about" className="inline-block btn btn-primary">
          Get More Info
        </Link>
      </div>
    </section>
  );
};

export default AboutSection;
