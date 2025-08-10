import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase/firebase.init";
import toast from "react-hot-toast";
import axios from "axios";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const provider = new GoogleAuthProvider();
  const googleSignIn = () => {
    return signInWithPopup(auth, provider);
  };

  const handleLogOut = () => {
    signOut(auth)
      .then(() => {
        setUser(null);
        toast.success("User LogOut Successfully");
      })
      .catch((error) => {});
  };

  const updateUser = (updatedData) => {
    return updateProfile(auth.currentUser, updatedData);
  };

  const userInfo = {
    createUser,
    signInUser,
    provider,
    googleSignIn,
    handleLogOut,
    user,
    loading,
    updateUser,
    setUser,
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user?.email) {
        setUser(user);
        await axios.post(
          `https://assignment-11-server-chi-gray.vercel.app/jwt`,
          { email: user?.email },
          {
            withCredentials: true,
          }
        );
        setLoading(false);
      } else {
        console.log("erfetfe");
        await axios.post(
          "https://assignment-11-server-chi-gray.vercel.app/logout",
          {},
          { withCredentials: true }
        );
        setLoading(false);
      }

      // console.log(user);
    });
    return () => {
      unsubscribe();
    };
  }, [user?.email]);

  return <AuthContext value={userInfo}>{children}</AuthContext>;
};

export default AuthProvider;
