import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";
import { fetchData } from "../../API/apiService";
const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [website, setWebsite] = useState(null);
  const [user, setUser] = useState(null);
  const [resume, setResume] = useState(null);
  const [projects, setProjects] = useState(null);
  const [projectsDetails, setProjectsDetails] = useState({});
  const [websiteError, setWebsiteError] = useState(false);
  const [userError, setUserError] = useState(false);
  const [resumeError, setResumeError] = useState(false);
  const [projectsError, setProjectsError] = useState(false);
  const [projectsDetailsError, setProjectsDetailsError] = useState({});
  const [isNetworkError, setIsNetworkError] = useState(false);

  useEffect(() => {
    fetchWebsiteDetails();
    fetchUserDetails();
  }, []);

  const fetchWebsiteDetails = useCallback(async () => {
    if (website) return website;
    try {
      const response = await fetchData("/website");
      if (response.error) {
        if (response.error === "ERR_NETWORK") {
          setIsNetworkError(true);
        } else {
          setWebsiteError(true);
        }
        return response.error;
      } else {
        setWebsite(response.data);
        setWebsiteError(false);
        return response.data;
      }
    } catch (e) {
      setWebsiteError(true);
      return e.error;
    }
  }, [website]);

  const fetchUserDetails = useCallback(async () => {
    if (user) return user;
    try {
      const response = await fetchData("/details");
      if (response.error) {
        if (response.error === "ERR_NETWORK") {
          setIsNetworkError(true);
        } else {
          setUserError(true);
        }
        return response.error;
      } else {
        setUser(response.data);
        setUserError(false);
        return response.data;
      }
    } catch (e) {
      setUserError(true);
      return e.error;
    }
  }, [user]);

  const fetchResume = useCallback(async () => {
    if (!resume) {
      try {
        const response = await fetchData("/resume");
        if (response.error) {
          if (response.error === "ERR_NETWORK") {
            setIsNetworkError(true);
          } else {
            setResumeError(true);
          }
          return response.error;
        } else {
          setResume(response.data);
          setResumeError(false);
        }
      } catch (e) {
        setResumeError(true);
      }
    }
  }, [resume]);

  const fetchProjects = useCallback(async () => {
    if (!projects) {
      try {
        const response = await fetchData("/projects");
        if (response.error) {
          if (response.error === "ERR_NETWORK") {
            setIsNetworkError(true);
          } else {
            setProjectsError(true);
          }
          return response.error;
        } else {
          setProjects(response.data);
          setProjectsError(false);
        }
      } catch (e) {
        setProjectsError(true);
      }
    }
  }, [projects]);

  const fetchProject = useCallback(
    async (name) => {
      if (!projectsDetails || !projectsDetails[name]) {
        try {
          const response = await fetchData(`/projectDetails/${name}`);
          if (response.error) {
            if (response.error === "ERR_NETWORK") {
              setIsNetworkError(true);
            } else {
              setProjectsDetailsError((prev) => ({
                ...prev,
                [name]: true,
              }));
            }
            return response.error;
          } else {
            setProjectsDetails((prev) => ({
              ...prev,
              [name]: response.data,
            }));
          }
        } catch (e) {
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
        website,
        user,
        resume,
        projects,
        projectsDetails,
        websiteError,
        userError,
        resumeError,
        projectsError,
        projectsDetailsError,
        isNetworkError,
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
