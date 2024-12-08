import axios from "axios";
const API_BASE_URL = `${import.meta.env.VITE_API_URL}/api/user`;

export const fetchData = async (endpoint) => {
  try {
    const response = await axios.get(`${API_BASE_URL}${endpoint}`, {
      timeout: 5000,
    });
    return { status: 200, data: response.data };
  } catch (error) {
    if (error.code === "ERR_NETWORK" || error.code === "ECONNABORTED") {
      return { status: 500, error: "ERR_NETWORK" };
    }
    const status = error.response?.status || 500;
    const message = error.response?.data?.message || error.message;
    return { status, error: message };
  }
};

export const sendEmail = async (sendEmailURL, formData) => {
  try {
    const response = await axios.post(
      sendEmailURL,
      {
        first_name: formData.firstName,
        last_name: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
      },
      { timeout: 5000 }
    );
    return { status: 200, data: response.data };
  } catch (error) {
    if (error.code === "ERR_NETWORK" || error.code === "ECONNABORTED") {
      return { status: 500, error: "ERR_NETWORK" };
    }
    return {
      status: error.response?.status || 500,
      error: error.response?.data || "Error sending email",
    };
  }
};
