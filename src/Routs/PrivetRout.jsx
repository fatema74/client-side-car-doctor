import { useContext } from "react";
import { AuthCotext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivetRout = ({children}) => {
  const { user, loading } = useContext(AuthCotext);

  const location = useLocation()


  if (loading) {
    return <span className="loading loading-spinner loading-lg"></span>;
  }


  if (user?.email) {
    return children
  }
  return <Navigate state={location.pathname} to='/login' replace></Navigate>
};

export default PrivetRout;