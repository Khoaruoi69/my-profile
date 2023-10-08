import React from "react";
import Typewriter from "typewriter-effect";

function Introduct() {
  return (
    <Typewriter
      options={{
        strings: [
          "Khoa Nguyen",
          "Software Engineer",
          "Full Stack Developer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Introduct;
