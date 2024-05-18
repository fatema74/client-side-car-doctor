import { Link, NavLink } from "react-router-dom";
import logo from "../img/logo.svg";
import { FaBagShopping} from 'react-icons/fa6';
import { AiOutlineSearch } from 'react-icons/ai';
import { useContext } from "react";
import { AuthCotext } from "../AuthProvider/AuthProvider";

const Navber = () => {

  const { user, logOut } = useContext(AuthCotext);

  const handleLogOut = () => {
    logOut()
    .then(()=>{})
    .catch(error=>console.log(error))
  }

  const navLink = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      {user?.email ? (
        <>
          <li>
            <NavLink to="/booking">My Booking</NavLink>
          </li>
          <li>
            <button onClick={handleLogOut}>LogOut</button>
          </li>
        </>
      ) : (
        <li>
          <NavLink to="/login">login</NavLink>
        </li>
      )}
      <li>
        <NavLink to="/blog">Blog</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact</NavLink>
      </li>
    </>
  );




  return (
    <div className="navbar bg-base-100 mb-16">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLink}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-xl">
          <img src={logo} alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLink}</ul>
      </div>
      <div className="navbar-end gap-4">
        <div className="text-xl">
          <FaBagShopping />
        </div>
        <div className="text-xl">
          <AiOutlineSearch />
        </div>
        <button className="btn btn-warning">Appointment</button>
      </div>
    </div>
  );
};

export default Navber;