import React from "react";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="bg-blue-600 text-white py-8">
      <Navbar />
      <h1 className="text-4xl font-bold text-center">
        Welcome to My Portfolio
      </h1>
      <p className="text-center mt-2">Discover my projects and skills</p>
    </header>
  );
};

export default Header;
