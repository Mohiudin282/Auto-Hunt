import { Link } from "react-router-dom";
export function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center h-screen text-center">
            <h1 className="text-6xl font-bold">404</h1>
            <p className="text-2xl mt-4 text-gray">How did we get here?</p>
            <Link to="/" className="mt-6 text-blue-500 hover:underline text-lg">
                Take me home.
            </Link>
        </div>
    );
}