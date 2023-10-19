import { Link, NavLink } from "react-router-dom";
import Logo from "./Logo";
import { FaUser } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleSignOut = () => {
    logOut().then().catch();
  };
  return (
    <div>
      <nav className="navbar bg-base-100 shadow px-12">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <NavLink
                  to="/"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "text-[18px] font-normal text-[#800000]"
                      : isActive
                      ? "text-[#800000] text-[18px] font-bold underline"
                      : ""
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/addProduct"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "text-[18px] font-normal text-[#800000]"
                      : isActive
                      ? "text-[#800000] text-[18px] font-bold underline"
                      : ""
                  }
                >
                  Add Product
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/register"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "text-[18px] font-normal text-[#800000]"
                      : isActive
                      ? "text-[#800000] text-[18px] font-bold underline"
                      : ""
                  }
                >
                  Register
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/myCart"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "text-[18px] font-normal text-[#800000]"
                      : isActive
                      ? "text-[#800000] text-[18px] font-bold underline"
                      : ""
                  }
                >
                  My Cart
                </NavLink>
              </li>
            </ul>
          </div>
          <Logo></Logo>
        </div>
        <div className="navbar-center hidden md:flex">
          <ul className="flex gap-4">
            <li>
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "text-[18px] font-normal text-[#800000]"
                    : isActive
                    ? "text-[#800000] text-[18px] font-bold underline"
                    : ""
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/addProduct"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "text-[18px] font-normal text-[#800000]"
                    : isActive
                    ? "text-[#800000] text-[18px] font-bold underline"
                    : ""
                }
              >
                Add Product
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/myCart"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "text-[18px] font-normal text-[#800000]"
                    : isActive
                    ? "text-[#800000] text-[18px] font-bold underline"
                    : ""
                }
              >
                My Cart
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/register"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "text-[18px] font-normal text-[#800000]"
                    : isActive
                    ? "text-[#800000] text-[18px] font-bold underline"
                    : ""
                }
              >
                Register
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/login"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "text-[18px] font-normal text-[#800000]"
                    : isActive
                    ? "text-[#800000] text-[18px] font-bold underline"
                    : ""
                }
              >
                Login
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <ul className="flex items-center gap-4">
            {user ? (
              <div className="flex items-center">
                {user.photoURL ? (
                  <img className="w-[20%]" src={user.photoURL} alt="" />
                ) : (
                  <FaUser></FaUser>
                )}
                <h3 className="ml-2">{user.displayName || "User"}</h3>
              </div>
            ) : (
              <FaUser className="text-[#800000]"></FaUser>
            )}
            {user ? (
              <button
                onClick={handleSignOut}
                className="btn capitalize bg-[#800000] text-white hover:bg-black"
              >
                Sign Out
              </button>
            ) : (
              <Link to="/login">
                <button className="btn capitalize bg-[#800000] text-white hover:bg-black">
                  Login
                </button>
              </Link>
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
