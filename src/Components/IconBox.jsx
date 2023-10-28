import { Link } from "react-router-dom";

const IconBox = ({ icon, title, link, className, children }) => {
  return (
    <Link to={link}>
      <div className={`icon-box flex gap-4 items-center ${className}`}>
        <img src={icon} alt="" />
        <div className="">
          <div className="text-sm">{children}</div>
          <div className="text-lg font-semibold">{title}</div>
        </div>
      </div>
    </Link>
  );
};

export default IconBox;
