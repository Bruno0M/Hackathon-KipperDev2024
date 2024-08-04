import axios from "axios"
import baseUrl from "../config"

const token = localStorage.getItem('token');

const getPosts = async () => {
  try {
    const response = await axios.get(`${baseUrl}api/Posts`, {
      headers: {
        'Authorization': `Bearer ${token}`
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}

export default getPosts;