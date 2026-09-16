import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../lib/firebase";
import { onAuthStateChanged, signInWithEmailAndPassword, signOut, createUserWithEmailAndPassword } from "firebase/auth";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const ADMIN_EMAIL = "berabykk@gmail.com";

  function login(email, password) {
    if (email !== ADMIN_EMAIL) {
      return Promise.reject(new Error("Unauthorized access."));
    }
    return signInWithEmailAndPassword(auth, email, password);
  }

  function signup(email, password) {
    if (email !== ADMIN_EMAIL) {
      return Promise.reject(new Error("Unauthorized access."));
    }
    return createUserWithEmailAndPassword(auth, email, password);
  }

  function logout() {
    return signOut(auth);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      // Only allow ADMIN_EMAIL to be considered "logged in" for admin purposes
      if (user && user.email === ADMIN_EMAIL) {
         setCurrentUser(user);
      } else {
         setCurrentUser(null);
      }
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    login,
    signup,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
