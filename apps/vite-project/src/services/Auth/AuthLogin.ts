import axios from "axios";
import baseUrl from "../config";

const authLogin = async (loginFormData: FormData) => {
    await axios({
        url: `${baseUrl}api/Auth/Login`,
        method: "post",
        data: loginFormData
    })
}
export default authLogin




