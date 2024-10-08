import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Home from "./pages/Home.jsx";
import Error from "./pages/Error.jsx";
import Projects from "./pages/Projects.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const route = createBrowserRouter([
  {
    path: "/",
    element: <Error />,
    errorElement: <Error />,
  },
  {
    path: "/NyHenry",
    element: <Home />,
  },

  {
    path: "/NyHenry/projects",
    element: <Projects />,
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={route} />
  </StrictMode>
);
