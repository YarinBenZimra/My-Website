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
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchUserData("/details", "myDetails");
        if (response.error) {
          setError(true);
        } else {
          setUser(response.data);
          setError(false);
        }
      } catch (e) {
        console.error("Failed to fetch user data:", e);
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    if (!user) {
      fetchData();
    }
  }, []);

  const fetchResume = useCallback(async () => {
    console.log(resume);
    if (!resume) {
      try {
        const response = await fetchUserData("/resume", "resumeData");
        if (response.error) {
          setError(true);
        } else {
          setResume(response.data);
          setError(false);
        }
      } catch (e) {
        console.error("Failed to fetch resume data:", e);
        setError(true);
      } finally {
        setLoading(false);
      }
    }
  }, [resume]);

  const fetchProjects = useCallback(async () => {
    if (!projects) {
      try {
        const response = await fetchUserData("/projects", "myProjects");
        if (response.error) {
          setError(true);
        } else {
          setProjects(response.data);
          setError(false);
        }
      } catch (e) {
        console.error("Failed to fetch projects data:", e);
        setError(true);
      } finally {
        setLoading(false);
      }
    }
  }, [projects]);

  return (
    <AppContext.Provider
      value={{
        user,
        resume,
        projects,
        loading,
        error,
        fetchResume,
        fetchProjects,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// Custom Hook
export const useAppContext = () => useContext(AppContext);
