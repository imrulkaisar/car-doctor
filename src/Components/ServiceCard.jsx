import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

import service1 from "./../assets/images/services/1.jpg";

const ServiceCard = () => {
  const link = `/service/details`;
  return (
    <article className="border rounded-lg p-5 space-y-4 hover:border-primary">
      <Link className="block" to={link}>
        <img className="rounded-lg" src={service1} alt="" />
      </Link>
      <Link className="block" to={link}>
        <h4 className="text-2xl">Electrical System</h4>
      </Link>
      <div className="flex justify-between items-center text-lg text-primary">
        <p className="text-inherit font-bold">Price : $20.00</p>
        <Link to={link}>
          <FiArrowRight className="text-2xl" />
        </Link>
      </div>
    </article>
  );
};

export default ServiceCard;
