import React, { useRef } from "react";
import {
  AiFillTwitterCircle,
  AiFillYoutube,
  AiFillLinkedin,
} from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";

const AboutMe = () => {
  const youTubeRef = useRef(null);
  function handleYouTubeRef() {
    if (youTubeRef.current) {
      youTubeRef.current.style.transition =
        "color 0.5s ease, transform 0.5s ease";
      youTubeRef.current.style.color = "red";
      youTubeRef.current.style.transform = "scale(1.2)";
    }
    setTimeout(() => {
      if (youTubeRef.current) {
        youTubeRef.current.style.color = "";
        youTubeRef.current.style.transform = "scale(1)";
      }
    }, 1000);
  }

  return (
    <section className="py-12 mx-auto text-center xl:max-w-[900px] px-4">
      <h2
        onClick={handleYouTubeRef}
        className="text-5xl cursor-pointer active:scale-95 md:text-6xl text-teal-500 font-semibold  text-center mb-4"
      >
        NY Henry
      </h2>
      <p className="text-2xl cursor-pointer dark:text-white text-center mb-6 ">
        Developer and Music Producer.
      </p>
      <p className="mb-12 dark:text-white text-xl leading-8">
        Freelancer providing services in{" "}
        <span
          title="My main field of expertise is web development"
          className="text-2xl cursor-pointer text-teal-500 drop-shadow-sm"
        >
          {" "}
          web development{" "}
        </span>{" "}
        ,
        <span
          title="I provide music production services check out my YT channel"
          className="text-2xl cursor-pointer text-teal-500 drop-shadow-sm"
        >
          music production
        </span>{" "}
        and{" "}
        <span
          title="I provide tutoring services to students who want to join programming"
          className="text-2xl cursor-pointer text-teal-500 drop-shadow-sm"
        >
          tutoring
        </span>
        . I use technologies like React, Tailwind CSS, Figma, Node js, Express
        js and Mongodb for web development. I use FL Studio for music production
        and alot more...
      </p>
      <div className="flex items-center text-black dark:text-white text-5xl justify-center p-4  rounded gap-6">
        <a href="https://x.com/NyHenry5" target="blank" title="Reach me on X">
          <AiFillTwitterCircle className="  cursor-pointer" />
        </a>
        <a
          href="https://wa.me/+256704025224"
          target="blank"
          title="Chat with me on WhatApp"
        >
          <BsWhatsapp className="  cursor-pointer" />
        </a>
        <a
          href="https://www.linkedin.com/in/ny-henry-766827267/"
          target="blank"
          title="NY linkedin"
        >
          <AiFillLinkedin className="  cursor-pointer" />
        </a>
        <a
          ref={youTubeRef}
          href="https://www.youtube.com/@nyhenry"
          title="NY Henry's YouTube Channel"
          target="blank"
        >
          <AiFillYoutube className="  cursor-pointer" />
        </a>
      </div>
    </section>
  );
};

export default AboutMe;
