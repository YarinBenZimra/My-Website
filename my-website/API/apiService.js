import axios from "axios";
import { myDetails, resumeData, myProjects, projectDetails } from "./dummyData";

const API_BASE_URL = "http://localhost:5000/api/user";

export const fetchUserData = async (endpoint, dummyData) => {
  try {
    const response = await axios.get(`${API_BASE_URL}${endpoint}`, {
      timeout: 5000,
    });
    return { status: 200, data: response.data };
  } catch (error) {
    // Handle network errors or timeout
    if (error.code === "ERR_NETWORK" || error.code === "ECONNABORTED") {
      console.error("Request failed:", error.message);
      if (dummyData == "projectDetails") {
        const id = endpoint.split("/").pop();
        return { status: 500, data: projectDetails[id] };
      }
      return { status: 500, data: dummyData }; // Returning the fallback dummy data
    }

    // Handle other errors (e.g., 404, 500)
    const status = error.response?.status || 500; // Default to 500 if no status is available
    const message = error.response?.data?.message || error.message;
    console.error("Error fetching user details:", message);

    return { status, error: message }; // Provide detailed error message
  }
};
