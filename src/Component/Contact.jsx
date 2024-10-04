import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className=" w-full h-full bg-gradient-to-bl py-6 from-black to bg-gray-800 p-4 text-white"
    >
      <div className=" flex flex-col p-4 max-w-screen-lg mx-auto h-full justify-center">
        <div className=" pb-8">
          <p className=" text-4xl font-bold font-Raleway inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className=" py-6">Submit the form below to get in touch with me</p>
        </div>

        <div className=" flex justify-center items-center">
          <form
            action="https://getform.io/f/bvreodkb"
            method="POST"
            className=" flex flex-col w-full md:w-1/2"
          >
            <input
              className=" p-2 my-4 bg-transparent border-2 rounded-md text-white focus:outline-none"
              type="email"
              name="email"
              id=""
              placeholder="Enter your email"
            />

            <input
              className=" p-2 my-4 bg-transparent border-2 rounded-md text-white focus:outline-none"
              type="text"
              name="name"
              placeholder="Enter your name"
            />

            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              className=" p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              id=""
            ></textarea>

            <button className=" text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md">
              Let's Talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
