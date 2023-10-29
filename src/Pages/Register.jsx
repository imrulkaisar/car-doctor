import { Link } from "react-router-dom";
import PageHeader from "../Components/PageHeader";
import SocialLogin from "../Components/SocialLogin";
import authenticationImg from "./../assets/images/authentication.png";

const Register = () => {
  return (
    <div>
      <div className="grid py-20 gap-8 lg:grid-cols-2">
        <img src={authenticationImg} alt="" />
        <div className="border-2 p-20 rounded-lg space-y-8">
          <h2 className="text-center">Sign Up</h2>
          <form className="space-y-5">
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email Address"
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                className="form-input"
              />
            </div>
            <button type="submit" className="btn btn-primary block w-full">
              Sign Up
            </button>
          </form>
          <div className="space-y-3">
            <p className="font-semibold text-center">Or Sign up with</p>
            <SocialLogin className="justify-center" />
          </div>
          <p className="text-center">
            Already have an account?{" "}
            <Link to="/login" className="text-primary font-semibold">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
