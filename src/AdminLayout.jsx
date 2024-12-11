import React, { useState, useEffect, useRef } from "react";
import { FaBars, FaTimes, FaHome, FaBook, FaPlus, FaUsers, FaClipboardList } from "react-icons/fa";

const AdminLayout = ({ children }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
    const profileMenuRef = useRef(null);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const toggleProfileMenu = () => {
        setIsProfileMenuOpen((prev) => !prev);
    };

    const closeProfileMenu = () => {
        setIsProfileMenuOpen(false);
    };

    // Close profile menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                profileMenuRef.current &&
                !profileMenuRef.current.contains(event.target)
            ) {
                closeProfileMenu();
            }
        };
        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="min-h-screen flex flex-col lg:flex-row">
            {/* Sidebar */}
            <aside
                className={`fixed lg:static top-0 left-0 z-50 w-64 bg-gray-800 text-white flex flex-col p-4 transition-transform duration-300 ease-in-out ${isSidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
                    }`}
            >
                {/* Close Button for Mobile */}
                <div className="flex justify-between items-center lg:hidden mb-4">
                    <span className="text-xl font-bold">Admin Panel</span>
                    <button
                        className="text-white text-2xl"
                        onClick={toggleSidebar}
                    >
                        <FaTimes />
                    </button>
                </div>

                {/* Navigation */}
                <nav className="space-y-2">
                    <a
                        href="/dashboard"
                        className="flex items-center px-3 py-2 rounded hover:bg-gray-700"
                    >
                        <FaHome className="mr-2" /> Dashboard
                    </a>
                    <a
                        href="/lessons"
                        className="flex items-center px-3 py-2 rounded hover:bg-gray-700"
                    >
                        <FaBook className="mr-2" /> Lessons
                    </a>
                    <a
                        href="/add-lessons"
                        className="flex items-center px-3 py-2 rounded hover:bg-gray-700"
                    >
                        <FaPlus className="mr-2" /> Add Lessons
                    </a>
                    <a
                        href="/vocabulary-management"
                        className="flex items-center px-3 py-2 rounded hover:bg-gray-700"
                    >
                        <FaClipboardList className="mr-2" /> Vocabulary Management
                    </a>
                    <a
                        href="/manage-users"
                        className="flex items-center px-3 py-2 rounded hover:bg-gray-700"
                    >
                        <FaUsers className="mr-2" /> Manage Users
                    </a>
                </nav>
            </aside>

            {/* Main Content */}
            <div className="flex-grow bg-gray-100">
                {/* Header */}
                <header className="bg-gray-800 text-white px-4 py-3 flex justify-between items-center">
                    {/* Left Section */}
                    <button
                        className="text-white text-2xl lg:hidden"
                        onClick={toggleSidebar}
                    >
                        <FaBars />
                    </button>
                    <h1>Hello</h1>
                    {/* Profile Section */}
                    <div className="relative" ref={profileMenuRef}>
                        <img
                            src="https://via.placeholder.com/40" // Replace with dynamic image URL
                            alt="Profile"
                            className="w-10 h-10 rounded-full cursor-pointer"
                            onClick={toggleProfileMenu}
                        />
                        {isProfileMenuOpen && (
                            <div className="absolute right-0 mt-2 w-48 bg-white text-gray-800 shadow-lg rounded-lg">
                                <button
                                    className="block w-full px-4 py-2 text-left hover:bg-gray-100"
                                    onClick={() => alert("View Profile")}
                                >
                                    View Profile
                                </button>
                                <button
                                    className="block w-full px-4 py-2 text-left hover:bg-gray-100"
                                    onClick={() => alert("Logout")}
                                >
                                    Logout
                                </button>
                            </div>
                        )}
                    </div>
                </header>

                {/* Main Content Area */}
                <main className="p-6">{children}</main>
            </div>
        </div>
    );
};

export default AdminLayout;
