import React from "react";
import scss from "./style.module.scss";
import useRequest from "hooks/useRequest";
import { useNavigate } from "react-router-dom";
import userAPI from "apis/userAPI";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getUser } from "modules/Home/slices/useradSlice";
import { useSelector } from "react-redux";
import { DeleteUser } from "modules/Home/slices/useradSlice";

const UserList = () => {
  const dispatch = useDispatch()
  const{users}=useSelector((state)=>state.user)
  useEffect(()=>{
    dispatch(getUser())
  },[])
  console.log(users)
 const handleDelete=(userid,acces)=>{
    dispatch(DeleteUser({userid,acces}))
 }
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/admin/movies/adduser");
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };
  const onSelectUser = (userId) => {
    console.log(userId)
    // dispatch(getDetail(movieId))
    navigate(`/admin/movies/updateuser/${userId}`);
  };

  const usersz = JSON.parse(localStorage.getItem("user"));

  const handleClicka = () => {
    navigate("/admin/movies/time");
  };

  const handleClickb = () => {
    navigate("/admin/movies/user");
  };

  const handleClickc = () => {
    navigate("/admin/movies");
  };
  return (
    <div className={scss.center}>
      <div className={scss.menu}>
        <div class={scss.names}>
          <h1>Menu</h1>
        </div>
        <ul>
          <li onClick={handleClickc}>
            <img src="/img/icon1.png" alt="" />
            <span>Phim</span>
          </li>
          <li onClick={handleClicka}>
            <img src="/img/icon2.png" alt="" />
            <span>Lịch chiếu</span>
          </li>
          <li onClick={handleClickb}>
            <img src="/img/icon4.png" alt="" />
            <span>User</span>
          </li>
        </ul>
      </div>
      <div class={scss.container}>
        <div class={scss.header}>
          <div class={scss.nav}>
            
            <div class={scss.add}>
              <a href="#" class="btn" onClick={handleClick}>
                Thêm User
              </a>
            </div>
            <div class={scss.user}>
              <p>
                <img src="/img/icon4.png" alt="" /> 
              </p>
              <a onClick={handleLogout}>Logout</a>
            </div>
          </div>
        </div>
        <div className={scss.content}>
          <h2>Danh sách User</h2>
          <table className={scss.table}>
            <thead>
              <tr>
                <th>Tài khoản</th>
                <th>Họ tên</th>
                <th>Email</th>
                <th>Sđt</th>
                <th>Mật khẩu</th>
                <th>mã loại người dùng</th>
                <th>Hành động</th>
              </tr>
            </thead>
            <tbody>
              {users?.map((user) => {
                return (
                  <tr key={user.taiKhoan}>
                    <td>{user.taiKhoan}</td>
                    <td>{user.hoTen}</td>
                    <td>{user.email}</td>
                    <td>{user.soDT}</td>
                    <td>{user.matKhau}</td>
                    <td>{user.maLoaiNguoiDung}</td>
                    <td>
                      <button
                        onClick={() => onSelectUser(user.taiKhoan)}
                      >
                        Update
                      </button>
                      <button
                      onClick={() =>
                        handleDelete(user.taiKhoan, usersz.accessToken)
                      }
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserList;


{/* <table className={scss.table}>
            <thead>
              <tr>
                <th>Id</th>
                <th>avatar</th>
                <th>name</th>
                <th>email</th>
                <th>phoneNumber</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users?.map((user) => {
                return (
                  <tr key={user.userId}>
                    <td>{user.userId}</td>
                    <td>
                      <img src={user.avatar} alt="" />
                    </td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.phoneNumber}</td>
                    <td>
                     <button >diaiada</button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table> */}
