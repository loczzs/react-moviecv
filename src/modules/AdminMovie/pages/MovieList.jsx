import React from "react";
import scss from "./style.module.scss";
// import useRequest from "hooks/useRequest";

import { Layout, Menu } from "antd";
import { Modal } from "antd";

import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { Space, Table, Tag } from "antd";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import {
  DeleteMovie,
  getDetail,
  getMovie,
} from "modules/Home/slices/movieadSlice";

import { Routes, Route, Link, NavLink } from "react-router-dom";
const { Header, Sider, Content, Footer } = Layout;

const { confirm } = Modal;

const MovieList = () => {
  const dispatch = useDispatch();
  const { movies, isLoading, error } = useSelector((state) => state.movie);
  console.log(movies);

  useEffect(() => {
    dispatch(getMovie());
  }, []);
  // console.log(movies);

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/admin/movies/addmovie");
  };

  const onSelectProduct = (movieId) => {
    console.log(movieId);
    // dispatch(getDetail(movieId))
    navigate(`/admin/movies/updatemovie/${movieId}`);
  };

  const handleClicka = (movieId) => {
    navigate(`/admin/movies/time/${movieId}`);
  };

  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  const handleDelete = (movieId, acces) => {
    console.log(movieId, acces);
    dispatch(DeleteMovie({ movieId, acces }));
  };
  const showConfirm = (movie, acces) => {
    console.log(movie, acces);
    confirm({
      title: `bạn muốn xóa phim ${movie.tenPhim} ?`,
      icon: <ExclamationCircleOutlined />,
      onOk() {
        handleDelete(movie.maPhim, acces);
      },
      onCancel() {
        console.log("Cancel");
      },
    });
  };

  const handleClickb = () => {
    navigate("/admin/movies/user");
  };

  const handleClickc = () => {
    navigate("/admin/movies");
  };
  const columns = [
    {
      title: "Mã Phim",
      dataIndex: "maPhim",
      key: "maPhim",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Tên Phim",
      dataIndex: "tenPhim",
      key: "tenPhim",
    },
    {
      title: "Hình Ảnh",
      dataIndex: "hinhAnh",
      key: "hinhAnh",
      render: (_, record) => (
        <img src={record.hinhAnh} height={"100px"} width={"100px"} alt="" />
      ),
    },
    {
      title: "Nội Dung ",
      dataIndex: "moTa",
      key: "moTa",
    },

    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <div>
          <button onClick={() => onSelectProduct(record.maPhim)} className="btn btn-success mb-1 w-100">edit</button>

          <button onClick={() =>
                              showConfirm(record, user.accessToken)
                            } className="btn btn-danger mb-1 w-100">Delete</button>
          {record.sapChieu ? (
            <button className="btn btn-primary w-100 pe-none">phim sắp chiếu</button>
          ) : (
            <button onClick={()=>handleClicka(record.maPhim)} className="btn btn-primary w-100">tạo lịch chiếu</button>
          )}
        </div>
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
        onBreakpoint={(broken) => {}}
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
          <button className={scss.but2}>Movie</button>
          <button onClick={handleClick} className={scss.but}>
            Tạo Phim
          </button>
          <button onClick={handleClickb} className={scss.but}>
            User
          </button>
          <button
            onClick={() => {
              navigate("/");
            }}
            className={scss.but}
          >
            movie page
          </button>
        </div>
      </Sider>
      <Layout>
        <Header style={{ background: "white" }}></Header>

        <Content
          style={{
            // margin: "24px 16px 0",
            background: "white",
          }}
        >
          {/* <div>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col" width={"10%"}>
                    Mã phim
                  </th>
                  <th scope="col">Tên phim</th>
                  <th scope="col">Hình ảnh</th>
                  <th scope="col"> Nội dung</th>
                  <th scope="col">Hành động</th>
                </tr>
              </thead>
              <tbody>
                {movies
                  ?.map((movie) => {
                    return (
                      <tr key={movie.maPhim}>
                        <th scope="row">{movie.maPhim}</th>
                        <td
                          className={scss.colors}
                          style={{ wordWrap: "break-word" }}
                        >
                          <span style={{ wordWrap: "break-word" }}>
                            {movie.tenPhim}
                          </span>
                        </td>
                        <td>
                          <img
                            src={movie.hinhAnh}
                            width="100px"
                            height="150px"
                          />
                        </td>
                        <td width={"40%"}   >

                          
                         <div >
                         {movie.moTa}
                         </div>
                          
                        </td>

                        <td className="p-3">
                          <button
                            className="btn btn-success me-3 w-100"
                            onClick={() => onSelectProduct(movie.maPhim)}
                          >
                            Edit
                          </button>
                          <button
                            className="btn btn-danger w-100 mt-3"
                            onClick={() =>
                              showConfirm(movie, user.accessToken)
                            }
                          >
                            Delete
                          </button>
                          {movie.sapChieu ?<button className="btn btn-primary w-100 mt-3 pe-none">Phim sắp chiếu</button>:<button onClick={()=>handleClicka(movie.maPhim)} className="btn btn-primary w-100 mt-3">
                            Tạo Lịch Chiếu
                          </button>}
                        </td>
                      </tr>
                    );
                  })
                  .reverse()}
              </tbody>
            </table>
          </div> */}
          <Table columns={columns} dataSource={[...movies].reverse()} />
        </Content>
        <Footer
          style={{
            width:"100% " ,
            textAlign: "center",
          }}
        >
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default MovieList;
