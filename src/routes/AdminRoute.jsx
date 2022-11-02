import { Navigate, Route, Outlet  } from "react-router-dom";
import { useSelector } from "react-redux";

const AdminRoute = () => {
  // const { user } = useSelector((state) => state.auth);
  const user = JSON.parse(localStorage.getItem("user"));
  // console.log("user", user);
  if (user.maLoaiNguoiDung !== "QuanTri") {
    return <Navigate to="/" />;
  }else{
    return <Outlet />;
  }

  // đã đăng nhập
};

export default AdminRoute;
