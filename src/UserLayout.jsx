import React from "react";

const UserLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="bg-blue-500 text-white px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="text-lg font-bold">App Logo</div>
          <div className="space-x-4">
            <a href="/lessons" className="hover:underline">Lessons</a>
            <a href="/tutorials" className="hover:underline">Tutorials</a>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow p-4 bg-gray-100">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-blue-500 text-white text-center py-3">
        <p>&copy; 2024 App Name. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default UserLayout;
