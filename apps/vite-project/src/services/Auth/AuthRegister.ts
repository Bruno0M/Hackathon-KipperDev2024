import axios from "axios";
import baseUrl from "../config";
import IAuth from "../../interfaces/services/IAuth";

const authRegister = async (loginFormData: IAuth) => {
    await axios({
        url: `${baseUrl}/Auth/Register`,
        method: "post",
        data: loginFormData
    })
}
export default authRegister




