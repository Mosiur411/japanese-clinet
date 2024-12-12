
import { connect } from "react-redux";
import { Navigate, Outlet } from "react-router";
import Spinner from "../shared/Spinner";
// eslint-disable-next-line react-refresh/only-export-components
const OnlyAdminRoute = ({ userInfo, isAuthLoading }) => {
    console.log(userInfo,isAuthLoading)
    if (isAuthLoading) {
        return <Spinner />
    }
    if (userInfo && (userInfo?.role === 'admin')) {
        return <Outlet />
    } else {
        return <Navigate to={"/login"} />
    }
}
function mapStateToProps(state) {
    return {
        userInfo: state.auth?.userInfo,
        isAuthLoading: state.auth?.isLoading

    }
}
export default connect(mapStateToProps, null)(OnlyAdminRoute)