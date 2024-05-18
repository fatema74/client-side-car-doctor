import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import axios from "axios";

export const AuthCotext = createContext(null);

const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null);

  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  }

  const logOut = () => {
    setLoading(true)
    return signOut(auth)
  }

  useEffect(() => {
    const unSubmit = onAuthStateChanged(auth, currentUser => { 
      const userEmail = currentUser?.email || user?.email;
      const loggedUser = { email: userEmail };
      setUser(currentUser);
      console.log('current user', currentUser);
      setLoading(false);
      // if user exists then issue a token

      if (currentUser) {
        
        axios
          .post('http://localhost:5000/jwt', loggedUser, { withCredentials: true })
          .then(res => {
            console.log('token respons', res.data);
          });
      } else {
        axios.post('http://localhost:5000/jwt', loggedUser, {
          withCredentials: true
        })
          .then(res => {
          console.log(res.data);
        })
      }
    })
    return () => {
      return unSubmit()
    }
  },[])

  const authInfo = {
    user,
    loading,
    createUser,
    signIn,
    logOut
  }
  return (
    <AuthCotext.Provider value={authInfo}>
      {children}
    </AuthCotext.Provider>
  );
};

export default AuthProvider;