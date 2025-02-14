import React from "react";
import javasciptLogo from "../assets/javascript.png";
import typescriptLog from "../assets/typescript.png";

const Languages = () => {
  return (
    <div className="flex mt-10  items-center justify-center md:max-w-[1000px]  mx-auto">
      <div className=" dark:shadow-md  dark:text-white flex flex-col  border-gray-300 rounded-lg overflow-hidden shadow-xl transition-transform duration-200 hover:scale-105 md:flex-row">
        <img
          src={javasciptLogo}
          alt={"JavaScript "}
          width={10}
          height={10}
          title="JavaScript"
          className=" w-full  md:w-1/3 cursor-pointer"
        />

        <img
          src={typescriptLog}
          alt={"TypeScript "}
          width={10}
          height={10}
          title="TypeScript"
          className=" w-full  md:w-1/3 cursor-pointer"
        />
        <div className=" md:flex md:flex-col md:gap-6 p-4 md:w-1/2">
          <h2 className=" md:text-6xl text-center text-2xl m-0">
            JavaScript & TypeScript
          </h2>
          <p className=" text-center text-lg md:text-2xl text-gray-700 leading-6 dark:text-white">
            It is an essential part in my web technology stack, alongside HTML
            and CSS. I choose to work in JavaScript frameworks like React and
            Next.js to speed up the development process. I also use Node.js and
            express for server-side which are also part of javascript . I look
            forward to learning more languages and frameworks to expand my
            skillset depending on the demand ofcourse.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Languages;
