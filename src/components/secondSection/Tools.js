import React from "react";
import {
  FaGitAlt,
  FaGithub,
  FaDocker,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import { SiVim, SiSocketdotio } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
function Tools() {
  return (
    <div className="text-center to-pink-100">
      <h2 className="text-5xl py-2 text-teal-600 font-medium"> Tools</h2>
      <div className="flex justify-center gap-14 p-10 text-7xl text-gray-600">
        <FaGitAlt />
        <FaGithub />
        <FaDocker />
        <SiVim />
      </div>
      <div className="flex justify-center gap-14 p-10 text-7xl text-gray-600 ">
        <FaNodeJs />
        <FaReact />
        <SiSocketdotio />
        <TbBrandNextjs />
      </div>
    </div>
  );
}

export default Tools;
