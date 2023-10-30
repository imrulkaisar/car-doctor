import { FcGoogle } from "react-icons/fc";
import { BiLogoFacebookCircle, BiLogoGithub } from "react-icons/bi";
import { useContext } from "react";
import { UserContext } from "../Contexts/UserContext";
import Swal from "sweetalert2";

const SocialLogin = ({ className }) => {
  const { googleSignIn } = useContext(UserContext);

  const handleSocialSignIn = (media) => {
    media()
      .then((res) => {
        if (res) {
          Swal.fire({
            icon: "success",
            title: "You are logged in",
            showConfirmButton: false,
            showCloseButton: true,
          });
        }
      })
      .catch((error) => {
        console.error(error);
        Swal.fire({
          icon: "error",
          title: "Something wrong!",
          text: error.message,
          showConfirmButton: false,
          showCloseButton: true,
        });
      });
  };

  return (
    <div className={`flex gap-2 ${className}`}>
      <button
        onClick={() => handleSocialSignIn(googleSignIn)}
        className="p-2 bg-bgGray text-2xl rounded-full"
      >
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
