import React from "react";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";

const AboutMe = () => {
  const handleYouTubeRef = () => {
    window.open("https://www.youtube.com/channel/YOUR_CHANNEL_ID", "_blank");
  };

  return (
    <section className="py-12 mx-auto text-center xl:max-w-[900px] px-4">
      <h2
        onClick={handleYouTubeRef}
        title="NY Henry"
        className="text-6xl dark:text-white cursor-pointer active:scale-95 md:text-6xl text-slate-900 drop-shadow-sm font-semibold text-center mb-6"
      >
        NY Henry
      </h2>
      <p className="text-2xl cursor-pointer dark:text-white text-center mb-6">
        Software Engineer and Music Producer.
      </p>
      <p className="mb-12 dark:text-white text-xl leading-8">
        Freelancer providing services in{" "}
        <span
          title="My main field of expertise is web development"
          className="text-2xl cursor-pointer text-teal-500 drop-shadow-sm"
        >
          web development
        </span>
        ,{" "}
        <span
          title="I provide music production services, check out my YT channel"
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
        . I use technologies like React, Tailwind CSS, Figma, Node.js,
        Express.js, and MongoDB for web development. I use FL Studio for music
        production and much more...
      </p>

      {/* Social Media Icons */}
      <div className="flex items-center text-5xl justify-center p-4 rounded gap-4">
        {/* GitHub */}
        <a
          href="https://github.com/NY-Henry"
          target="_blank"
          rel="noreferrer"
          title="Check out my GitHub"
          className="transition-transform duration-300 hover:scale-125"
        >
          <AiFillGithub className="cursor-pointer text-black dark:text-white hover:brightness-125" />
        </a>

        {/* X (Twitter) */}
        <a
          href="https://x.com/NyHenry5"
          target="_blank"
          rel="noreferrer"
          title="Reach me on X"
          className="transition-transform duration-300 hover:scale-125"
        >
          <AiFillTwitterCircle className="cursor-pointer text-black dark:text-white hover:brightness-125" />
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/ny-henry-766827267/"
          target="_blank"
          rel="noreferrer"
          title="NY LinkedIn"
          className="transition-transform duration-300 hover:scale-125"
        >
          <AiFillLinkedin className="cursor-pointer text-black dark:text-white hover:brightness-125" />
        </a>
      </div>
    </section>
  );
};

export default AboutMe;
