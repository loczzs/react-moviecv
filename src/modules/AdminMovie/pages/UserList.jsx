import React from "react";
// import scss from "./style.module.scss";
import useRequest from "hooks/useRequest";
import { useNavigate } from "react-router-dom";
import userAPI from "apis/userAPI";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getUser } from "modules/Home/slices/useradSlice";
import { useSelector } from "react-redux";
import { DeleteUser } from "modules/Home/slices/useradSlice";
// import scss from "./style.module.scss"
import { Layout, Menu, notification } from "antd";
import { Button, Modal, Space } from "antd";
import scss from "./style.module.scss";

const { Header, Sider, Content, Footer } = Layout;
const { confirm } = Modal;
const UserList = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.user);
  useEffect(() => {
    dispatch(getUser());
  }, []);
  console.log(users);
  const handleDelete = (userid, acces) => {
    dispatch(DeleteUser({ userid, acces }));
  };
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/admin/movies/adduser");
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };
  const onSelectUser = (userId) => {
    console.log(userId);
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
    // <div className={scss.center}>
    //   <div className={scss.menu}>
    //     <div class={scss.names}>
    //       <h1>Menu</h1>
    //     </div>
    //     <ul>
    //       <li onClick={handleClickc}>
    //         <img src="/img/icon1.png" alt="" />
    //         <span>Phim</span>
    //       </li>
    //       <li onClick={handleClicka}>
    //         <img src="/img/icon2.png" alt="" />
    //         <span>Lịch chiếu</span>
    //       </li>
    //       <li onClick={handleClickb}>
    //         <img src="/img/icon4.png" alt="" />
    //         <span>User</span>
    //       </li>
    //     </ul>
    //   </div>
    //   <div class={scss.container}>
    //     <div class={scss.header}>
    //       <div class={scss.nav}>

    //         <div class={scss.add}>
    //           <a href="#" class="btn" onClick={handleClick}>
    //             Thêm User
    //           </a>
    //         </div>
    //         <div class={scss.user}>
    //           <p>
    //             <img src="/img/icon4.png" alt="" />
    //           </p>
    //           <a onClick={handleLogout}>Logout</a>
    //         </div>
    //       </div>
    //     </div>
    //     <div className={scss.content}>
    //       <h2>Danh sách User</h2>
    //       <table className={scss.table}>
    //         <thead>
    //           <tr>
    //             <th>Tài khoản</th>
    //             <th>Họ tên</th>
    //             <th>Email</th>
    //             <th>Sđt</th>
    //             <th>Mật khẩu</th>
    //             <th>mã loại người dùng</th>
    //             <th>Hành động</th>
    //           </tr>
    //         </thead>
    //         <tbody>
    //           {users?.map((user) => {
    //             return (
    //               <tr key={user.taiKhoan}>
    //                 <td>{user.taiKhoan}</td>
    //                 <td>{user.hoTen}</td>
    //                 <td>{user.email}</td>
    //                 <td>{user.soDT}</td>
    //                 <td>{user.matKhau}</td>
    //                 <td>{user.maLoaiNguoiDung}</td>
    //                 <td>
    //                   <button
    //                     onClick={() => onSelectUser(user.taiKhoan)}
    //                   >
    //                     Update
    //                   </button>
    //                   <button
    //                   onClick={() =>
    //                     handleDelete(user.taiKhoan, usersz.accessToken)
    //                   }
    //                   >
    //                     Delete
    //                   </button>
    //                 </td>
    //               </tr>
    //             );
    //           })}
    //         </tbody>
    //       </table>
    //     </div>
    //   </div>
    // </div>
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="logo" />
        <h1 className="text-white text-center">TIX</h1>
        <Menu
          // className="mt-5"
          theme="dark"
          mode="inline"
        />
        <div className="container text-white mt-3">
          <button onClick={handleClickc} className={scss.but}>
            Movie
          </button>
          <button onClick={handleClick} className={scss.but}>
            Create User
          </button>
          <button className={scss.but2}>User</button>
        </div>
      </Sider>
      <Layout>
        <Header style={{ background: "white", textAlign: "center" }}>
          <h1>USER LIST</h1>
        </Header>

        <Content
          style={{
            background: "white",
          }}
        >
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">Tài khoản</th>
                <th scope="col">Họ tên</th>
                <th scope="col">Email</th>
                <th scope="col">Sđt</th>
                <th scope="col"> Mật khẩu</th>
                <th scope="col">mã loại người dùng</th>
                <th scope="col">Hành động</th>
              </tr>
            </thead>

            <tbody>
              {users
                ?.map((user) => {
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
                          className="btn btn-success mb-1 w-100"
                          onClick={() => onSelectUser(user.taiKhoan)}
                        >
                          Update
                        </button>
                        <button
                          className="btn btn-danger w-100"
                          onClick={() =>
                            handleDelete(user.taiKhoan, usersz.accessToken)
                          }
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                }).reverse()}
                
            </tbody>
          </table>
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default UserList;
