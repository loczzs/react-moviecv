import React from "react";
import { useNavigate } from "react-router-dom";
import { set, useForm } from "react-hook-form";

import { useDispatch } from "react-redux";
import { useEffect,useState } from "react";
import { getUser } from "modules/Home/slices/useradSlice";
import { useSelector } from "react-redux";
import { DeleteUser } from "modules/Home/slices/useradSlice";
import { logout } from "modules/Authentication/slices/authSlice";
import { Layout, Menu, notification,Drawer } from "antd";
import { Button, Modal, Space, Table, Tag } from "antd";
import scss from "./style.module.scss";
import scss2 from "./styles.module.scss"
import { UpdateUsers } from "modules/Home/slices/useradSlice";
import useWindowSize from "hooks/useWindowsize";
import { ExclamationCircleOutlined ,LogoutOutlined} from "@ant-design/icons";

const { Header, Sider, Content, Footer } = Layout;
const { confirm } = Modal;
const UserList = () => {
  const {width} = useWindowSize()

  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.user);
  useEffect(() => {
    dispatch(getUser());
  }, []);
  
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
    dispatch(logout());
    navigate("/");
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
                onClick={() => onSelectUser(record)}
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
  const devicecolumns = [
    {
      render: (record, key, index) => {
        return (
          <div className={scss.respontable2}>
            <span>
              <h4>
                <span style={{ color: "gray", }}>Tài Khoản </span>
                <span>{record.taiKhoan}</span>
              </h4>
            </span>
            <hr />

            <span>
            <h4>
              <span style={{ color: "gray" }}>Họ Tên</span>{" "}
              <span >
                <span>{record.hoTen}</span>
              </span>
            </h4>
          </span>
          <hr />

          <span>
            <h4>
              <span className="me-1" style={{ color: "gray" }}>
                Email
              </span>{" "}
              <span
                style={{ wordBreak:"break-word"  }}
              >
                {record.email}
              </span>
            </h4>
          </span>
          <hr />
          <span>
            <h4>
              <span className="me-1" style={{ color: "gray" }}>
                Level
              </span>{" "}
              <span
                style={{ wordBreak:"break-word"  }}
              >
               {record.maLoaiNguoiDung === "QuanTri" ? (
            <Tag color={"volcano"} key={record.taiKhoan}>
              Quản Trị
            </Tag>
          ) : (
            <Tag color={"green"} key={record.taiKhoan}>
              Khách Hàng
            </Tag>
          )}
              </span>
            </h4>
          </span>
          <hr />

          <span>
            <h4>
              <span style={{ color: "gray" }}>Action:</span>{" "}
              <Space size="middle">
                <a
                 onClick={() => onSelectUser(record)}
                  className={`${scss.textdecor} text-primary text-decoration-none me-3`}
                >
                  Edit
                </a>
                <a
                  onClick={() => showConfirm(record.taiKhoan, usersz.accessToken)}
                  className={`${scss.textdecor} text-primary text-decoration-none me-3`}
                >
                  Delete
                </a>
              </Space>
            </h4>
          </span>
          <hr />
          </div>
        );
      },
    },
  ];
  // updateuser
  const [updateuser,setUser] = useState(null)
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const onSelectUser = (user) => {
   setUser(user)
   showDrawer()
  };
  const fillinput =()=>{
    setValue("taiKhoan",updateuser?.taiKhoan)
    setValue("matKhau",updateuser?.matKhau);
    setValue("email",updateuser?.email)
    setValue("soDT",updateuser?.soDT);
    // setValue("maLoaiNguoiDung",updateuser.maLoaiNguoiDung);
    setValue("hoTen",updateuser?.hoTen);
    setValue("maLoaiNguoiDung",updateuser?.maLoaiNguoiDung);
   //  setValue("hinhAnh", null);
   //  setValue("ngayKhoiChieu",updateMovie.ngayKhoiChieu);
   //  handleChange()
 //   //  console.log(updateMovie.hinhAnh)
 }
  //form
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    defaultValues: {
      taiKhoan: "",
      matKhau: "",
      email: "",
      soDT: "",
      maNhom:"GP09",
      maLoaiNguoiDung: "",
      hoTen: "",
    },
    mode: "onTouched",
  });
  const onSubmit = async (values) => {
    console.log(values)
    
    try {
      await dispatch(UpdateUsers(values)).unwrap();
      onClose()
      
      notification.success({
        message: "cập nhật thành công",
      });
    } catch (error) {
      // Thất bại: gọi notification hiển thị error
      notification.error({
        message: error,
        description: error,
      });
    }
  };



  return (
    <Layout
      style={{
        height: "100vh",
      }}
    >
    <Drawer  placement="right" onClose={onClose} open={open}>
    <div className={scss2.center2}>
     <div className="bg-white ">
      <h1 >Update User</h1>
      <form onSubmit={handleSubmit(onSubmit)} >
        <div className={scss2.divma} >
          <p><label htmlFor="">Tài Khoản</label></p>
          <input
          disabled
            // hidden
            type="text"
            {...register("taiKhoan", {
              required: {
                value: true,
                message: "tài khoản không được để trống",
              },
            })}
          />
          <span></span>
          
          {errors.taiKhoan && <span>{errors.taiKhoan.message}</span>}
        </div>
        <div className={scss2.divma} >
        <p><label htmlFor="hoTen">Họ Tên</label></p>
          <input
          id="hoTen"
            type="text"
            {...register("hoTen", {
              required: {
                value: true,
                message: "họ tên không được để trống",
              },
            })}
          />
          
          {errors.hoTen && <span>{errors.hoTen.message}</span>}
        </div>
        <div className={scss2.divma} >
        <p><label htmlFor="email">email</label></p>
          <input
          id="email"
            type="email"
            {...register("email", {
              required: {
                value: true,
                message: "email không được để trống",
              },
              pattern:{
                value:  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message:"email không đúng định dạng"
              }
            })}
          />
          
          {errors.email && <span>{errors.email.message}</span>}
        </div>
        <div className={scss2.divma} >
        <p ><label htmlFor="SDT">Số Điện Thoại</label></p>
          <input
            type="number"
            {...register("soDT", {
              required: {
                value: true,
                message: "Số điện thoại không được để trống",
              },
              pattern:{
                value:/^[0-9]*$/,
                message: "không đúng định dạng số"
              },
             
              maxLength:11
            })}
          />
          
          {errors.soDT && <p>{errors.soDT.message}</p>}
          {errors.soDT?.type === "maxLength" && <span>nhiều nhất 11 kí tự</span>}
          
          
        </div>
        <div className={scss2.divma} >
        <p><label htmlFor="pass">Mật Khẩu</label></p>
          <input
            // hidden
            id="pass"
            type="text"
            {...register("matKhau", {
              required: {
                value: true,
                message: "mật khẩu không được để trống",
              },
            })}
          />
          
          {errors.matKhau && <span>{errors.matKhau.message}</span>}
        </div>
        

        <div className={scss2.divma} >
        <p><label htmlFor="ma">Mã Loại Người Dùng</label></p>
          <select id="ma" placeholder="mã loại khách hàng"  {...register("maLoaiNguoiDung", {
                required: {
                  value: true,
                  message: "Chọn dự án",
                },
              })} >
            
            <option value="KhachHang">khách hàng</option>
            <option value="QuanTri">quản trị</option>
          </select>
          
          
        
        </div>
        
        <button className="mt-3 btn btn-info" >update User</button>
      </form>
      {fillinput()}
    </div>
   </div>
      </Drawer>
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
          <button
            onClick={ handleLogout}
            className={scss.but}
          >
             <svg viewBox="64 64 896 896" focusable="false" data-icon="logout" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M868 732h-70.3c-4.8 0-9.3 2.1-12.3 5.8-7 8.5-14.5 16.7-22.4 24.5a353.84 353.84 0 01-112.7 75.9A352.8 352.8 0 01512.4 866c-47.9 0-94.3-9.4-137.9-27.8a353.84 353.84 0 01-112.7-75.9 353.28 353.28 0 01-76-112.5C167.3 606.2 158 559.9 158 512s9.4-94.2 27.8-137.8c17.8-42.1 43.4-80 76-112.5s70.5-58.1 112.7-75.9c43.6-18.4 90-27.8 137.9-27.8 47.9 0 94.3 9.3 137.9 27.8 42.2 17.8 80.1 43.4 112.7 75.9 7.9 7.9 15.3 16.1 22.4 24.5 3 3.7 7.6 5.8 12.3 5.8H868c6.3 0 10.2-7 6.7-12.3C798 160.5 663.8 81.6 511.3 82 271.7 82.6 79.6 277.1 82 516.4 84.4 751.9 276.2 942 512.4 942c152.1 0 285.7-78.8 362.3-197.7 3.4-5.3-.4-12.3-6.7-12.3zm88.9-226.3L815 393.7c-5.3-4.2-13-.4-13 6.3v76H488c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h314v76c0 6.7 7.8 10.5 13 6.3l141.9-112a8 8 0 000-12.6z"></path></svg> Log out
          </button>
        </div>
      </Sider>
      <Layout>
        <div className="text-center">
          <h1>User list</h1>
        </div>

        <Content
          style={{
            background: "white",
          }}
        >
          <Table columns={width <900 ?devicecolumns: columns} dataSource={[...users]?.reverse()} />
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
