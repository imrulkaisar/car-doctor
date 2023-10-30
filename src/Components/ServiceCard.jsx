import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

const ServiceCard = ({ data }) => {
  const { _id, title, img, price } = data || {};
  const link = `/service/?service_id=${_id}`;
  return (
    <article className="border rounded-lg p-5 space-y-4 hover:border-primary">
      <Link className="block" to={link}>
        <img
          className="rounded-lg w-full aspect-video object-cover"
          src={img}
          alt=""
        />
      </Link>
      <Link className="block" to={link}>
        <h4 className="text-2xl">{title}</h4>
      </Link>
      <div className="flex justify-between items-center text-lg text-primary">
        <p className="text-inherit font-bold">Price : ${price}</p>
        <Link to={link}>
          <FiArrowRight className="text-2xl" />
        </Link>
      </div>
    </article>
  );
};

export default ServiceCard;
