import React from "react";
import { FaGithub, FaLinkedin, FaYoutube, FaInstagram } from "react-icons/fa";

function Socials() {
  return (
    <div className=" text-5xl flex justify-center gap-10 py-3 text-gray-600">
      <a href="https://github.com/kgoke">
        <FaGithub className="hover:bg-teal-300 focus" />
      </a>
      <a href="https://www.linkedin.com/in/keegan-goecke-97638821b/">
        <FaLinkedin className="hover:bg-teal-300 focus" />
      </a>
      <a href="https://youtube.com/@kgoke">
        <FaYoutube className="hover:bg-teal-300 focus" />
      </a>
      <a href="https://instagram.com/keegangoecke">
        <FaInstagram className="hover:bg-teal-300 focus" />
      </a>
    </div>
  );
}

export default Socials;
