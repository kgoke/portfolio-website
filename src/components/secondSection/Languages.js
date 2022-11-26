import React from "react";
import { FaCss3Alt, FaHtml5, FaRust } from "react-icons/fa";
import {
  SiCplusplus,
  SiJavascript,
  SiPython,
  SiTypescript,
} from "react-icons/si";

function Languages() {
  return (
    <div className="text-center to-pink-100">
      <h2 className="text-5xl py-2 text-teal-600 font-medium"> Languages</h2>
      <div className=" text-5xl flex justify-center gap-10 py-3 text-gray-600">
        <SiCplusplus />
        <SiPython />
        <SiJavascript />
        <FaHtml5 />
      </div>
      <div className=" text-5xl flex justify-center gap-10 py-3 text-gray-600">
        <FaCss3Alt />
        <SiTypescript />
        <FaRust />
      </div>
    </div>
  );
}

export default Languages;
