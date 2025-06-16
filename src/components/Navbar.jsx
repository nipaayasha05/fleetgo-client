import React, { use } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate, NavLink, useLocation, useNavigate } from "react-router";
import car from "../assets/image/car10.png";

const Navbar = () => {
  const { user, handleLogOut } = use(AuthContext);
  // const navigate = useNavigate();
  const { pathname } = useLocation();

  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "border-2  border-amber-300 rounded-2xl" : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/available-cars"
          className={({ isActive }) =>
            isActive ? "border-2  border-amber-300 rounded-2xl " : ""
          }
        >
          Available Cars
        </NavLink>
      </li>

      {user && (
        <>
          <li>
            <NavLink
              to="/add-car"
              className={({ isActive }) =>
                isActive ? "border-2  border-amber-300 rounded-2xl" : ""
              }
            >
              Add Car
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/my-car"
              className={({ isActive }) =>
                isActive ? "border-2  border-amber-300 rounded-2xl btn" : ""
              }
            >
              My Cars
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/my-bookings"
              className={({ isActive }) =>
                isActive ? "border-2  border-amber-300 rounded-2xl btn" : ""
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
    <div className="navbar top-0 fixed bg-gray-50 shadow-sm border-b-2 border-amber-300 z-10 ">
      <div className="flex  container mx-auto ">
        <div className="navbar-start ">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden "
            >
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow  "
            >
              {links}
            </ul>
          </div>
          <div className="flex items-center">
            <img className="w-25  " src={car} alt="" />
            <h3 className=" font-bold text-3xl text-transparent bg-clip-text bg-gradient-to-r from-black  to-amber-500 ">
              Fleet
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500  to-amber-700 ">
                Go
              </span>
            </h3>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex   font-semibold">
          <ul className="menu menu-horizontal px-1  ">{links}</ul>
        </div>

        <div className="navbar-end">
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
                isActive ? "border-2  border-amber-300 rounded-2xl btn" : ""
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
                    ? "border-2 rounded-2xl border-amber-300 btn mr-2 "
                    : "mr-4 "
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
