import { MdOutlineBusinessCenter } from "react-icons/md";
import { FaUserGraduate } from "react-icons/fa";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { BsCodeSlash } from "react-icons/bs";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init()

const Resume = () => {
  return (
    <div id="resume">
      <h5 className="border flex rounded-3xl py-2 px-5 w-min ms-4 md:ms-28 mb-5 md:mb-10">
        <MdOutlineBusinessCenter style={{ fontSize: "1.44rem" }} />{" "}
        <span className="ms-2">RESUME</span>
      </h5>
      <div className="md:w-9/12 mx-auto">
        <h3 className="text-3xl md:text-6xl"><span className="text-green-400">Education</span> <span className="text-white">&</span> <span className="text-blue-400">Experience</span></h3>

        <VerticalTimeline>
      <div data-aos="fade-up-right">    <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="2018 - 2022"
            iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
            icon={<FaUserGraduate />}
          >
            <h3 className="vertical-timeline-element-title">
              Bachelor of Business Administration (BBA) in Marketing
            </h3>
            <h3 className="vertical-timeline-element-title text-2xl font-bold text-black">
              Stamford University Bangladesh
            </h3>
            <ul className="mt-2">
              <li>Specialization: Marketing</li>
              <li>Academic Achievements: CGPA 3.46</li>
            </ul>
          </VerticalTimelineElement></div>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="Dec, 2022 - Present"
            iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
            icon={<BsCodeSlash />}
          >
            <h3 className="vertical-timeline-element-title">
              Full Stack Developer
            </h3>
            <h3 className="vertical-timeline-element-title text-2xl font-bold text-black">
              Programming Hero
            </h3>
            <p>
              Creative Responsive Design, Good User Experience, Visual Design,
              Clean Code
            </p>
          </VerticalTimelineElement>
          <div data-aos="flip-left">
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="May, 2019 - May, 2023"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<MdOutlineBusinessCenter />}
          >
            <h3 className="vertical-timeline-element-title">
              Assistants Team Leader
            </h3>
            <h3 className="vertical-timeline-element-title text-2xl font-bold text-black">
              GETCO BUSINESS SOLUTION LTD
            </h3>
            <p>Project - Unilever Pureit Careline</p>
            <ul>
              <li>Managed social media pages of Unilever PureIt Bangladesh</li>
              <li>
                providing guidance, support, and motivation to ensure optimal
                performance and productivity.
              </li>
            </ul>
          </VerticalTimelineElement>
          </div>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="June, 2023 - Present"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<BsCodeSlash />}
          >
            <h3 className="vertical-timeline-element-title">
              Full Stack Projects
            </h3>
            <h3 className="vertical-timeline-element-title text-2xl font-bold text-black">
              SCIC | Programming Hero
            </h3>
            <p>With a passion for web development and an insatiable curiosity, I've embarked on a dynamic journey through the world of MERN development.</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Resume;
