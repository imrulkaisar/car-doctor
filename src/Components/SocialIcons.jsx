import { AiOutlineGoogle } from "react-icons/ai";
import { BiLogoFacebook, BiLogoTwitter, BiLogoInstagram } from "react-icons/bi";

const SocialIcons = () => {
  return (
    <ul className="social-icons flex gap-3 text-lg">
      <li>
        <a
          href="https://google.com"
          target="_blank"
          className="hover:text-primary"
          rel="noreferrer"
        >
          <AiOutlineGoogle />
        </a>
      </li>
      <li>
        <a
          href="https://facebook.com"
          target="_blank"
          className="hover:text-primary"
          rel="noreferrer"
        >
          <BiLogoFacebook />
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com"
          target="_blank"
          className="hover:text-primary"
          rel="noreferrer"
        >
          <BiLogoTwitter />
        </a>
      </li>
      <li>
        <a
          href="https://instagram.com"
          target="_blank"
          className="hover:text-primary"
          rel="noreferrer"
        >
          <BiLogoInstagram />
        </a>
      </li>
    </ul>
  );
};

export default SocialIcons;
