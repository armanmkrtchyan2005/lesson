import "./App.css";
import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./pages/Root/Root.jsx";
import Faq from "./pages/Faq/Faq.jsx";
import Team from "./pages/Team/Team.jsx";
import Conf from "./pages/Conf/Conf.jsx";
import Error from "./pages/Error/Error.jsx";
import Tech from "./pages/Tech/Tech.jsx";
import Home from "./components/home/Home.jsx";
import Who from "./components2/who/Who.jsx";
import Doing from "./components3/doing/Doing.jsx";
import Projects from "./components4/Projects.jsx";
import Main from "./pages/Main/Main.jsx";

let router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/who",
        element: <Who />,
      },
      {
        path: "/doing",
        element: <Doing />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/contacts",
        element: <Main />,
      },
      {
        path: "/faq",
        element: <Faq />,
      },
      {
        path: "/team",
        element: <Team />,
      },
      {
        path: "/conf",
        element: <Conf />,
      },
      {
        path: "/tech",
        element: <Tech />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
