import { Navigate } from "react-router-dom";
import useAuth from "../hooks/userAuth"
import { JSX } from "react";

type Prop = {
    children: JSX.Element;
    allowedRoles?: string[];
};

const ProtectedRoute = ({children, allowedRoles}: Prop) =>{
    const {authenticated, role} = useAuth();
    if(authenticated === null){
        return <div className="flex justify-center items-center">Loading...</div>
    }
    if(authenticated === false){
        return <Navigate to={"/login"} />
    }
    if(allowedRoles && !allowedRoles.includes(role || "")){
        return <Navigate to ={"/unauthorized"}/>
    }

    return children;
}

export default ProtectedRoute