import React from "react";
import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainHeader from "./components/MainHeader/MainHeader";
import Footer from "./components/Footer/Footer";
import AboutMe from "./screens/AboutMe/AboutMe";
import Resume from "./screens/Resume/Resume";
import Project from "./screens/Projects/Projects";
import ProjectDetails from "./screens/ProjectDetails/ProjectDetails";
import Contact from "./screens/Contact/Contact";
import NotFound from "./screens/404NotFound/404NotFound";
import { useAppContext } from "./Context/AppContext";
import styles from "./App.module.css";
import InternalServerError from "./screens/500InternalServerError/500InternalServerError";
import Loading from "./screens/Loading/Loading";
function App() {
  const { website, websiteError, isNetworkError } = useAppContext();
  if (isNetworkError) return <InternalServerError />;
  useEffect(() => {
    if (website) {
      document.documentElement.style.setProperty(
        "--main-color",
        website.mainColor
      );
      document.documentElement.style.setProperty(
        "--secondary-color",
        website.secondaryColor
      );
    }
  }, [website]);
  if (!website && !websiteError) return <Loading />;
  return (
    website &&
    !websiteError && (
      <div className={styles.appContainer}>
        <MainHeader logo={website.logo} />
        <div className={styles.content}>
          <Routes>
            <Route path="/" element={<AboutMe />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/projects" element={<Project />} />
            <Route path="/projects/:name" element={<ProjectDetails />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer className={styles.footer} />
      </div>
    )
  );
}

export default App;
