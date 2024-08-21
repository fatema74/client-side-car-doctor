import { useContext } from "react";
import { AuthCotext } from "../AuthProvider/AuthProvider";


const UseAuth = () => {
  const auth = useContext(AuthCotext);
  return auth;
};

export default UseAuth;