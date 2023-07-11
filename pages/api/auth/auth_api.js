import axios from 'axios';
// handle method for request data
import { BASE_URL } from '@/public/config/config';
import { Password } from '@mui/icons-material';

const authApi = axios.create({

    baseURL: BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

//api service

export const doLogin = async (email, Password) => {
    const response = await authApi.post("/user/login", {
        email: email,
        Password: Password,
    });
    return response.data;

};


export const doRegister = async (username,email, Password) => {
    const response = await authApi.post("/user/register", {
        username: username,
        email: email,
        Password: Password,
    });
    return response.data;

};

