import { FcGoogle } from "react-icons/fc";
import { BiLogoFacebookCircle, BiLogoGithub } from "react-icons/bi";

const SocialLogin = ({ className }) => {
  return (
    <div className={`flex gap-2 ${className}`}>
      <button className="p-2 bg-bgGray text-2xl rounded-full">
        <FcGoogle />
      </button>
      <button className="p-2 bg-bgGray text-2xl rounded-full text-blue-600">
        <BiLogoFacebookCircle />
      </button>
      <button className="p-2 bg-bgGray text-2xl rounded-full">
        <BiLogoGithub />
      </button>
    </div>
  );
};

export default SocialLogin;
