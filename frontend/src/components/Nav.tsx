import { useNavigate } from "react-router-dom";



export function Nav() {
    const navigate = useNavigate();
    return (
        <>
            
            <div className="bg-gray-500 h-16 flex justify-between items-center px-8">
                <a href="/" className="flex justify-center items-center gap-x-4">
                    <img className="size-16" src="/Logo1.svg" />
                    <p className="font-bold text-2xl text-white">Autohunt</p>
                </a>

                <div className="space-x-8 font-medium text-white">
                <button 
                    className="hover:underline"
                    onClick={() => navigate("/login")}
                >
                    Login
                </button>
                    <button 
                    onClick={() => navigate("/Signup")}
                    className="hover:underline">
        
                Sign-up
                    </button>
                </div>
            </div>
        </>
    );
}