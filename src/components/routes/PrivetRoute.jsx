
import { connect } from "react-redux";
import { Navigate, Outlet } from "react-router";
// eslint-disable-next-line react-refresh/only-export-components
const PrivetRoute = ({ userInfo }) => {
  console.log(userInfo)
  let content;
  if (userInfo && (userInfo?.role === 'admin')) {
    content = <Outlet/>
  } else if (userInfo && (userInfo?.role === 'user')) {
    content = <Outlet />
  } else {
    content = <Navigate to={"/404"} />
  }
  return (
    content
  )
}
function mapStateToProps(state) {
  return { userInfo: state.auth?.userInfo }
}
export default connect(mapStateToProps, null)(PrivetRoute)