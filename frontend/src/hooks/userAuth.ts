const DASHBOARD_API = import.meta.env.VITE_DASHBOARD_API
import axios from "axios"
import { useEffect, useState } from "react";

const useAuth = () => {
    const [authenticated, setAuthenticated] = useState<Boolean | null>(null);

    useEffect(() => {
        axios({
            method: 'get',
            url: DASHBOARD_API,
            withCredentials: true,
        })
        .then((res) => setAuthenticated(res.data.authenticated))
        .catch(() => setAuthenticated(false));
    }, []);

    return {authenticated};

}

export default useAuth;