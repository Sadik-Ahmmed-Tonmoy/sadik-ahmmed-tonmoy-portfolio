import CountUp from "react-countup";
import { AiOutlineHome } from "react-icons/ai";
import Lottie from "lottie-react";
import fireLottie from "../../../assets/Lotties/animation_llp8uoxr.json";
import AOS from "aos";
import "aos/dist/aos.css";
import { Slide } from "react-awesome-reveal";
AOS.init();

const HomeTitle = () => {
  return (
    <div id="home">
      <Slide>
      <h5 className="border flex rounded-3xl py-2 px-5 w-min ms-4 md:ms-28 mb-5 md:mb-10">
        {" "}
        <AiOutlineHome style={{ fontSize: "1.44rem" }} />{" "}
        <span className="ms-2">HOME</span>
      </h5>
      </Slide>
      <div className="flex justify-center">
        <div className="text-center">
         <div data-aos="zoom-in" 
          data-aos-duration="3000" >
         <h3 className="text-3xl md:text-6xl">
            "Code is the bridge <br />{" "}
            <span className="text-green-500 ">Between</span>
            <br />
            <span>Human ideas</span> <br />{" "}
            <span className=" text-green-500">And</span>
            <br /> <span>The digital universe"</span>
          </h3>
          <p className="mt-6 md:ms-10 mx-2 opacity-30">
            I design and code beautifully simple things and i love what i do.
          </p>
         </div>

          <div className="stats shadow bg-slate-900 mt-5 md:mt-14 flex flex-col md:flex-row mx-2">
            <div data-aos="fade-right" data-aos-easing="ease-in-sine" data-aos-duration="1500" className="stat">
              <div className="stat-value text-green-500">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-8 h-8 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  ></path>
                </svg>
                <CountUp duration={4} end={9} />+
              </div>
              <div className="stat-title text-white">MONTH'S OF EXPERIENCE</div>
            </div>
            <div data-aos="fade-left" data-aos-easing="ease-in-sine" data-aos-duration="1500"  className="stat">
              <div className="stat-value text-green-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-8 h-8 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  ></path>
                </svg>
                <CountUp duration={5} end={10} />+
              </div>
              <div className="stat-title text-white">LIVE PROJECTS</div>
            </div>
          </div>
        </div>
      </div>
      <Lottie className="h-36 " animationData={fireLottie} loop={true} />
    </div>
  );
};

export default HomeTitle;
