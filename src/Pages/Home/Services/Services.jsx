import { Slide } from "react-awesome-reveal";
import { VscVmConnect } from "react-icons/vsc";
import Lottie from "lottie-react";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
import developerLottie from "../../../assets/Lotties/animation_llui246z.json";
import responsiveLottie from "../../../assets/Lotties/animation_lluj483i.json";
import securityLottie from "../../../assets/Lotties/animation_llujmaeh.json";

const Services = () => {
  return (
    <div id="services" className="my-24">
      <Slide>
        <h5 className="border flex rounded-3xl py-2 px-5 w-min ms-4 md:ms-28 mb-5 md:mb-10">
          <VscVmConnect style={{ fontSize: "1.44rem" }} />{" "}
          <span className="ms-2">SERVICES</span>
        </h5>
      </Slide>
      <div className="md:w-9/12 mx-auto">
        <h3
          data-aos="zoom-in"
          data-aos-duration="2000"
          className="text-3xl md:text-6xl ms-2"
        >
          My <span className="text-green-500">Specializations</span>
        </h3>
        <div data-aos="fade-up-right" 
          data-aos-duration="2000" className="md:flex mt-5 md:mt-12 p-3 md:p-8 border rounded-xl relative m-2">
          <div>
            <h3 className="text-2xl mb-4">Full Stack Web Development</h3>
            <p className="md:w-8/12">
              With a strong foundation in the MERN stack (MongoDB, Express.js,
              React, Node.js), I specialize in full-stack web development. From
              designing user interfaces that engage users to crafting robust
              backend systems, I thrive on delivering seamless and dynamic web
              experiences.
            </p>
          </div>
          <Lottie
            className="md:absolute bottom-5 right-0 md:w-3/12 "
            animationData={developerLottie}
            loop={true}
          />
        </div>
        <div data-aos="fade-up-left" 
          data-aos-duration="2000"  className="md:flex mt-4 p-3 md:p-8 border rounded-xl relative m-2">
          <div>
            <h3 className="text-2xl mb-4">Responsive Design</h3>
            <p className="md:w-8/12">
              As a MERN developer, I'm dedicated to creating web experiences
              that adapt seamlessly across devices and screen sizes. Responsive
              design is not just a feature, it's a philosophy that I embed into
              every project I undertake.
            </p>
          </div>
          <Lottie
            className="md:absolute -top-5 right-0 md:w-3/12 "
            animationData={responsiveLottie}
            loop={true}
          />
        </div>
        <div data-aos="fade-up" 
          data-aos-duration="3000"  className="md:flex mt-4 p-3 md:p-8 border rounded-xl relative m-2">
          <div>
            <h3 className="text-2xl mb-4">Web Security</h3>
            <p className="md:w-8/12">
              As a MERN developer, I prioritize the security of web applications
              as an integral part of the development process. Web security isn't
              an afterthought for me, it's a fundamental principle that guides
              every line of code I write.
            </p>
          </div>
          <Lottie
            className="md:absolute -top-5 right-0 md:w-3/12 "
            animationData={securityLottie}
            loop={true}
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
