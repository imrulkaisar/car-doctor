import { Link } from "react-router-dom";

import facebook from "./../assets/icons/facebook.png";
import twitter from "./../assets/icons/twitter.png";
import linkedin from "./../assets/icons/linkedin.png";
import instagram from "./../assets/icons/instagram.png";

const TeamMember = ({ image, name, title }) => {
  const link = `/product/`;
  return (
    <article className="border rounded-lg p-5 space-y-4 hover:border-primary text-center">
      <Link className="block" to={link}>
        <img className="inline object-contain rounded-lg" src={image} alt="" />
      </Link>
      <div className="space-y-2">
        <Link className="block" to={link}>
          <h4 className="text-2xl leading-none">{name}</h4>
        </Link>
        <p className="">{title}</p>
        <div className="flex justify-center gap-2">
          <a href="#" target="_blank">
            <img className="w-8" src={facebook} alt="facebook" />
          </a>
          <a href="#" target="_blank">
            <img className="w-8" src={twitter} alt="twitter" />
          </a>
          <a href="#" target="_blank">
            <img className="w-8" src={linkedin} alt="linkedin" />
          </a>
          <a href="#" target="_blank">
            <img className="w-8" src={instagram} alt="instagram" />
          </a>
        </div>
      </div>
    </article>
  );
};

export default TeamMember;
