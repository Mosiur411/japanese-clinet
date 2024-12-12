import { useEffect, useRef, useState } from "react";
import { connect, useDispatch } from "react-redux";
import { userloading, userLoggedOut } from "../../apps/features/auth/authSlice";

import { toast } from "react-toastify";
import { Link } from "react-router";

const ProfileMenu = ({ userInfo }) => {
    const dispatch = useDispatch();

    const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
    const profileMenuRef = useRef(null);
    const toggleProfileMenu = () => {
        setIsProfileMenuOpen((prev) => !prev);
    };
    const closeProfileMenu = () => {
        setIsProfileMenuOpen(false);
    };

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

    const Logout = () => {
        localStorage.removeItem('token');
        dispatch(userLoggedOut());
        dispatch(userloading());
        toast.success("User Logout")

    }
    console.log('userInfo', userInfo)
    return (
        <div>
            <div className="relative" ref={profileMenuRef}>
                <img
                    src={userInfo?.profilePhoto ? userInfo?.profilePhoto : "https://via.placeholder.com/40"}

                    alt="Profile"
                    className="w-10 h-10 rounded-full cursor-pointer"
                    onClick={toggleProfileMenu}
                />
                {isProfileMenuOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white text-gray-800 shadow-lg rounded-lg">
                        <button
                            className="block w-full px-4 py-2 text-left hover:bg-gray-100 capitalize"
                        /* onClick={() => alert("View Profile")} */
                        >
                            {userInfo?.role}
                        </button>
                        {
                            userInfo?.role === 'admin' && <Link to="/dashboard" className="px-4 hover:underline">Dashboard</Link>
                        }
                        <button
                            className="block w-full px-4 py-2 text-left hover:bg-gray-100"
                            onClick={() => Logout()}
                        >
                            Logout
                        </button>
                    </div>
                )}
            </div>

        </div>
    )
}

function mapStateToProps(state) {
    return { userInfo: state.auth?.userInfo }
}
export default connect(mapStateToProps, null)(ProfileMenu)