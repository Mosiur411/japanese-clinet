import React, { useState } from "react";
import UserLayout from "../../UserLayout";

const RegisterPage = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [profilePhoto, setProfilePhoto] = useState(null);
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        // Simple validation checks
        if (!name || !email || !password || !confirmPassword) {
            setError("Please fill in all fields.");
            return;
        }
        if (password !== confirmPassword) {
            setError("Passwords do not match.");
            return;
        }

        // Here you can add the code to handle the registration process
        // You can make an API call for user registration, example:
        // axios.post("/api/register", { name, email, password, profilePhoto })
        //   .then((response) => { 
        //     history.push("/login"); // Redirect to the login page on success
        //   })
        //   .catch((err) => {
        //     setError("Registration failed.");
        //   });

        // For now, simulate successful registration:
        setTimeout(() => {
            //history.push("/login"); // Redirect to login page
        }, 1000);
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setProfilePhoto(URL.createObjectURL(file)); // Preview the image
        }
    };

    return (
        <UserLayout>
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <div className="w-full max-w-lg bg-white p-6 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-bold mb-4 text-center">Create Account</h2>

                    {error && <div className="text-red-500 mb-4">{error}</div>}

                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                Full Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                                Confirm Password
                            </label>
                            <input
                                type="password"
                                id="confirmPassword"
                                className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="profilePhoto" className="block text-sm font-medium text-gray-700">
                                Profile Photo
                            </label>
                            <input
                                type="file"
                                id="profilePhoto"
                                accept="image/*"
                                className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                onChange={handleFileChange}
                            />
                            {profilePhoto && (
                                <div className="mt-2 flex justify-center">
                                    <img
                                        src={profilePhoto}
                                        alt="Profile Preview"
                                        className="w-24 h-24 object-cover rounded-full"
                                    />
                                </div>
                            )}
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            Register
                        </button>
                    </form>

                    <div className="mt-4 text-center">
                        <p className="text-sm">
                            Already have an account?{" "}
                            <a href="/login" className="text-blue-600 hover:text-blue-700">
                                Login here
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </UserLayout>

    );
};

export default RegisterPage;
