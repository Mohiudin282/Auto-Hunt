const REGISTER_API = import.meta.env.VITE_REGISTER_API;
const LOGIN_API = import.meta.env.VITE_LOGIN_API;
import axios, { AxiosError } from "axios"
interface props {
    fullName?: string,
    email: string,
    password: string
}


export const handleSignup = async ({ fullName, email, password }: props) => {
    const full_name = fullName;
    try {
        const res = await axios({
            method: 'post',
            url: REGISTER_API,
            data: {
                full_name,
                email,
                password
            }
        })
        console.log(res.data);
        return {
            success: true,
            data: res.data
        }
    } catch (err) {
        const error = err as AxiosError;
        if (error.response) {
            console.error('server error', {
                status: error.response.status,
                message: error.response.data
            });
        }
        return {
            success: false,
            message: "Something went wrong"
        }
    }
}

export const handleLogin = async ({ email, password }: props) => {
    try {
        const res = await axios({
            method: 'post',
            url: LOGIN_API,
            data: {
                email,
                password
            },
            withCredentials: true
        });
        console.log(res);
        return {
            success: true
        }
    } catch (error) {
        console.error(error);
        return {
            success: false
        }
    }

}