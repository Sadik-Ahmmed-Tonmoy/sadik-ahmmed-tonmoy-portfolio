import { VscVmConnect } from "react-icons/vsc";


const Services = () => {
    return (
        <div id="services" className="my-24">
              <h5 className="border flex rounded-3xl py-2 px-5 w-min ms-4 md:ms-28 mb-5 md:mb-10">
        <VscVmConnect style={{ fontSize: "1.44rem" }} />{" "}
        <span className="ms-2">RESUME</span>
      </h5>
      <div className="md:w-9/12 mx-auto">
        <h3 className="text-3xl md:text-6xl">My <span className="text-green-500">Specializations</span></h3>

      </div>
        </div>
    );
};

export default Services;