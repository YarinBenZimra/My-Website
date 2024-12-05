import axios from "axios";
const API_BASE_URL = "http://localhost:5000/api/user";

export const fetchData = async (endpoint) => {
  try {
    const response = await axios.get(`${API_BASE_URL}${endpoint}`, {
      timeout: 5000,
    });
    return { status: 200, data: response.data };
  } catch (error) {
    if (error.code === "ERR_NETWORK" || error.code === "ECONNABORTED") {
      console.error("Request failed:", error.message);
      return { status: 500, error: "ERR_NETWORK" };
    }
    const status = error.response?.status || 500;
    const message = error.response?.data?.message || error.message;
    console.error("Error fetching user details:", message);

    return { status, error: message };
  }
};
