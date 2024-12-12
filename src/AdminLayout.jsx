import React, { useState, useEffect, useRef } from "react";
import { FaBars, FaTimes, FaHome, FaBook, FaPlus, FaUsers, FaClipboardList, FaVideo } from "react-icons/fa";
import ProfileMenu from "./components/shared/ProfileMenu";
import { Link } from "react-router";

const AdminLayout = ({ children, pagetitle, openModal }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const toggleProfileMenu = () => {
        setIsProfileMenuOpen((prev) => !prev);
    };

    



    return (
        <div className="min-h-screen flex flex-col lg:flex-row capitalize">
            {/* Sidebar */}
            <aside
                className={`fixed lg:static top-0 left-0 z-50 w-64 bg-blue-900 text-white flex flex-col p-4 transition-transform duration-300 ease-in-out ${isSidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
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
                    <Link
                        to="/"
                        className="flex items-center px-3 py-2 rounded  text-xl font-serif"
                    >
                        Japanese-Vocabulary
                    </Link>
                    <Link
                        to="/user-manage"
                        className="flex items-center px-3 py-2 rounded hover:bg-blue-600"
                    >
                        <FaUsers className="mr-2" />User Manages
                    </Link>
                    <Link
                        to="/lesson-manage"
                        className="flex items-center px-3 py-2 rounded hover:bg-blue-600"
                    >
                        <FaBook className="mr-2" />Lesson Manages
                    </Link>
                    <Link
                        to="/vocabulary-manage"
                        className="flex items-center px-3 py-2 rounded hover:bg-blue-600"
                    >
                        <FaClipboardList className="mr-2" /> Vocabulary Manages
                    </Link>
                    <Link
                        to="/tutorial-manage"
                        className="flex items-center px-3 py-2 rounded hover:bg-blue-600"
                    >
                        <FaVideo className="mr-2" /> Tutorial Manages
                    </Link>
                </nav>
            </aside>

            {/* Main Content */}
            <div className="flex-grow bg-gray-100">
                {/* Header */}
                <header className="bg-blue-600 text-white px-4 py-3 flex justify-between items-center">
                    {/* Left Section */}
                    <button
                        className="text-white text-2xl lg:hidden"
                        onClick={toggleSidebar}
                    >
                        <FaBars />
                    </button>
                    <h1><strong>Dashboard</strong></h1>
                    {/* Profile Section */}
                    <ProfileMenu/>
                </header>
                <main className="px-6 pt-5 flex justify-between items-center flex-wrap">
                    <div className=" w-full flex justify-between items-center flex-wrap gap-5 px-2 py-4 rounded shadow-md bg-gray-200">
                        <div className="text-2xl">
                            <strong>{pagetitle}</strong>
                        </div>
                        <div>
                            <button
                                onClick={() => openModal()}
                                className="w-full px-10 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">Add {pagetitle}</button>

                        </div>
                    </div>
                </main>


                {/* Main Content Area */}
                <main className="p-6">{children}</main>
            </div>
        </div>
    );
};

export default AdminLayout;
