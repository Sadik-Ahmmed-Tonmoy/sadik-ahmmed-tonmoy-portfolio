import { Slide } from "react-awesome-reveal";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div id="about" className="my-4 md:my-28">
      <Slide>
      <h5 className="border flex rounded-3xl py-2 px-5 w-min ms-4 md:ms-28 mb-5 md:mb-10">
        <BsFillPersonLinesFill style={{ fontSize: "1.44rem" }} />{" "}
        <span className="ms-2">ABOUT</span>
      </h5>
      </Slide>
      <div className="md:w-9/12 mx-auto">
        <h3 data-aos="zoom-out-up" data-aos-duration="2000" className="text-3xl md:text-6xl">
          Every great design begin with an <br /> even better story
        </h3>
        <p data-aos="zoom-out-down" data-aos-duration="2000" className="mt-10 ">
          👋 Hey there! I'm Sadik Ahmmed Tonmoy, a dedicated MERN developer fueled by
          the excitement of turning ideas into functional web experiences. 🚀
          With 9 month's of experience in web development, the MERN stack has
          become my playground of choice. I revel in crafting elegant user
          interfaces with React, designing efficient backends with Node.js and
          Express, and orchestrating data storage with MongoDB. 🎯 I've had the privilege of working on a range of projects that
          have honed my skills. From creating dynamic e-commerce platforms to
          building responsive web apps, each project has taught me the
          importance of clean code and effective problem-solving. 📚 My journey
          as a developer is an ongoing adventure. I'm always eager to learn and
          evolve. When I'm not coding, you'll find me diving into tech blogs,
          experimenting with new libraries, and exploring the latest
          developments in the web world. 🌟 My coding philosophy revolves around
          precision and creativity. I believe that every line of code is an
          opportunity to balance functionality with aesthetics, creating an
          intuitive user experience. 🤝 Collaboration is key to my approach. I thrive in team environments, leveraging my skills to contribute meaningfully to projects and fostering a positive, growth-oriented atmosphere.
          📬 Let's connect! Feel free to reach out to me on 
          <Link to="https://www.linkedin.com/in/sadikahmmedtonmoy/">
            <span className="text-blue-400 ms-1">LinkedIn</span>
          </Link>{" "}
          I'm always up for a chat about coding, technology trends, or even recommendations for a good sci-fi novel!
        </p>
      </div>
    </div>
  );
};

export default About;
