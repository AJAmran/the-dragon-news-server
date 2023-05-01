import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import app from "../firebase/firebase.config";
export const AuthContext = createContext(null);

const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(true);

  const createUser = (email, password) => {
    setLoader(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password)=>{
    setLoader(true)
    return signInWithEmailAndPassword(auth, email, password);
  }

  const logOut = ()=>{
    setLoader(true)
    return signOut(auth)
  }

  useEffect(()=>{
   const unsubscribe = onAuthStateChanged(auth, loggedUser =>{
      console.log('Logged in User inside auth observer', loggedUser)
      setUser(loggedUser)
      setLoader(false);

    })
    return () =>{
      unsubscribe();
    }
  },[])
  const authInfo = {
    user,
    createUser,
    signIn,
    logOut,
    loader
  };
  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
