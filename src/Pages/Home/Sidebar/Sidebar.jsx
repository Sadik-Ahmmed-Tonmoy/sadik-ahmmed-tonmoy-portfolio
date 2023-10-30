import { Link, animateScroll as scroll } from "react-scroll";
import { Tooltip as ReactTooltip } from "react-tooltip";
import {
  AiOutlineHome,
  AiOutlineDatabase,
  AiOutlineMail,
} from "react-icons/ai";
import { BsFillPersonLinesFill, BsCodeSlash } from "react-icons/bs";
import { VscVmConnect } from "react-icons/vsc";
import {
  MdOutlineBusinessCenter,
  MdDriveFileRenameOutline,
  MdOutlineAttachMoney,
} from "react-icons/md";

const Sidebar = () => {
  return (
    <div className="md:w-3/12 md:h-screen sticky top-0 flex items-center">
      <div className="w-3/12 my-auto">
        <div className="navbar">
          <div className="navbar-start fixed top-4 md:sticky md:top-28">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost md:hidden ">
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
                className="menu menu-sm dropdown-content mt-1 z-[1] p-2 shadow rounded-box w-44"
              >
                <ul className="menu bg-slate-950 rounded-box">
                  <li>
                    <Link
                      activeClass="active"
                      to="nameCard"
                      spy={true}
                      smooth="easeInOutQuint"
                      offset={50}
                      duration={500}
                    >
                      <MdDriveFileRenameOutline style={{ fontSize: "2rem" }} />{" "}
                      Name
                    </Link>
                  </li>
                  <li>
                    <Link
                      activeClass="active"
                      to="home"
                      spy={true}
                      smooth="easeInOutQuint"
                      offset={50}
                      duration={500}
                    >
                      <AiOutlineHome style={{ fontSize: "2rem" }} /> Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      activeClass="active"
                      to="about"
                      spy={true}
                      smooth={true}
                      offset={50}
                      duration={500}
                    >
                      <BsFillPersonLinesFill style={{ fontSize: "2rem" }} />{" "}
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      activeClass="active"
                      to="resume"
                      spy={true}
                      smooth={true}
                      offset={50}
                      duration={500}
                    >
                      <MdOutlineBusinessCenter style={{ fontSize: "2rem" }} />{" "}
                      Resume
                    </Link>
                  </li>
                  <li>
                    <Link
                      activeClass="active"
                      to="services"
                      spy={true}
                      smooth={true}
                      offset={50}
                      duration={500}
                    >
                      <VscVmConnect style={{ fontSize: "2rem" }} /> Services
                    </Link>
                  </li>
                  <li>
                    <Link
                      activeClass="active"
                      to="skills"
                      spy={true}
                      smooth={true}
                      offset={50}
                      duration={500}
                    >
                      <BsCodeSlash style={{ fontSize: "2rem" }} /> Skills
                    </Link>
                  </li>
                  <li>
                    <Link
                      activeClass="active"
                      to="portfolio"
                      spy={true}
                      smooth={true}
                      offset={50}
                      duration={500}
                    >
                      <AiOutlineDatabase style={{ fontSize: "2rem" }} />{" "}
                      Portfolio
                    </Link>
                  </li>
                  {/* <li>
                  <Link
                    activeClass="active"
                    to="pricing"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                  >
                    <MdOutlineAttachMoney style={{ fontSize: "2rem" }} /> Price
                  </Link>
                </li> */}
                  <li>
                    <Link
                      activeClass="active"
                      to="contact"
                      spy={true}
                      smooth={true}
                      offset={50}
                      duration={500}
                    >
                      <AiOutlineMail style={{ fontSize: "2rem" }} /> Contact
                    </Link>
                  </li>
                </ul>
              </ul>
            </div>
          </div>
          {/* pc */}
          <div className="hidden md:block mx-20">
            <ul className="menu menu-horizontal px-1">
              <ul className="menu bg-slate-950 rounded-box">
                <li data-tooltip-id="home">
                  <Link
                    activeClass="active"
                    to="home"
                    spy={true}
                    smooth="easeInOutQuart"
                    offset={50}
                    duration={2000}
                    className="hover:text-green-500"
                  >
                    <AiOutlineHome style={{ fontSize: "2rem" }} />
                  </Link>
                </li>
                <li data-tooltip-id="about">
                  <Link
                    activeClass="active"
                    to="about"
                    spy={true}
                    smooth="easeInOutQuart"
                    offset={50}
                    duration={2000}
                    className="hover:text-green-500"
                  >
                    <BsFillPersonLinesFill style={{ fontSize: "2rem" }} />
                  </Link>
                </li>
                <li data-tooltip-id="resume">
                  <Link
                    activeClass="active"
                    to="resume"
                    spy={true}
                    smooth="easeInOutQuart"
                    offset={50}
                    duration={2000}
                    className="hover:text-green-500"
                  >
                    <MdOutlineBusinessCenter style={{ fontSize: "2rem" }} />
                  </Link>
                </li>
                <li data-tooltip-id="services">
                  <Link
                    activeClass="active"
                    to="services"
                    spy={true}
                    smooth="easeInOutQuart"
                    offset={50}
                    duration={2000}
                    className="hover:text-green-500"
                  >
                    <VscVmConnect style={{ fontSize: "2rem" }} />
                  </Link>
                </li>
                <li data-tooltip-id="skills">
                  <Link
                    activeClass="active"
                    to="skills"
                    spy={true}
                    smooth="easeInOutQuart"
                    offset={50}
                    duration={2000}
                    className="hover:text-green-500"
                  >
                    <BsCodeSlash style={{ fontSize: "2rem" }} />
                  </Link>
                </li>
                <li data-tooltip-id="portfolio">
                  <Link
                    activeClass="active"
                    to="portfolio"
                    spy={true}
                    smooth="easeInOutQuart"
                    offset={50}
                    duration={2000}
                    className="hover:text-green-500"
                  >
                    <AiOutlineDatabase style={{ fontSize: "2rem" }} />
                  </Link>
                </li>
                {/* <li data-tooltip-id="price">
                <Link
                  activeClass="active"
                  to="pricing"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="hover:text-green-500" 
                >
                  <MdOutlineAttachMoney style={{ fontSize: "2rem" }} />
                </Link>
              </li> */}
                <li data-tooltip-id="contact">
                  <Link
                    activeClass="active"
                    to="contact"
                    spy={true}
                    smooth="easeInOutQuart"
                    offset={50}
                    duration={2000}
                    className="hover:text-green-500"
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
        <ReactTooltip
          id="resume"
          place="left"
          variant="info"
          content="Resume"
        />
        <ReactTooltip
          id="services"
          place="left"
          variant="info"
          content="Services"
        />
        <ReactTooltip
          id="skills"
          place="left"
          variant="info"
          content="Skills"
        />
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
    </div>
  );
};

export default Sidebar;
