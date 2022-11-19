import React from "react";
// import scss from "./style.module.scss";

import { useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getUser } from "modules/Home/slices/useradSlice";
import { useSelector } from "react-redux";
import { DeleteUser } from "modules/Home/slices/useradSlice";
// import scss from "./style.module.scss"
import { Layout, Menu, notification } from "antd";
import { Button, Modal, Space, Table, Tag } from "antd";
import scss from "./style.module.scss";
import { ExclamationCircleOutlined } from "@ant-design/icons";

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
  const showConfirm = (userId, acces) => {
    console.log(userId, acces);
    confirm({
      title: `bạn muốn xóa phim ${userId} ?`,
      icon: <ExclamationCircleOutlined />,
      onOk() {
        handleDelete(userId, acces);
      },
      onCancel() {
        console.log("Cancel");
      },
    });
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
  const columns = [
    {
      title: "Tài Khoản",
      dataIndex: "taiKhoan",
      key: "taiKhoan",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Họ Tên",
      dataIndex: "hoTen",
      key: "hoTen",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Level",
      dataIndex: "maLoaiNguoiDung",
      key: "maLoaiNguoiDung",
      render: (_, Text) => (
        
        <div>
          {Text.maLoaiNguoiDung === "QuanTri" ? (
            <Tag color={"volcano"} key={Text.taiKhoan}>
              Quản Trị
            </Tag>
          ) : (
            <Tag color={"green"} key={Text.taiKhoan}>
              Khách Hàng
            </Tag>  
          )}
        </div>
      ),
    },

    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          {record.maLoaiNguoiDung === "QuanTri" ? (
            <></>
          ) : (
            <div>
              <a
                onClick={() => onSelectUser(record.taiKhoan)}
                className="text-primary text-decoration-none me-3"
              >
                edit
              </a>
              <a
                onClick={() => showConfirm(record.taiKhoan, usersz.accessToken)}
                className="text-primary text-decoration-none"
              >
                Delete
              </a>
            </div>
          )}
        </Space>
      ),
    },
  ];
  return (
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
          {/* <table className="table ">
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
                    <tr style={user.maLoaiNguoiDung === "QuanTri" ? {height:"100px",background:"#f2f2f2"}:{}} key={user.taiKhoan}>
                      <td>{user.taiKhoan}</td>
                      <td>{user.hoTen}</td>
                      <td>{user.email}</td>
                      <td>{user.soDT}</td>
                      <td>{user.matKhau}</td>
                      <td>{user.maLoaiNguoiDung}</td>
                    {user.maLoaiNguoiDung === "KhachHang" ?   <td>
                        <button
                          className="btn btn-success mb-1 w-100"
                          onClick={() => onSelectUser(user.taiKhoan)}
                        >
                          Update
                        </button>
                        
                        <button
                          className="btn btn-danger w-100"
                          onClick={() =>
                            showConfirm(user.taiKhoan, usersz.accessToken)
                          }
                        >
                          Delete
                        </button>
                      </td>:<td></td>}
                    </tr>
                  );
                }).reverse()}
                
            </tbody>
          </table> */}
          <Table columns={columns} dataSource={[...users]?.reverse()} />
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
