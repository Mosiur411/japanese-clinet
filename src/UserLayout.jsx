import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router";

const UserLayout = ({ children, userInfo }) => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="bg-blue-500 text-white px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="text-lg font-bold">Mosiur</div>
          <div className="space-x-4">
            {
              userInfo?.role && <Link to="/dashboard" className="hover:underline">Dashboard</Link>
            }
            {
              userInfo?.role && <Link to="/lessons" className="hover:underline">Lessons</Link>
            }
            <Link to="/tutorials" className="hover:underline">Tutorials</Link>
            <Link to="/login" className="hover:underline">Login</Link>
            <Link to="/Register" className="hover:underline">Register</Link>
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


function mapStateToProps(state) {
  return { userInfo: state.auth?.userInfo }
}
export default connect(mapStateToProps, null)(UserLayout)