const DASHBOARD_API = import.meta.env.VITE_DASHBOARD_API
import axios from "axios"
import { useEffect, useState } from "react";

const useAuth = () => {
    const [authenticated, setAuthenticated] = useState<Boolean | null>(null);
    const [role, setRole] = useState<string | null>(null);

    useEffect(() => {
        axios({
            method: 'get',
            url: DASHBOARD_API,
            withCredentials: true,
        })
        .then((res) => {
            if(res.data.authenticated){
                setAuthenticated(true);
                setRole(res.data.user.role);
            }else{
                setAuthenticated(false);
            }
        })
        .catch(() => setAuthenticated(false));
    }, []);

    return {authenticated, role};

}

export default useAuth;