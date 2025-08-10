import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { FcGoogle } from "react-icons/fc";
import { NavLink, useNavigate } from "react-router";
import toast from "react-hot-toast";
import { auth } from "../firebase/firebase.init";

const SignUp = () => {
  const { createUser, googleSignIn, provider, updateUser, setUser } =
    use(AuthContext);
  const navigate = useNavigate();
  const from = location.state || "/";
  // const navigate = useNavigate();
  //   console.log(createUser);
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;

    setSuccess(false);
    setErrorMessage("");

    if (password.length < 6) {
      setErrorMessage("password must be grater than 6");
      return;
    }

    if (!/[a-z]/.test(password)) {
      setErrorMessage("password must contain at least one lower case letter");
      return;
    }

    if (!/[A-Z]/.test(password)) {
      setErrorMessage("password must contain at least one upper case letter");
      return;
    }

    if (!/\d/.test(password)) {
      setErrorMessage("password must contain at least one number");
      return;
    }

    if (!/[@#$]/.test(password)) {
      setErrorMessage("password must contain at least one special character");
      return;
    }

    // create user in firebase
    createUser(email, password)
      .then((res) => {
        const user = res.user;

        updateUser({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo });
          })
          .catch((error) => {
            setUser(user);
          });

        // console.log(res.user);
        toast.success("User LogIn Successfully");
        setSuccess(true);
        navigate(from ? from : "/");
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };

  useEffect(() => {
    document.title = "FleetGo | Registration";
  }, []);

  const handleGoogleSignIn = () => {
    googleSignIn(auth, provider)
      .then((result) => {
        toast.success("User LogIn Successfully");
        setSuccess(true);
        setErrorMessage("");
        navigate(from ? from : "/");
      })
      .catch((error) => {
        setErrorMessage(error.message);
        setSuccess("");
      });
  };

  return (
    <div className="card bg-amber-50 m-5    mx-auto my-30    max-w-sm shrink-0 shadow-xl  ">
      <div className="card-body">
        <h1 className="text-5xl font-bold text-amber-500">Sign Up now!</h1>
        <form onSubmit={handleSignUp} className="fieldset">
          <label className="label">Name</label>
          <input type="text" name="name" className="input" placeholder="Name" />
          <label className="label">Email</label>
          <input
            type="email"
            name="email"
            className="input"
            placeholder="Email"
          />
          <label className="label">Password</label>
          <input
            type="password"
            name="password"
            className="input"
            placeholder="Password"
          />
          <label className="label">Photo URL</label>
          <input
            type="text"
            name="photo"
            className="input"
            placeholder="Photo URL"
          />
          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>

          <button
            onClick={handleGoogleSignIn}
            className="btn mt-2 w-[320px] mr-5  mx-auto
             "
          >
            <FcGoogle size={24} /> Login with Google
          </button>
          <button className="btn text-gray-700  bg-gradient-to-r from-amber-300  to-amber-500 my-2  border-none rounded-2xl   mt-4 mr-4">
            Registration
          </button>
          <p className="font-semibold text-gray-700 text-center pt-5">
            Already Have An Account ?
            <NavLink className=" text-amber-500" to="/signin">
              Log In
            </NavLink>
          </p>
        </form>
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
        {success && <p className="text-green-500">User Log In Successfully</p>}
      </div>
    </div>
  );
};

export default SignUp;
