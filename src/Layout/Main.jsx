import { Outlet } from "react-router-dom";
import Banner from "../Pages/Home/Banner"
import Footer from "../Shared/Footer";
import Navber from "../Shared/Navber";


const Main = () => {
  return (
    <div className="">
      <Navber></Navber>
      <div>
        <Banner></Banner>
      </div>
      <Outlet></Outlet>
      <div className="mt-16">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Main;