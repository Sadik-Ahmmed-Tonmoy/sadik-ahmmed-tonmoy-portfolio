import { Outlet } from "react-router-dom";
import NameCard from "../../Pages/Home/NameCard/NameCard";


const Main = () => {
    return (
        <>
        <div className="md:flex lg:flex">
            <NameCard/>
            
            <Outlet/>
        </div>
        </>
    );
};

export default Main;