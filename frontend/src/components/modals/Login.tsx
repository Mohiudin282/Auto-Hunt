import { Modal } from "./Modal";

interface Prop {
    onClose?: () => void;
}

export function Login({ onClose }: Prop) {
    return (
        <Modal onClose={onClose}>
            <div className="bg-white p-8 rounded-lg w-[500px] max-w-[90%] h-max">
                {/* Logo */}
                <div className="flex justify-center mb-4">
                    <img src="/Logo1.svg" alt="Logo" className="h-10" />
                </div>

                {/* Title */}
                <h2 className="text-2xl font-bold text-center text-gray-900">Sign in to your account</h2>


                {/* Form */}
                <div className="mt-4">
                    <label className="block text-sm font-medium text-gray-700">Email address</label>
                    <input type="email" placeholder="Email" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"></input>

                    <label className="block text-sm font-medium text-gray-700 mt-4">Password</label>
                    <input type="password" placeholder="Password" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />

                    <div className="flex justify-between items-center mt-2">
                        <span></span>
                        <a href="#" className="text-blue-600 hover:underline">Forgot password?</a>
                    </div>

                    <button className="w-full mt-4 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
                        Sign in
                    </button>
                </div>

                {/* Footer */}
                <p className="text-center text-sm text-gray-600 mt-4">
                    or continue with
                </p>
                <div className="flex items-center justify-between">
                    <button className="w-1/3 mt-4 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
                        facebook
                    </button>
                    <button className="w-1/3 mt-4 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
                        google
                    </button>
                </div>
            </div>
        </Modal>


    );
}