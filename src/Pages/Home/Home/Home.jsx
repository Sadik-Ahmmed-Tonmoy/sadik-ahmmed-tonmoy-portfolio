import About from "../About/About";
import HomeTitle from "../HomeTitle/HomeTitle";
import Portfolio from "../Portfolio/Portfolio";
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
        </div>
    );
};

export default Home;