import { Navigate } from "react-router-dom";
import useAuth from "../hooks/userAuth"
import { JSX } from "react";
import { NotFound } from "../pages/NotFound";

type Prop = {
    children: JSX.Element;
    allowedRoles?: string[];
};

const ProtectedRoute = ({children, allowedRoles}: Prop) =>{
    const {authenticated, role} = useAuth();
    if(authenticated === null){
        return <div className="flex justify-center items-center h-screen">Loading...</div>
    }
    if(authenticated === false){
        return <Navigate to={"/login"} />
    }
    if(allowedRoles && !allowedRoles.includes(role || "")){
        return <NotFound/>
    }

    return children;
}

export default ProtectedRoute