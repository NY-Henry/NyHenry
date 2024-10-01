import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Projects = () => {
  const navigate = useNavigate();
  const projects = [
    {
      name: "Online Book Store",
      description:
        "I used the popular MERN stack (React js on the frontend , Express and Node js on the backend and the Mongodb (to store the data)).",
    },
    {
      name: "Expense tracker",
      description:
        "I used still React js then json-sever (Mock-Backend).It is a pretty simple expense tracker and straight forward.",
    },
    {
      name: "A Blog Webapp",
      description: "I used React, Express, Node and mongodb",
    },
    {
      name: "** I am working on so many other projects so I'll be updating this list regularly",
      description: `As you can see, most of my projects are built with React, for some reason I feel like React js is the best web frame work that gives you alot of flexiblity and does tie you up when it comes to scaling applications.
        
        `,
    },
  ];

  const goToHome = () => {
    navigate("/");
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl cursor-pointer text-center text-teal-500 font-bold mb-4">
        Projects Page Will Be Ready Soon !
      </h1>
      <p className="mb-8 text-xl font-bold  text-center">
        Meanwhile, here are some of the projects I've worked on:
      </p>
      <ul className="space-y-4">
        {projects.map((project, index) => (
          <li
            key={index}
            className="p-4 active:scale-95 cursor-pointer border rounded shadow"
          >
            <h2 className="text-2xl text-teal-500 font-semibold">
              {project.name}
            </h2>
            <p>{project.description}</p>
          </li>
        ))}
      </ul>
      <p className="mt-4 text-lg">
        That doesn't mean I only work with javascript (React). I am expanding my
        knowledge and learning new technologies as well.
      </p>
      <div className="flex justify-between items-center">
        <button
          onClick={goToHome}
          className="mt-8 px-4 py-2 bg-teal-500 text-white rounded hover:bg-teal-700"
        >
          Back to Home
        </button>
        <a
          href="https://github.com/NY-Henry"
          target="_blank"
          className="mt-8 cursor-pointer px-4 py-2 bg-teal-500 text-white rounded hover:bg-teal-700"
        >
          CheckOut My Github
        </a>
      </div>
    </div>
  );
};

export default Projects;
