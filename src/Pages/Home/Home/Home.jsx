import { ScrollRestoration } from "react-router-dom";
import About from "../About/About";
import Contact from "../Contact/Contact";
import HomeTitle from "../HomeTitle/HomeTitle";
import Portfolio from "../Portfolio/Portfolio";
import Pricing from "../Pricing/Pricing";
import Resume from "../Resume/Resume";
import Services from "../Services/Services";
import Skills from "../Skills/Skills";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();


const Home = () => {
    return (
        <div className="mt-5 md:mt-20 container mx-auto overflow-hidden">
            <HomeTitle/>
            <About/>
            <Resume/>
            <Services/>
            <Skills/>
            <Portfolio/>
            {/* <Pricing/> */}
            <Contact/>
            <ScrollRestoration/>
        </div>
    );
};

export default Home;