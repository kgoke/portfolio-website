import React from "react";
import headshot from "./images/avatar.png";

function Headshot() {
  return (
    <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 overflow-hidden">
      <img src={headshot} layout="fill" objectFit="cover" />
    </div>
  );
}

export default Headshot;
