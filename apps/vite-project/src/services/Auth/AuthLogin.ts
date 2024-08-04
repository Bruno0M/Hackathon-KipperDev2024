import axios from "axios";
import baseUrl from "../config";

const authLogin = async (loginFormData: FormData) => {
  try {
    const response = await axios.post(`${baseUrl}api/Auth/Login`, loginFormData, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const { token } = response.data.data;
    
    if (token) {
      const tokenPayload = JSON.parse(atob(token.split('.')[1]));
      const expiration = tokenPayload.exp;

      localStorage.setItem('token', token);
      localStorage.setItem('tokenExpiration', expiration.toString());
    }

    return response.data;
  } catch (error) {
    throw error;
  }
}

export default authLogin;
