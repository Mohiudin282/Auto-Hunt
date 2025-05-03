import { Navigate } from "react-router-dom";
import useAuth from "../hooks/userAuth"
import { JSX } from "react";

const ProtectedRoute = ({children}: {children: JSX.Element}) =>{
    const {authenticated} = useAuth();
    if(authenticated === null){
        return <div className="flex justify-center align-center">Loading...</div>
    }
    if(authenticated === false){
        return <Navigate to={"/login"} />
    }

    return children;
}

export default ProtectedRoute