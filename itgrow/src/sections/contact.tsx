import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebook,
  FaLinkedinIn,
} from "react-icons/fa";
import { BsSend } from "react-icons/bs";

const Contact: React.FC = () => {
  return (
    <section
      id="contact"
      className="w-full max-w-5xl mx-auto p-6 sm:p-8 flex flex-col md:flex-row justify-between items-center jost-font gap-8"
    >
      <div className="flex flex-col w-full md:w-1/2 gap-4">
        <h2 className="text-4xl text-white font-bold">Say Hello</h2>
        <p className="text-gray-300 text-sm md:text-base">
          Let’s Connect and Create Something Amazing
        </p>
        <form className="flex flex-col gap-4">
          <div className="flex w-full gap-x-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-violet-500"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-violet-500"
            />
          </div>

          <input
            type="text"
            placeholder="Subject"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-violet-500"
          />
          <textarea
            placeholder="Message"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-violet-500 h-32"
          ></textarea>
          <div className="flex w-full flex-row justify-center items-center p-3">
            <button
              type="submit"
              className="w-32 flex justify-center items-center gap-3 bg-violet-500 text-white p-3 rounded-lg hover:bg-violet-600 transition-all"
            >
              <span> Send Now</span>
              <BsSend />
            </button>
          </div>
        </form>
      </div>

      <div className="flex flex-1 flex-col w-full md:w-1/2 gap-6">
        <div className="flex items-center gap-4">
          <FaMapMarkerAlt className="text-violet-500 text-2xl" />
          <div>
            <h3 className="text-lg text-white font-semibold">My Location</h3>
            <p className="text-gray-500 text-sm md:text-base">
              123 Street Name, City, Country
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <FaPhoneAlt className="text-violet-500 text-2xl" />
          <div>
            <h3 className="text-lg  text-white font-semibold">
              Give Me a Call
            </h3>
            <p className="text-gray-500 text-sm md:text-base">+123 456 7890</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <FaEnvelope className="text-violet-500 text-2xl" />
          <div>
            <h3 className="text-lg text-white font-semibold">Email Me</h3>
            <p className="text-gray-500 text-sm md:text-base">
              example@email.com
            </p>
          </div>
        </div>
        <div className="flex justify-start items-center gap-3">
          <p className="text-white ">Follow me on</p>
          <div className=" pl-5 border-t border-gray-500 flex w-20"></div>
          <div className="flex space-x-4">
            <div className="border p-2 rounded-xl bg-gray-300 border-gray-300">
              <AiFillInstagram className="text-xl cursor-pointer" />
            </div>
            <div className="border p-2 rounded-xl  bg-gray-300 border-gray-300">
              <FaFacebook className="text-xl cursor-pointer" />
            </div>
            <div className="border p-2 rounded-xl  bg-gray-300 border-gray-300">
              <FaLinkedinIn className="text-xl cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
