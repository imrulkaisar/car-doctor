import { Link } from "react-router-dom";
import PageHeader from "../Components/PageHeader";
import SocialLogin from "../Components/SocialLogin";
import authenticationImg from "./../assets/images/authentication.png";
import { useContext } from "react";
import { UserContext } from "../Contexts/UserContext";
import Swal from "sweetalert2";

const Login = () => {
  const { signIn } = useContext(UserContext);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;

    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
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
    <div>
      <div className="grid py-20 gap-8 lg:grid-cols-2">
        <img src={authenticationImg} alt="" />
        <div className="border-2 p-20 rounded-lg space-y-8">
          <h2 className="text-center">Login</h2>
          <form className="space-y-5" onSubmit={handleLogin}>
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
              Login
            </button>
          </form>
          <div className="space-y-3">
            <p className="font-semibold text-center">Or Sign up with</p>
            <SocialLogin className="justify-center" />
          </div>
          <p className="text-center">
            Have an account?{" "}
            <Link to="/register" className="text-primary font-semibold">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
