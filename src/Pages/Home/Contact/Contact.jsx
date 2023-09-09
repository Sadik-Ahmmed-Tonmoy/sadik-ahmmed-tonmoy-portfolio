import { Slide } from "react-awesome-reveal";
import { AiOutlineMail } from "react-icons/ai";
import emailjs from '@emailjs/browser';
import { useRef, useState } from "react";
import Swal from "sweetalert2";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_4usagwu', 'template_4umhevi', form.current, 'pNvdMDn6XbbkWiHBM')
      .then((result) => {
        if(result.text){
       
          Swal.fire({
            title: `Thank you for your message. I'm glad you reached out to me. If you have any urgent matters, please don't hesitate to contact me on WhatsApp at +8801679170892`,
            width: 600,
            padding: '5px',
            color: '#716add',
       
            backdrop: `
              rgba(0,0,123,0.4)
              left top
              no-repeat
            `
          })
          form.current.reset();
        }
         
      }, (error) => {
          console.log(error.text);
      });
  };
  
  return (
    <div id="contact" className="mt-12 mb-4 md:my-10 p-2">
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
        <Slide><p className="ms-4 text-xl font-bold">sadikahmmed258@gmail.com</p></Slide>

          <form ref={form} onSubmit={sendEmail} className="card-body">
            <div className="md:grid md:grid-cols-2 gap-10">
              <div data-aos="fade-right" data-aos-duration="1000" className="form-control">
                <label className="label">
                  <span className="label-text text-white">FULL NAME</span>
                </label>
                <input
                required
                  type="text"
                  name="from_name"
                  placeholder="Your Full Name"
                  className="input input-bordered border-white bg-slate-950 border-t-0 border-s-0 border-e-0"
                />
              </div>
              <div data-aos="fade-left" data-aos-duration="1000" className="form-control">
                <label className="label">
                  <span className="label-text text-white">EMAIL</span>
                </label>
                <input
                required
                  type="email"
                  name="email"
                  placeholder="Your Email Address"
                  className="input input-bordered border-white bg-slate-950 border-t-0 border-s-0 border-e-0"
                />
              </div>
              <div data-aos="fade-right" data-aos-duration="2000" className="form-control">
                <label className="label">
                  <span className="label-text text-white">PHONE</span>
                </label>
                <input
                required
                  type="number"
                  name="phone"
                  placeholder="Your Phone Number"
                  className="input input-bordered border-white bg-slate-950 border-t-0 border-s-0 border-e-0"
                />
              </div>
              <div data-aos="fade-left" data-aos-duration="2000" className="form-control">
                <label className="label">
                  <span className="label-text text-white">YOUR BUDGET</span>
                </label>
                <input
                  type="text"
                  placeholder="Not mandatory"
                  name="budget"
                  className="input input-bordered border-white border-t-0 border-s-0 border-e-0 bg-slate-950 "
                />
              </div>
              <div data-aos="fade-up" data-aos-duration="3000" className="form-control">
                <label className="label">
                  <span className="label-text text-white">MESSAGE</span>
                </label>
                <textarea
                required
                name="message"
                  className="textarea bg-slate-950  border-green-500 border-t-0 border-s-0 border-e-0"
                  placeholder="Write Your Message Here..."
                ></textarea>
              </div>
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-outline w-full rounded-3xl mt-10 md:mb-44 text-green-500 hover:text-black hover:font-extrabold hover:bg-gradient-to-r from-cyan-400 via-green-300 to-green-900 ">
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
