import { Slide } from "react-awesome-reveal";
import { AiOutlineMail } from "react-icons/ai";

const Contact = () => {
  return (
    <div id="contact" className="my-14 p-2">
      <Slide>
        <h5 className="border flex rounded-3xl py-2 px-5 w-min ms-2 md:ms-28 mb-5 md:mb-10">
          <AiOutlineMail style={{ fontSize: "1.44rem" }} />{" "}
          <span className="ms-2">CONTACT</span>
        </h5>
      </Slide>
      <div className="md:w-9/12 mx-auto">
        <h3
          data-aos="zoom-in"
          data-aos-duration="1500"
          className="text-3xl md:text-6xl ms-2 mb-8"
        >
          Let's Work <span className="text-green-500">Together!</span>
        </h3>
        <section>
        <Slide><p className="ms-4 text-xl font-bold">Sadikahmmed258@gmail.com</p></Slide>

          <form className="card-body">
            <div className="md:grid md:grid-cols-2 gap-10">
              <div data-aos="fade-right" className="form-control">
                <label className="label">
                  <span className="label-text text-white">FULL NAME</span>
                </label>
                <input
                  type="text"
                  placeholder="Your Full Name"
                  className="input input-bordered border-white bg-slate-950 border-t-0 border-s-0 border-e-0"
                />
              </div>
              <div data-aos="fade-left" className="form-control">
                <label className="label">
                  <span className="label-text text-white">EMAIL</span>
                </label>
                <input
                  type="text"
                  placeholder="Your Email Address"
                  className="input input-bordered border-white bg-slate-950 border-t-0 border-s-0 border-e-0"
                />
              </div>
              <div data-aos="fade-right" className="form-control">
                <label className="label">
                  <span className="label-text text-white">PHONE</span>
                </label>
                <input
                  type="number"
                  placeholder="Your Phone Number"
                  className="input input-bordered border-white bg-slate-950 border-t-0 border-s-0 border-e-0"
                />
              </div>
              <div data-aos="fade-left" className="form-control">
                <label className="label">
                  <span className="label-text text-white">YOUR BUDGET</span>
                </label>
                <input
                  type="text"
                  placeholder="Budget Range"
                  className="input input-bordered border-white border-t-0 border-s-0 border-e-0 bg-slate-950 "
                />
              </div>
              <div data-aos="fade-up" className="form-control">
                <label className="label">
                  <span className="label-text text-white">MESSAGE</span>
                </label>
                <textarea
                  className="textarea bg-slate-950  border-green-500 border-t-0 border-s-0 border-e-0"
                  placeholder="Write Your Message Here..."
                ></textarea>
              </div>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-outline w-full rounded-3xl mt-10 mb-44 text-green-500 hover:text-black hover:font-extrabold hover:bg-gradient-to-r from-cyan-400 via-green-300 to-green-900 ">
                <AiOutlineMail style={{ fontSize: "1.5rem" }} />
                SEND MESSAGE
              </button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Contact;
