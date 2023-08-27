import { Outlet } from "react-router-dom";
import NameCard from "../../Pages/Home/NameCard/NameCard";
import Sidebar from "../../Pages/Home/Sidebar/Sidebar";

const Main = () => {
  return (
    <>
      <div className="md:flex lg:flex relative">
       
        <NameCard />

        <Outlet />
        <Sidebar />
      </div>
    </>
  );
};

export default Main;
