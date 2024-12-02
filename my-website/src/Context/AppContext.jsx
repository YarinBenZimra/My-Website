import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";
import { fetchUserData } from "../../API/apiService";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [resume, setResume] = useState(null);
  const [projects, setProjects] = useState(null);
  const [projectsDetails, setProjectsDetails] = useState({});
  const [userError, setUserError] = useState(false);
  const [resumeError, setResumeError] = useState(false);
  const [projectsError, setProjectsError] = useState(false);
  const [projectsDetailsError, setProjectsDetailsError] = useState({});

  useEffect(() => {
    fetchUserDetails();
  }, []);

  const fetchUserDetails = useCallback(async () => {
    if (user) return user;
    try {
      const response = await fetchUserData("/details", "myDetails");
      if (response.error) {
        setUserError(true);
        return response.error;
      } else {
        setUser(response.data);
        setUserError(false);
        return response.data;
      }
    } catch (e) {
      console.error("Failed to fetch user data:", e);
      setUserError(true);
      return e.error;
    }
  }, [user]);

  const fetchResume = useCallback(async () => {
    console.log("Fetching resume, resume: ", resume);
    if (!resume) {
      try {
        const response = await fetchUserData("/resume", "resumeData");
        console.log("response:", response);
        if (response.error) {
          setResumeError(true);
        } else {
          setResume(response.data);
          setResumeError(false);
        }
      } catch (e) {
        console.error("Failed to fetch resume data:", e);
        setResumeError(true);
      }
    }
  }, [resume]);

  const fetchProjects = useCallback(async () => {
    if (!projects) {
      try {
        const response = await fetchUserData("/projects", "myProjects");
        if (response.error) {
          setProjectsError(true);
        } else {
          setProjects(response.data);
          setProjectsError(false);
        }
      } catch (e) {
        console.error("Failed to fetch projects data:", e);
        setProjectsError(true);
      }
    }
  }, [projects]);

  const fetchProject = useCallback(
    async (name) => {
      if (!projectsDetails || !projectsDetails[name]) {
        try {
          const response = await fetchUserData(
            `/projectDetails/${name}`,
            "projectDetails"
          );
          if (response.error) {
            setProjectsDetailsError((prev) => ({
              ...prev,
              [name]: true,
            }));
          } else {
            setProjectsDetails((prev) => ({
              ...prev,
              [name]: response.data,
            }));
          }
        } catch (e) {
          console.error(`Failed to fetch data for ${name}:`, e);
          setProjectsDetailsError((prev) => ({
            ...prev,
            [name]: true,
          }));
        }
      }
    },
    [projectsDetails]
  );

  return (
    <AppContext.Provider
      value={{
        user,
        resume,
        projects,
        projectsDetails,
        userError,
        resumeError,
        projectsError,
        projectsDetailsError,
        fetchResume,
        fetchProjects,
        fetchProject,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
