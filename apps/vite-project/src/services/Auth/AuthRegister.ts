import axios from "axios";
import baseUrl from "../config";

const authRegister = async (loginFormData: FormData) => {
    await axios({
        url: `${baseUrl}api/Auth/Register`,
        method: "post",
        data: loginFormData
    })
}
export default authRegister




