const REGISTER_API = import.meta.env.VITE_REGISTER_API;
const LOGIN_API = import.meta.env.VITE_LOGIN_API;
import axios, { AxiosError } from "axios"
interface props {
    fullName?: string,
    email: string,
    password: string
}

type Booking = {
    model: string,
    address: string,
    name: string,
    phone: string,
    location: string,
    carType: string
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
        const role = res.data.user.role;
        return {
            success: true,
            role: role
        };
    } catch (error) {
        console.error(error);
        return {
            success: false
        };
    }

};

export const handleInspection = async ({location, carType, model, address, name, phone}: Booking) => {
    try {
        const res = await axios({
            method: 'post',
            url: 'http://localhost:3000/inspection',
            data: {
                location: location,
                car_type: carType,
                model_year: model,
                full_address: address,
                full_name: name,
                phone_no: phone
            },
            withCredentials: true
        });
        console.log(carType);
        if(res.status === 200){
            console.log("Data Submitted");
            return {
                success: true
            }
        }else{
            console.log(res.status, res.data);
            return {
                success: false
            }
        }
    } catch (error: any) {
        if(axios.isAxiosError(error)){
            console.log("Axios error: ", error.response?.data|| error.message);
        }
        else{
            console.log("Unexpected error: ", error.message);
        }
    }
};