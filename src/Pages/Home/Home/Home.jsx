import About from "../About/About";
import HomeTitle from "../HomeTitle/HomeTitle";
import Resume from "../Resume/Resume";
import Services from "../Services/Services";


const Home = () => {
    return (
        <div className="mt-5 md:mt-20 container ">
            <HomeTitle/>
            <About/>
            <Resume/>
            <Services/>
        </div>
    );
};

export default Home;