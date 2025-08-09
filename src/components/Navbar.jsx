import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import {
  Link,
  Navigate,
  NavLink,
  useLocation,
  useNavigate,
} from "react-router";
import car from "../assets/image/car10.png";

const Navbar = () => {
  // dark theme
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

  const { user, handleLogOut } = use(AuthContext);
  // const navigate = useNavigate();
  const { pathname } = useLocation();

  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "border-2  text-black border-amber-300 rounded-3xl " : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/available-cars"
          className={({ isActive }) =>
            isActive ? "border-2 text-black  border-amber-300 rounded-3xl " : ""
          }
        >
          Available Cars
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/top-car"
          className={({ isActive }) =>
            isActive ? "border-2 text-black  border-amber-300 rounded-3xl " : ""
          }
        >
          Best Rentals
        </NavLink>
      </li>

      {user && (
        <>
          <li>
            <NavLink
              to="/add-car"
              className={({ isActive }) =>
                isActive
                  ? "border-2 text-black border-amber-300 rounded-3xl "
                  : ""
              }
            >
              Add Car
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/my-car"
              className={({ isActive }) =>
                isActive
                  ? "border-2 text-black border-amber-300 rounded-3xl "
                  : ""
              }
            >
              My Cars
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/my-bookings"
              className={({ isActive }) =>
                isActive
                  ? "border-2 text-black border-amber-300 rounded-3xl  "
                  : ""
              }
            >
              {" "}
              My Bookings
            </NavLink>
          </li>
        </>
      )}
    </>
  );

  const handleUserLogOut = () => {
    handleLogOut();
    return <Navigate to="/signin" state={pathname}></Navigate>;
  };

  return (
    <div className="navbar text-black top-0 fixed bg-amber-50 shadow-sm border-b-2 border-amber-300 z-10 ">
      <div className="flex  container mx-auto ">
        <div className="navbar-start ">
          <div className="dropdown ">
            <div tabIndex={0} role="button" className="    lg:hidden ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm bg-gray-50 dropdown-content  rounded-box z-1 mt-3 w-52 p-2 shadow  "
            >
              {links}
            </ul>
          </div>
          <Link to="/" className="flex items-center">
            <img className="w-25  " src={car} alt="" />
            <h3 className=" font-bold text-3xl text-transparent bg-clip-text bg-gradient-to-r from-black  to-amber-500 ">
              Fleet
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500  to-amber-700 ">
                Go
              </span>
            </h3>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex   font-semibold">
          <ul className="menu menu-horizontal px-1  ">{links}</ul>
        </div>

        <div className="navbar-end">
          {/* dark mode */}
          <label className="swap swap-rotate px-1">
            {/* this hidden checkbox controls the state */}
            <input
              onChange={handleToggle}
              checked={theme === "light" ? false : true}
              type="checkbox"
              className="theme-controller"
              value="autumn"
            />

            {/* sun icon */}
            <svg
              className="swap-off h-6 w-6 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>

            {/* moon icon */}
            <svg
              className="swap-on h-6 w-6 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          </label>

          <div className="relative group">
            {user && (
              <img
                className={`w-13 rounded-full mr-2 hover:${user.displayName}`}
                referrerPolicy="no-referrer"
                src={user?.photoURL}
                alt=""
              />
            )}
            <p className="absolute invisible   group-hover:visible -mt-3 ml-1">
              {user?.displayName}
            </p>
          </div>

          {user ? (
            <NavLink
              onClick={handleUserLogOut}
              className={({ isActive }) =>
                isActive
                  ? "btn  text-black bg-gradient-to-r from-amber-300 border-none  to-amber-500 my-2  rounded-3xl"
                  : ""
              }
            >
              Log Out
            </NavLink>
          ) : (
            <>
              <NavLink
                to="/signin"
                className={({ isActive }) =>
                  isActive
                    ? "  "
                    : "mr-4 btn   bg-gradient-to-r from-amber-300 border-none  to-amber-500 my-2 text-black rounded-3xl  "
                }
              >
                Log In
              </NavLink>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
