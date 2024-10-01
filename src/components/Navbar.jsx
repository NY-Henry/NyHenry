import { BsFillMoonStarsFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const Navbar = ({ handleDarkMode }) => {
  return (
    <nav className="py-10 bg-teal-50 dark:bg-gradient-to-r from-gray-900 to-cyan-700 shadow-xl  shadow-cyan-100 dark:shadow-cyan-300 rounded-lg bg-opacity-35 mb-12 flex justify-between">
      <h1 className="text-2xl active:scale-95 cursor-pointer ml-2 rounded-lg p-2 font-bold dark:text-white shadow-md dark:shadow-lg dark:shadow-cyan-300">
        NY Henry
      </h1>
      <ul className="flex items-center gap-2">
        <li>
          <BsFillMoonStarsFill
            onClick={handleDarkMode}
            className="text-3xl active:scale-95  cursor-pointer dark:text-white"
          />
        </li>
        <li>
          <Link
            to="/NyHenry/projects"
            className="text-2xl active:scale-95 shadow-lg bg-gradient-to-r font-semibold from-cyan-400 dark:shadow-cyan-300 to-teal-500 px-4 py-2  rounded-xl mr-2 ml-6 text-white"
          >
            Projects
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
