import Swal from "sweetatert2";
import { login } from "@mui/icons-material";
import { doLogin, doRegister } from './auth_api';

export const loginUser =
    (emil, Password,) => async (dispatch) => {
        try {
            const user = await doLogin(emil, Password);
            console.log(user);
            Swal.fire("Login !", user.message, "success");
            localStorage.setItem("token", user.date.token);
            //dispatch(login(user));
            return true;
        }
        catch (error) {
            Swal.fire(error.message);
            return false;
        }
    };

export const register =
    (username, emil, Password) => async (dispatch) => {
        try {
            const user = await doLogin(username, emil, Password);
            dispatch(login(user));

            return true;
        }
        catch (error) {
            console.log(error);
            return false;
        }
    };