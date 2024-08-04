import axios from "axios";
import baseUrl from "../config";

const authRegister = async (formData: FormData) => {
  try {
    const response = await axios.post(`${baseUrl}api/Auth/Register`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default authRegister;