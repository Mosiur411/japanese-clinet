import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { userLoggedOut } from "../../apps/features/auth/authSlice";

const ProfileMenu = () => {
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
    }






    return (
        <div>
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
export default ProfileMenu