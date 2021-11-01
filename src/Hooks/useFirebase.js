// all firebase authentication related work is here such as signin and registratin with email and all
import { useEffect, useState } from "react";
import {
  getAuth,
  signInWithPopup,
  signOut,
  GoogleAuthProvider,
  onAuthStateChanged,
} from "firebase/auth";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const auth = getAuth();
  const [error, setError] = useState("");

  // Authentication For Google login System

  const signInUsingGoogle = () => {
    setIsLoading(true);
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider).finally(() =>
      setIsLoading(false)
    );
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return unsubscribe;
  }, [auth]);

  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {})
      .finally(() => setIsLoading(false));
  };
  return {
    isLoading,
    user,
    signInUsingGoogle,
    logOut,
    error,
  };
};

export default useFirebase;
