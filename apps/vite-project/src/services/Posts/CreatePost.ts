import axios from "axios"
import baseUrl from "../config"

const token = localStorage.getItem('token');

const createPost = async (formData: FormData) => {
  try {
    const response = await axios.post(`${baseUrl}api/Posts`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': `Bearer ${token}`
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}

export default createPost;