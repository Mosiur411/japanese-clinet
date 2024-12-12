import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { userloading, userLoggedIn, userLoggedOut } from "../../apps/features/auth/authSlice";

const UserAuthCheck = () => {
    const dispatch = useDispatch();
    const [authCheck, setAuthCheck] = useState(false);

    const verifyToken = (token) => {
        try {
            const decoded = jwtDecode(token);
            // Check if token is expired
            const currentTime = Date.now() / 1000; // Convert to seconds
            if (decoded.exp < currentTime) {
                console.log("Token is expired");
                return null;
            }
            return decoded; // Return the decoded token
        } catch (error) {
            localStorage.removeItem('token');
            dispatch(userLoggedOut());
            dispatch(userloading());
            setAuthCheck(false);
        }
    };
    useEffect(() => {
        const token = localStorage.getItem("token");
        const userInfo = verifyToken(token);
        if(userInfo?.email){
            dispatch(userLoggedIn({ ...userInfo, token }));
            dispatch(userloading());
            setAuthCheck(true);
        }else{
            dispatch(userLoggedOut());
            dispatch(userloading());
            setAuthCheck(false);
        }
    }, [dispatch])
    return authCheck;
}
export default UserAuthCheck;