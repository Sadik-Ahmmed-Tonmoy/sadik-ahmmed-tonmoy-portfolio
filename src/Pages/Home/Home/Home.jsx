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
        <div className="mt-5 md:mt-20 container ">
            <HomeTitle/>
            <About/>
            <Resume/>
            <Services/>
            <Skills/>
            <Portfolio/>
            <Pricing/>
            <Contact/>
        </div>
    );
};

export default Home;