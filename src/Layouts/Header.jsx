import { Link, NavLink } from "react-router-dom";
import Logo from "../Components/Logo";
import cartIcon from "./../assets/icons/cart.svg";
import searchIcon from "./../assets/icons/search.svg";

const Header = () => {
  return (
    <header>
      <div className="container-area py-5 flex gap-5 justify-between items-center">
        <Logo className="" />

        {/* Nav links */}
        <nav className="">
          <ul className="flex gap-5 text-secondaryShadow text-lg font-medium justify-center">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/services">Services</NavLink>
            </li>
            <li>
              <NavLink to="/blog">Blog</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </nav>

        {/* quick links */}
        <div className="flex gap-4 items-center justify-end">
          <Link to="/cart">
            <img src={cartIcon} alt="cart" />
          </Link>
          <img src={searchIcon} alt="cart" />
          <Link
            to="/appointment"
            className="btn btn-bordered ml-4 hover:btn-primary"
          >
            Appointment
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
