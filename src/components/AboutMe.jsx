import React, { useRef } from "react";
import {
  AiFillTwitterCircle,
  AiFillYoutube,
  AiFillLinkedin,
} from "react-icons/ai";
import { BsSpotify, BsWhatsapp } from "react-icons/bs";
import { SiApplemusic } from "react-icons/si";
import { useTheme } from "../context/ThemeContext";

const AboutMe = () => {
  const youTubeRef = useRef(null);
  const { theme } = useTheme();

  function handleYouTubeRef() {
    if (youTubeRef.current) {
      youTubeRef.current.style.transition =
        "color 0.5s ease, transform 0.5s ease";
      youTubeRef.current.style.color = "#FF0000"; // YouTube Red
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
        title="NY Henry"
        className={`text-6xl dark:text-white cursor-pointer active:scale-95 md:text-6xl text-slate-900  drop-shadow-sm font-semibold text-center mb-6`}
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
        and a lot more...
      </p>
      {/* Social media Icons */}
      <div className="flex items-center text-5xl justify-center p-4 rounded gap-4">
        {/* X Logo */}
        <a
          href="https://x.com/NyHenry5"
          target="_blank"
          rel="noreferrer"
          title="Reach me on X"
          className="transition-transform duration-300 hover:scale-125"
        >
          <AiFillTwitterCircle
            className="cursor-pointer hover:brightness-125"
            style={{ color: "#1DA1F2" }}
          />
        </a>

        {/* YT Logo */}
        <a
          ref={youTubeRef}
          href="https://www.youtube.com/@nyhenry"
          title="NY Henry's YouTube Channel"
          target="_blank"
          rel="noreferrer"
          className="transition-transform duration-300 hover:scale-125"
        >
          <AiFillYoutube
            className="cursor-pointer hover:brightness-125"
            style={{ color: "#FF0000" }}
          />
        </a>
        {/* Linked In Logo */}
        <a
          href="https://www.linkedin.com/in/ny-henry-766827267/"
          target="_blank"
          rel="noreferrer"
          title="NY LinkedIn"
          className="transition-transform duration-300 hover:scale-125"
        >
          <AiFillLinkedin
            className="cursor-pointer hover:brightness-125"
            style={{ color: "#0A66C2" }}
          />
        </a>
        {/* Whatsapp Logo */}
        <a
          href="https://wa.me/+256704025224"
          target="_blank"
          rel="noreferrer"
          title="Chat with me on WhatsApp"
          className="transition-transform duration-300 hover:scale-125"
        >
          <BsWhatsapp
            className="cursor-pointer hover:brightness-125"
            style={{ color: "#25D366" }}
          />
        </a>
        {/* Spotify Logo */}
        <a
          href="https://open.spotify.com/artist/0CwTUyi6ZRkPrWpfqCtIAh?si=TMcEHmUQRf21O4U1OT6xCw"
          target="_blank"
          rel="noreferrer"
          title="Listen to my music on Spotify"
          className="transition-transform duration-300 hover:scale-125"
        >
          <BsSpotify
            className="cursor-pointer hover:brightness-125"
            style={{ color: "#1DB954" }}
          />
        </a>
        {/* Apple Music */}
        <a
          href=" https://music.apple.com/us/artist/ny-henry/1788512114"
          target="_blank"
          rel="noreferrer"
          title="Listen to my music on Spotify"
          className="transition-transform duration-300 hover:scale-125"
        >
          <SiApplemusic
            className="cursor-pointer hover:brightness-125"
            style={{ color: "#FC3C44" }}
          />
        </a>
      </div>
    </section>
  );
};

export default AboutMe;
