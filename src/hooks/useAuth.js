import React, {createContext, useContext, useEffect, useState} from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import {firebaseAuth} from "../utils/firebase-config";
import {useNavigate} from "react-router-dom";

const AuthContext = createContext();

const AuthProvider = (props) => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({
    id: 1,
    name: "Peter",
    email: "hieu@email.com",
  });
  const navigate = useNavigate();

  // check user is logged in
  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (user) => {
      if (user) {
        //Login
        setUser(user);
        setLoading(false);
      } else {
        // Not logged in
        setUser(null);
        setLoading(true);
        navigate("/login");
      }
    });
  }, [navigate]);

  // Sign Up
  const signUp = async (email, password) => {
    setLoading(true);

    await createUserWithEmailAndPassword(firebaseAuth, email, password)
      .then((userCredential) => {
        setUser(userCredential.user);
        navigate("/");
        setLoading(false);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
        alert(errorCode);
      })
      .finally(() => setLoading(false));
  };

  // Sign In
  const signIn = async (email, password) => {
    setLoading(true);

    await signInWithEmailAndPassword(firebaseAuth, email, password)
      .then((userCredential) => {
        setUser(userCredential.user);
        navigate("/");
        setLoading(false);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
        alert(errorCode);
      })
      .finally(() => setLoading(false));
  };

  // LogOut
  const logout = async () => {
    setLoading(true);
    signOut(firebaseAuth)
      .then(() => {
        setUser(null);
        console.log("LogOut");
      })
      .catch((err) => console.log(err));
  };

  const value = {user, setUser, loading, setLoading, signUp, signIn, logout};

  return <AuthContext.Provider value={value} {...props}></AuthContext.Provider>;
};

const useAuth = () => {
  const context = useContext(AuthContext);
  if (typeof context === "undefined")
    throw new Error("useAth must be used within AuthProvider");

  return context;
};

export {useAuth, AuthProvider};
