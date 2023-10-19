import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { FaGoogle } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Navbar from "../../components/Headers/Navbar/Navbar";

const Login = () => {
  const { signIn, googleSignIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [loginError, setLoginError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    setLoginError("");
    signIn(email, password)
      .then((result) => {
        console.log(result.user);

        toast("Login successful!"); // Show a success toast message

        const redirectTo = location.state ? location.state.from : "/";
        setTimeout(() => {
          navigate(redirectTo);
        }, 1500);
      })
      .catch((error) => {
        console.log(error);
        setLoginError(error.message);
      });
  };
  const handleGoogle = () => {
    googleSignIn().then((result) => {
      console.log(result.user);
      toast("Login successful!"); // Show a success toast message

      const redirectTo = navigate(location?.state ? location.state : "/");
      setTimeout(() => {
        navigate(redirectTo);
      }, 2000);
    });
  };
  return (
    <div>
      <Navbar></Navbar>

      <div className="hero container w-full md:min-h-screen bg-red-100">
        <ToastContainer />
        <div className="hero-content flex-col">
          <div className="text-center md:mb-10">
            <h1 className="md:text-5xl text-[#800000] font-bold">
              Login Your Account
            </h1>
          </div>
          <div className="card  md:w-[500px] shadow-2xl bg-base-100">
            <div className="card-body">
              <form onSubmit={handleLogin}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      placeholder="password"
                      className="input input-bordered w-full"
                      required
                    />
                    <span
                      className="absolute top-4 right-2"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <FaEyeSlash className="text-[#800000]"></FaEyeSlash>
                      ) : (
                        <FaEye className="text-[#800000]"></FaEye>
                      )}
                    </span>
                  </div>

                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn bg-[#800000] hover:bg-[#800000] text-white mb-1">
                    Login
                  </button>
                  {loginError && <p className="text-red-700">{loginError}</p>}
                  <p className="block mb-5 text-center text-base font-normal leading-relaxed text-gray-700 antialiased">
                    Don&#39;t have an account? Please{" "}
                    <Link
                      className="font-medium text-black transition-colors hover:text-pink-500"
                      to="/register"
                    >
                      Register
                    </Link>
                  </p>
                  <hr className="border-black border-1 w-1/4 mx-auto" />
                </div>
              </form>
              <div className="mt-5">
                <button
                  onClick={handleGoogle}
                  className="btn bg-[#800000] hover:bg-[#800000] text-white w-full"
                >
                  <FaGoogle className="text-3xl"></FaGoogle>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
