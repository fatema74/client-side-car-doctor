import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignIn from "../Pages/Login/SignIn";
import Checkout from "../Pages/Checkout/Checkout";
import Booking from "../Pages/Checkout/Booking";
import PrivetRout from "./PrivetRout";



const PablicRout = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/signIn',
        element: <SignIn></SignIn>,
      },
      {
        path: '/checkout/:id',
        element: (
          <PrivetRout>
            <Checkout></Checkout>
          </PrivetRout>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/servicess/${params.id}`),
      },
      {
        path: '/booking',
        element: (
          <PrivetRout>
            <Booking></Booking>
          </PrivetRout>
        ),
      },
    ],
  },
]);
export default PablicRout;