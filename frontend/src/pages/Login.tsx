import { useState } from "react";
import { handleLogin } from "../utils/api";
import { useNavigate } from "react-router-dom";

export function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const onSubmit = async () => {
        const res = await handleLogin({ email, password });
        if (res.success) {
            if(res.role === "admin"){
                navigate("/admin");
            }else{
                navigate("/dashboard");
            }
        } else {
            alert("login failed");
        }
    }

    return (

        <div className="flex items-center justify-center min-h-screen">
            <div className="bg-white p-20 rounded-lg w-[500px] max-w-[100%] h-max">
                {/* Logo */}
                <div className="flex justify-center mb-4">
                    <img src="/logo.svg" alt="Logo" className="h-10" />
                </div>

                {/* Title */}
                <h2 className="text-2xl font-bold text-center text-gray-900">login to your account</h2>


                {/* Form */}
                <div className="mt-4">
                    <label className="block text-sm font-medium text-gray-700">Email address</label>
                    <input type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"></input>

                    <label className="block text-sm font-medium text-gray-700 mt-4">Password</label>
                    <input type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />

                    <div className="flex justify-between items-center mt-2">
                        <span></span>
                        <a href="#" className="text-blue-600 hover:underline">Forgot password?</a>
                    </div>

                    <button
                        onClick={() => onSubmit()}
                        className="w-1/3 mt-4 bg-white-600 border text-black min-w-full py-2 rounded-4xl hover:bg-gray-200 transition">
                        Log In
                    </button>
                </div>

                {/* Footer */}
                <p className="text-center text-sm text-gray-600 mt-4">
                    or continue with
                </p>
                <div className="flex items-center justify-between">
                    <button
                        onClick={() => window.location.href = 'http://localhost:3000/auth/google'}
                        className="realtive flex items-center justify-center gap-2 w-1/3 mt-4 bg-white-600 border text-black min-w-full py-2 rounded-4xl hover:bg-gray-200 transition">
                        <img src="/logos/Google.png" alt="Google Logo" className="h-6 w-6 justify-start" />
                        <span>Continue with Google</span>
                    </button>
                </div>
            </div>
        </div>



    );
}