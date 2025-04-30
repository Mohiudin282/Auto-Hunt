import { useState } from 'react';

export function Signup() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);

    // Check for password strength or criteria
    if (event.target.value.length < 8) {
      setPasswordError("Password must be at least 8 characters.");
    } else {
      setPasswordError("");
    }
  };

  const handleConfirmPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(event.target.value);

    if (event.target.value !== password) {
      setConfirmPasswordError("Passwords do not match.");
    } else {
      setConfirmPasswordError("");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-white p-20 rounded-lg w-[500px] max-w-[100%] h-max">
        {/* Logo */}
        <div className="flex justify-center mb-4">
          <img src="/Logo1.svg" alt="Logo" className="h-10" />
        </div>

        {/* Title */}
        <h2 className="text-2xl font-bold text-center text-gray-900">Sign Up to your account</h2>

        {/* Form */}
        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700">Full Name</label>
          <input
            type="text"
            placeholder="Enter Full Name"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <label className="block text-sm font-medium text-gray-700">Email address</label>
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <label className="block text-sm font-medium text-gray-700 mt-4">Password</label>
          <input
            type="password"
            required
            minLength={8}
            placeholder="Password"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={password}
            onChange={handlePasswordChange} // Handle password change
          />
          {passwordError && <p className="text-red-500 text-sm">{passwordError}</p>} {/* Display password error */}

          <label className="block text-sm font-medium text-gray-700 mt-4">Re-type Password</label>
          <input
            type="password"
            placeholder="Repeat Password"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange} // Handle confirm password change
          />
          {confirmPasswordError && <p className="text-red-500 text-sm">{confirmPasswordError}</p>} {/* Display confirm password error */}

          <div className="flex justify-between items-center mt-2">
            <span></span>
            <a href="#" className="text-blue-600 hover:underline">Forgot password?</a>
          </div>

          <button className="w-1/3 mt-4 bg-white-600 border text-black min-w-full py-2 rounded-4xl hover:bg-gray-200 transition">
            Sign Up
          </button>
        </div>

        {/* Footer */}
        <p className="text-center text-sm text-gray-600 mt-4">
          or 
        </p>
        <div className="flex items-center justify-between">
        
          <button 
          
            className="realtive flex items-center justify-center gap-2 w-1/3 mt-4 bg-white-600 border text-black min-w-full py-2 rounded-4xl hover:bg-gray-200 transition">
           <img src="/logos/Google.png" alt="Google Logo" className="h-6 w-6 justify-start" />
           <span>Continue with Google</span>
          </button>
        </div>
      </div>
    </div>
  );
}
