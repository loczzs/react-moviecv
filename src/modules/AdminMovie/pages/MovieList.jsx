import React from "react";
import scss from "./style.module.scss";
// import useRequest from "hooks/useRequest";

import { Layout, Menu } from "antd";
import { Modal } from "antd";
import { set, useForm, Controller } from "react-hook-form";
import moment from "moment/moment";
import scss2 from "./styles.module.scss"
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Switch as AntdSwitch } from "antd";
import { updateMovies } from "modules/Home/slices/movieadSlice";
import { Space, Table, Tag ,Drawer,notification } from "antd";
import { useDispatch } from "react-redux";
import { useEffect,useState } from "react";
import { logout } from "modules/Authentication/slices/authSlice";
import { ExclamationCircleOutlined,LogoutOutlined } from "@ant-design/icons";
import {
  DeleteMovie,
  getDetail,
  getMovie,
} from "modules/Home/slices/movieadSlice";

import { Routes, Route, Link, NavLink } from "react-router-dom";
import { render } from "@testing-library/react";
const { Header, Sider, Content, Footer } = Layout;

const { confirm } = Modal;

const MovieList = () => {
  const dispatch = useDispatch();
  const { movies, isLoading, error } = useSelector((state) => state.movie);
 

  useEffect(() => {
    dispatch(getMovie());
  }, []);
  // console.log(movies);

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/admin/movies/addmovie");
  };

  
 

  const handleClicka = (movieId) => {
    navigate(`/admin/movies/time/${movieId}`);
  };

  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    dispatch(logout());
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
          <button
            onClick={() => onSelectProduct(record)}
            className="btn btn-success mb-1 w-100"
          >
            edit
          </button>

          <button
            onClick={() => showConfirm(record, user.accessToken)}
            className="btn btn-danger mb-1 w-100"
          >
            Delete
          </button>
          {record.sapChieu ? (
            <button className="btn btn-primary w-100 pe-none">
              phim sắp chiếu
            </button>
          ) : (
            <button
              onClick={() => handleClicka(record.maPhim)}
              className="btn btn-primary w-100"
            >
              tạo lịch chiếu
            </button>
          )}
        </div>
      ),
    },
  ];
  const devicecolums = [
    {
      render: (record, key, index) => {
        return (
          <div
            style={{
              backgroundImage: `url(${record.hinhAnh})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <div className={scss.respontable}>
              <span>
                <h4 className="mb-0">
                  <span>Mã Phim :</span>
                  <span>{record.maPhim}</span>
                </h4>
              </span>

              <span>
                <h4>
                  <span style={{ width: "35%" }}>Tên Phim :</span>
                  <span style={{ wordBreak: "break-word" }}>
                    {record.tenPhim}
                  </span>
                </h4>
              </span>

              <span>
                <h4>
                  <span style={{ width: "25%" }}>Mô Tả :</span>
                  <span style={{ wordBreak: "break-word", width: "75%" }}>
                    {record.moTa}
                  </span>
                </h4>
              </span>

              <span>
                <h4
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    padding: "5px",
                  }}
                >
                  <div style={{ display: "flex", marginBottom: "10px" }}>
                    <button
                      onClick={() => onSelectProduct(record)}
                      className="btn btn-success me-1  w-100"
                    >
                      edit
                    </button>

                    <button
                      onClick={() => showConfirm(record, user.accessToken)}
                      className="btn btn-danger  w-100"
                    >
                      Delete
                    </button>
                  </div>

                  <div>
                    {record.sapChieu ? (
                      <button className="btn btn-primary w-100 pe-none">
                        phim sắp chiếu
                      </button>
                    ) : (
                      <button
                        onClick={() => handleClicka(record.maPhim)}
                        className="btn btn-primary w-100"
                      >
                        tạo lịch chiếu
                      </button>
                    )}
                  </div>
                </h4>
              </span>
            </div>
          </div>
        );
      },
    },
  ];
  //updateMovie
  const [imgPreview, setImgPreview] = useState("");
  const [updateMovie,setMovie] = useState(null)
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const onSelectProduct = (movie) => {
    setMovie(movie)
    showDrawer()
  };
  let ngayKhoiChieu = moment(updateMovie?.ngayKhoiChieu?.slice(0, 10)).format(
    "DD/MM/YYYY"
  );
  const fillInput = () => {
    setValue("maPhim",updateMovie?.maPhim );
    setValue("tenPhim", updateMovie?.tenPhim);
    setValue("biDanh", updateMovie?.biDanh);
    setValue("moTa", updateMovie?.moTa);
    setValue("trailer", updateMovie?.trailer);
    setValue("sapChieu", updateMovie?.sapChieu);
    setValue("dangChieu", updateMovie?.dangChieu);
    

    setValue("ngayKhoiChieu", ngayKhoiChieu);
    //  handleChange()
    // document.getElementById("datemov").value = `${updateMovie?.ngayKhoiChieu}`
    //   //  console.log(updateMovie.hinhAnh)
  };
  const handleChangeImage = async (evt) => {
    // Đối với input type là file, có sẽ không dùng event.target.value mà thay thể bằng event.target.files
    const file = evt.target.files[0];

    if (!file) return;

    // Lưu file vào field hinhAnh của hook form
    setValue("hinhAnh", file);

    // Xử lý hiển thị hình ảnh ra giao diện
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file); // bất đồng bộ
    fileReader.onload = (evt) => {
      // Đọc file thành công
      // evt.target.result: string base64
      setImgPreview(evt.target.result);
    };
  };
  const handleChange = () => {
    setImgPreview(updateMovie.hinhAnh);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    control,
  } = useForm({
    defaultValues: {
      maPhim: "",
      tenPhim: "",
      biDanh: "",
      moTa: "",
      trailer: "",
      hinhAnh: null,
      ngayKhoiChieu: "",
      sapChieu: "",
      dangChieu: "",

      hot: false,
      danhGia: 0,
    },
    mode: "onTouched",
  });
  const onSubmit = async (values) => {
    console.log(values);
    try {
      const user = JSON.parse(localStorage.getItem("user"));
      await dispatch(updateMovies(values)).unwrap();
      onClose()
      navigate("/admin/movies");
      notification.success({
        message: "update phim thành công",
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
        minHeight: "100vh",
      }}
    >
     <Drawer width={"40%"}  placement="right" onClose={onClose} open={open}>
     <div className={scss2.center2}>
      <div className="p-3 bg-white rounded-3">
        <h1 className={scss2.h1}>Update Phim</h1>
        <form onSubmit={handleSubmit(onSubmit)} className={scss2.form}>
          {/* <input type="text" {...register("maPhim")} name="" id="" /> */}
          <div className={scss2.divma}>
            <p>
              <label htmlFor="moviename">Tên Phim</label>
            </p>
            <input
              type="text"
              id="moviename"
              // value={updateMovie.tenPhim}
              {...register("tenPhim", {
                required: {
                  value: true,
                  message: "Tên phim không được để trống",
                },
              })}
            />

            {errors.tenPhim && <span>{errors.tenPhim.message}</span>}
          </div>
          <div className={scss2.divma}>
            <p>
              <label htmlFor="moviebidanh">Bí Danh</label>
            </p>
            <input
              id="moviebidanh"
              type="text"
              {...register("biDanh", {
                required: {
                  value: true,
                  message: "bí danh không được để trống",
                },
              })}
            />

            {errors.biDanh && <span>{errors.biDanh.message}</span>}
          </div>
          <div className={scss2.divma}>
            <p>
              <label htmlFor="moviedes">Mô Tả</label>
            </p>
            <textarea
              style={{
                height: "150px  ",
                width: "100%",
                padding: "2px 10px",
                borderRadius: "5px",
                outline: "none",
              }}
              id="moviedes"
              type="text"
              {...register("moTa", {
                required: {
                  value: true,
                  message: "mô tả không được để trống",
                },
              })}
            />

            {errors.moTa && <span>{errors.moTa.message}</span>}
          </div>
          <div className={scss2.divma}>
            <p>
              {" "}
              <label htmlFor="movieTrailer">Trailer</label>
            </p>
            <input
              id="movieTrailer"
              type="text"
              {...register("trailer", {
                required: {
                  value: true,
                  message: "trailer không được để trống",
                },
              })}
            />

            {errors.trailer && <p>{errors.trailer.message}</p>}
          </div>
          <div className="mb-1">
            <p>Hình ảnh</p>
            {/* <input type="file" placeholder="Hình Ảnh" {...register("hinhAnh")} /> */}
            <input
              style={{ border: "none" }}
              type="file"
              onChange={handleChangeImage}
              
            />
          </div>

          <img
            src={imgPreview === "" ? updateMovie?.hinhAnh : imgPreview}
            alt="preview"
            style={{ width: "150px", heigh: "150px" }}
          />
          <div className="row mt-3">
            <div className="col-sm-6 d-flex align-items-center ">
              <p style={{ fontWeight: 600 }} className="mb-0 me-3 mb-1 ">
                Đang Chiếu :{" "}
              </p>
              <Controller
                control={control}
                name="dangChieu"
                render={({ field: { value, onChange } }) => (
                  <AntdSwitch onChange={onChange} checked={value} />
                )}
              />
            </div>
            <div className="col-sm-6 d-flex align-items-center">
              <p style={{ fontWeight: 600 }} className="mb-0 me-3 mb-1 ">
                sắp chiếu :
              </p>
              <Controller
                control={control}
                name="sapChieu"
                render={({ field: { value, onChange } }) => (
                  <AntdSwitch onChange={onChange} checked={value} />
                )}
              />
            </div>
          </div>

          <div className={scss2.divma}>
            <p>
              <label htmlFor="moviedate">Ngày Khởi Chiếu</label>
            </p>
            <input
              // type="date"
              id="moviedate"
              {...register("ngayKhoiChieu", {
                required: {
                  value: true,
                  message: "ngày khởi chiếu không được để trống",
                },
              })}
              onChange={handleChange}
            />

            {errors.ngayKhoiChieu && <p>{errors.ngayKhoiChieu.message}</p>}
          </div>

          {fillInput()}
          {/* {setVa()} */}

          <button className="mt-3 btn btn-info">cập nhật Phim</button>
        </form>
      </div>
    </div>
      </Drawer>
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
            user page
          </button>
          <button
            onClick={ handleLogout}
            className={scss.but}
          >
             <svg viewBox="64 64 896 896" focusable="false" data-icon="logout" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M868 732h-70.3c-4.8 0-9.3 2.1-12.3 5.8-7 8.5-14.5 16.7-22.4 24.5a353.84 353.84 0 01-112.7 75.9A352.8 352.8 0 01512.4 866c-47.9 0-94.3-9.4-137.9-27.8a353.84 353.84 0 01-112.7-75.9 353.28 353.28 0 01-76-112.5C167.3 606.2 158 559.9 158 512s9.4-94.2 27.8-137.8c17.8-42.1 43.4-80 76-112.5s70.5-58.1 112.7-75.9c43.6-18.4 90-27.8 137.9-27.8 47.9 0 94.3 9.3 137.9 27.8 42.2 17.8 80.1 43.4 112.7 75.9 7.9 7.9 15.3 16.1 22.4 24.5 3 3.7 7.6 5.8 12.3 5.8H868c6.3 0 10.2-7 6.7-12.3C798 160.5 663.8 81.6 511.3 82 271.7 82.6 79.6 277.1 82 516.4 84.4 751.9 276.2 942 512.4 942c152.1 0 285.7-78.8 362.3-197.7 3.4-5.3-.4-12.3-6.7-12.3zm88.9-226.3L815 393.7c-5.3-4.2-13-.4-13 6.3v76H488c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h314v76c0 6.7 7.8 10.5 13 6.3l141.9-112a8 8 0 000-12.6z"></path></svg> Log out
          </button>
        </div>
      </Sider>
      <Layout>
      <div className=" container bg-white ">
        
          <h1>Movie list</h1>

       
      </div>
        <Content
          style={{
            // margin: "24px 16px 0",
            background: "white",
          }}
        >
       
          <Table columns={columns} dataSource={[...movies].reverse()} />
        </Content>
        <Footer
          style={{
            width: "100% ",
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
