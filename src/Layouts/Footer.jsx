import { Link } from "react-router-dom";
import Logo from "../Components/Logo";
import SocialIcons from "../Components/SocialIcons";

const Footer = () => {
  return (
    <footer className="py-20 bg-secondary">
      <div className="container-area grid grid-cols-5 gap-12 text-white">
        {/* column one */}
        <div className="col-span-2 space-y-5">
          <Logo isDark={true} className="" />
          <p className="text-white max-w-xs">
            Edwin Diaz is a software and web technologies engineer, a life coach
            trainer who is also a serial .
          </p>
          <SocialIcons />
        </div>

        {/* column two */}
        <div className="">
          <h4 className="text-white text-xl mb-8">About</h4>
          <ul className="space-y-2 font-light">
            <li>
              <Link className="hover:text-primary" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="hover:text-primary" to="/services">
                Service
              </Link>
            </li>
            <li>
              <Link className="hover:text-primary" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* column three */}
        <div className="">
          <h4 className="text-white text-xl mb-8">Company</h4>
          <ul className="space-y-2 font-light">
            <li>
              <Link className="hover:text-primary" to="/about">
                Why Car Doctor
              </Link>
            </li>
            <li>
              <Link className="hover:text-primary" to="/about">
                About
              </Link>
            </li>
          </ul>
        </div>

        {/* column four */}
        <div className="">
          <h4 className="text-white text-xl mb-8">Support</h4>
          <ul className="space-y-2 font-light">
            <li>
              <Link className="hover:text-primary" to="/contact">
                Support Center
              </Link>
            </li>
            <li>
              <Link className="hover:text-primary" to="/contact">
                Feedback
              </Link>
            </li>
            <li>
              <Link className="hover:text-primary" to="/">
                Accesbility
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
