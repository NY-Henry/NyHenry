import React from "react";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl text-center text-teal-500 font-bold mb-4">
        NY Henry says Page Not Found
      </h1>
      <p className="text-xl text-center">
        The page you are looking for does not exist 😄.
      </p>
      <div className="text-center mt-4">
        <button
          onClick={() => navigate("/")}
          className="bg-teal-500 text-white px-4 py-2 rounded"
        >
          Go to Home
        </button>
      </div>
    </div>
  );
};

export default Error;
