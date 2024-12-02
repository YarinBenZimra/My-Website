import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainHeader from "./components/MainHeader/MainHeader";
import Footer from "./components/Footer/Footer";
import AboutMe from "./screens/AboutMe/AboutMe";
import Resume from "./screens/Resume/Resume";
import Project from "./screens/Projects/Projects";
import ProjectDetails from "./screens/ProjectDetails/ProjectDetails";
import Contact from "./screens/Contact/Contact";
import NotFound from "./screens/404NotFound/404NotFound";
function App() {
  return (
    <>
      <MainHeader />
      <Routes>
        <Route path="/" element={<AboutMe />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/projects/:id" element={<ProjectDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
