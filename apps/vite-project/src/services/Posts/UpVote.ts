import axios from "axios"
import baseUrl from "../config"

const token = localStorage.getItem('token');

const upVote = async (postId: string) => {
  try {
    const response = await axios.post(`${baseUrl}api/Posts/${postId}/upVote`, null, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}

export default upVote;