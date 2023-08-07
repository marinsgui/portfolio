import Image from "next/image";

import contactImg from "../assets/contact-img.svg";

import { Send } from "lucide-react";

export default function Contact() {
  return (
    <div
      name="Contato"
      className="w-full h-screen bg-sky-950 p-4 text-white pt-24"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8 pl-4 md:pl-0">
          <p className="text-6xl font-bold">
            Contact <span className="text-teal-500">me!</span>
          </p>
        </div>

        <div className="flex justify-center items-center gap-20">
          <Image src={contactImg} alt="" />
          <form
            action="https://getform.io/f/60bca86c-bee6-4f76-ac38-6a48cef5f819"
            method="POST"
            className="flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="p-2 bg-gray-800 rounded-md text-white focus:outline-none"
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              className="my-4 p-2 bg-gray-800 rounded-md text-white focus:outline-none"
            />

            <textarea
              name="message"
              rows="10"
              placeholder="Write your message"
              className="p-2 bg-gray-800 rounded-md text-white focus:outline-none"
            ></textarea>

            <button className="text-white bg-teal-500 px-6 py-3 my-8 mx-auto flex items-center gap-2 rounded-full hover:scale-105 duration-300">
              Send Message <Send size={20} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
