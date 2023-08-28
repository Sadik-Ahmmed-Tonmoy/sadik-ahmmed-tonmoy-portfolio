import { Outlet } from "react-router-dom";
import NameCard from "../../Pages/Home/NameCard/NameCard";
import Sidebar from "../../Pages/Home/Sidebar/Sidebar";
import bgVideo from "../../assets/Video/My Video.mp4"
import './Main.css'

const Main = () => {
  return (
    <div className="main relative text-slate-50">
      <div className="overlay fixed top-0 z-10 w-full h-full"></div>
      <video src={bgVideo} autoPlay loop muted></video>
      <div className="absolute top-0 z-20">
        <div className="md:flex lg:flex relative">
          <NameCard />
          <Outlet />
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default Main;
