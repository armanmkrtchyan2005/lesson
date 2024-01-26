import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Who from "./components2/who/Who";
import Nav from "./components/home/nav/Nav";
import Doing from "./components3/doing/Doing";
import Projects from "./components4/Projects";
// import Nav1 from "./components2/nav1/Nav1";

function App() {
  return (
    <>
      <div>
        <Nav />
        {/* <Nav1 /> */}
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/who" element={<Who />} />
        <Route path="/doing" element={<Doing />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </>
  );
}

export default App;
