import { Link, animateScroll as scroll } from "react-scroll";
import { Tooltip as ReactTooltip } from "react-tooltip";
import {
  AiOutlineHome,
  AiOutlineDatabase,
  AiOutlineMail,
} from "react-icons/ai";
import { BsFillPersonLinesFill, BsCodeSlash } from "react-icons/bs";
import { VscVmConnect } from "react-icons/vsc";
import { MdOutlineBusinessCenter, MdOutlineAttachMoney } from "react-icons/md";

const Sidebar = () => {
  return (
    <div className="w-3/12 my-auto">
      <div className="navbar">
        <div className="navbar-start absolute top-0 md:sticky md:top-28">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <ul className="menu bg-base-200 rounded-box">
                <li>
                  <a className="tooltip tooltip-right" data-tip="Home">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                      />
                    </svg>
                  </a>
                  <Link
                    activeClass="active"
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                  >
                    Test 1
                  </Link>
                </li>
                <li>
                  <a className="tooltip tooltip-right" data-tip="Details">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a className="tooltip tooltip-right" data-tip="Stats">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </ul>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex fixed top-56 mx-20">
          {/* pc */}
          <ul className="menu menu-horizontal px-1">
            <ul className="menu bg-base-200 rounded-box">
              <li data-tooltip-id="home">
                <Link
                  activeClass="active"
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  <AiOutlineHome style={{ fontSize: "2rem" }} />
                </Link>
              </li>
              <li data-tooltip-id="about">
                <Link
                  activeClass="active"
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  <BsFillPersonLinesFill style={{ fontSize: "2rem" }} />
                </Link>
              </li>
              <li data-tooltip-id="resume">
                <Link
                  activeClass="active"
                  to="resume"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  <MdOutlineBusinessCenter style={{ fontSize: "2rem" }} />
                </Link>
              </li>
              <li data-tooltip-id="services">
                <Link
                  activeClass="active"
                  to="services"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  <VscVmConnect style={{ fontSize: "2rem" }} />
                </Link>
              </li>
              <li data-tooltip-id="skills">
                <Link
                  activeClass="active"
                  to="skills"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  <BsCodeSlash style={{ fontSize: "2rem" }} />
                </Link>
              </li>
              <li data-tooltip-id="portfolio">
                <Link
                  activeClass="active"
                  to="portfolio"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  <AiOutlineDatabase style={{ fontSize: "2rem" }} />
                </Link>
              </li>
              <li data-tooltip-id="price">
                <Link
                  activeClass="active"
                  to="price"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  <MdOutlineAttachMoney style={{ fontSize: "2rem" }} />
                </Link>
              </li>
              <li data-tooltip-id="contact">
                <Link
                  activeClass="active"
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  <AiOutlineMail style={{ fontSize: "2rem" }} />
                </Link>
              </li>
            </ul>
          </ul>
        </div>
      </div>

      <ReactTooltip id="home" place="left" variant="info" content="Home" />
      <ReactTooltip id="about" place="left" variant="info" content="About" />
      <ReactTooltip id="resume" place="left" variant="info" content="Resume" />
      <ReactTooltip
        id="services"
        place="left"
        variant="info"
        content="Services"
      />
      <ReactTooltip id="skills" place="left" variant="info" content="Skills" />
      <ReactTooltip
        id="portfolio"
        place="left"
        variant="info"
        content="Portfolio"
      />
      <ReactTooltip id="price" place="left" variant="info" content="Price" />
      <ReactTooltip
        id="contact"
        place="left"
        variant="info"
        content="Contact"
      />
    </div>
  );
};

export default Sidebar;
