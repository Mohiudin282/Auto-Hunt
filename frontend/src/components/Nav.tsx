import { useState } from "react";
import { Login } from "./modals/Login";

export function Nav() {
    const [showLogin, setShowLogin] = useState(false);
    return (
        <>
            {showLogin && (
               <Login onClose={() => setShowLogin(false)} />
            )}
            <div className="bg-gray-500 h-16 flex justify-between items-center px-8">
                <a href="/" className="flex justify-center items-center gap-x-4">
                    <img className="size-16" src="/Logo1.svg" />
                    <p className="font-bold text-2xl text-white">Autohunt</p>
                </a>

                <div className="space-x-8 font-medium text-white">
                    <button className="hover:underline"
                        onClick={() => setShowLogin(true)}>
                        Login
                    </button>
                    <button className="hover:underline">
                        Sign-up
                    </button>
                </div>
            </div>
        </>
    );
}