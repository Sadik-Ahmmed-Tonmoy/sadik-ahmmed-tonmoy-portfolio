
import { AiOutlineFacebook, AiOutlineLinkedin } from "react-icons/ai";
import { VscVmConnect, VscGithub } from "react-icons/vsc";
import Typewriter from "typewriter-effect";

import DP from "../../../assets/Image/DP.jpg";
import { Link } from "react-router-dom";

const NameCard = () => {
  return (
    <>
      <div className="border rounded-bl-2xl rounded-tr-2xl w-96 text-center my-20 ms-6">
        <div className="text-center">
          <h3 className="text-3xl font-bold mt-4 mb-2">Sadik Ahmmed</h3>
          <span className="font-semibold ">
            <Typewriter
              options={{
                strings: [
                  "(WEB DEVELOPER)",
                  "(FULL STACK DEVELOPER)",
                  "(MERN STACK DEVELOPER)",
                  "(REACT DEVELOPER)",
                  "(FRONT-END DEVELOPER)",
                ],
                autoStart: true,
                pauseFor: 1400,
                loop: true,
                delay: 85,
              }}
            />
          </span>
        </div>
        <img
          className="w-10/12 mx-auto rounded-bl-xl rounded-tr-2xl mt-4"
          src={DP}
          alt=""
        />
        <div className="my-6">
          <p className="font-semibold text-2xl">Sadikahmmed258@gmail.com</p>
          <p className="mb-2">Dhaka, Bangladesh</p>
          <p className="text-xs">© Sadik. All Right Reserved</p>
        </div>

        {/* socials */}
        <section className="flex justify-center mb-3">
         <Link to="https://www.linkedin.com/in/sadikahmmedtonmoy/">
         <button className="btn btn-square hover:border-red-800 mx-2">
          <AiOutlineLinkedin className="rounded hover:text-blue-600" style={{ fontSize: '3rem' }}/>
          </button>
          </Link>
         <Link to="https://github.com/Sadik-Ahmmed-Tonmoy">
         <button className="btn btn-circle hover:border-red-800 mx-2">
          <VscGithub className="rounded hover:text-white" style={{ fontSize: '2.5rem' }}/>
          </button>
          </Link>
       <Link to="https://www.facebook.com/sadikahmedtonmoy/">
       <button className="btn btn-square hover:border-red-800 mx-2">
          <AiOutlineFacebook className="rounded hover:text-blue-600" style={{ fontSize: '3rem' }}/>
          </button> 
          </Link> 
        </section>

        <button className="btn btn-outline btn-success w-11/12 rounded-3xl mb-5 hover:font-extrabold m-2"><VscVmConnect style={{fontSize: "1.5rem"}}/>HIRE ME</button>
      </div>
    </>
  );
};

export default NameCard;
