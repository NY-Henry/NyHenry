import React, { useState } from "react";
import Navbar from "../components/Navbar";
import AboutMe from "../components/AboutMe";
import ImageComponent from "../components/ImageComponent";
import ServicesOffered from "../components/ServicesOffered";
import {
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiFillYoutube,
} from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import Languages from "../components/Languages";

const Home = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`${darkMode ? "dark" : ""} `}>
      <section
        className={`min-h-screen px-10 font-Fredoka bg-white  dark:bg-gray-900 text-gray-800`}
      >
        <Navbar handleDarkMode={() => setDarkMode((d) => !d)} />
        <AboutMe />
        <div className="w-80 h-80  mx-auto overflow-hidden m-12 rounded-full bg-gradient-to-b from-teal-500 to-cyan-200">
          <ImageComponent />
        </div>
        <ServicesOffered />

        <Languages />

        <section className="py-12 px-4">
          <p className="text-xl underline dark:text-white">
            Lastly connect with me or reach out to me on any of these 👇
          </p>
          <div className="flex items-center text-black dark:text-white text-5xl justify-center p-4  rounded gap-16">
            <a href="https://x.com/NyHenry5" target="blank">
              <AiFillTwitterCircle className="  cursor-pointer" />
            </a>
            <a href="https://wa.me/0704025224" target="blank">
              <BsWhatsapp className="  cursor-pointer" />
            </a>
            <a
              href="https://www.linkedin.com/in/ny-henry-766827267/"
              target="blank"
            >
              <AiFillLinkedin className="  cursor-pointer" />
            </a>
            <a href="https://www.youtube.com/@nyhenry" target="blank">
              <AiFillYoutube className="  cursor-pointer" />
            </a>
            <a href="mailto:nyomorehenry.com" target="blank">
              <MdEmail className=" cursor-pointer" />
            </a>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Home;
