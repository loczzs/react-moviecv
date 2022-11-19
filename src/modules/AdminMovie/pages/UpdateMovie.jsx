import { useState } from "react";
import { set, useForm, Controller } from "react-hook-form";
import scss from "./styles.module.scss";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { updateMovies } from "modules/Home/slices/movieadSlice";
import { getDetail } from "modules/Home/slices/movieadSlice";
import { Switch as AntdSwitch } from "antd";
// Data thêm phim: tenPhim, biDanh, moTa, trailer, hinhAnh, ngayKhoiChieu, maNhom
import moment from "moment/moment";
import { message, notification } from "antd";
const UpdateMovie = () => {
  const dispatch = useDispatch();
  const { movies, isLoading, updateMovie, error } = useSelector(
    (state) => state.movie
  );

  const [imgPreview, setImgPreview] = useState("");
  // const valet = updateMovie?.dangChieu

  // console.log("valet",valet)

  const navigate = useNavigate();
  const { movieId } = useParams();
  // console.log(updateMovie.hinhAnh)

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    control,
  } = useForm({
    defaultValues: {
      maPhim: movieId,
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
  useEffect(() => {
    
    dispatch(getDetail(movieId));
    document.body.style.background =
      "linear-gradient(120deg, #2980b9, #8e44ad)";
    return () => {
      document.body.style.background = null;
    };
  }, []);

  // const [vaDate,setVadate] = useState(updateMovie.ngayKhoiChieu)
  let ngayKhoiChieu = moment(updateMovie?.ngayKhoiChieu?.slice(0, 10)).format(
    "DD/MM/YYYY"
  );
  const abc = () => {
    setValue("maPhim", movieId);
    setValue("tenPhim", updateMovie?.tenPhim);
    setValue("biDanh", updateMovie?.biDanh);
    setValue("moTa", updateMovie?.moTa);
    setValue("trailer", updateMovie?.trailer);
    setValue("sapChieu", updateMovie?.sapChieu);
    setValue("dangChieu", updateMovie?.dangChieu);
    //  setValue("hinhAnh", null);

    setValue("ngayKhoiChieu", ngayKhoiChieu);
    //  handleChange()
    // document.getElementById("datemov").value = `${updateMovie?.ngayKhoiChieu}`
    //   //  console.log(updateMovie.hinhAnh)
  };
  // function setVa(){
  //     document.getElementById("dangchieu").innerHTML = `<Switch defaultChecked={updateMovie?.dangChieu} onChange={onChange1} />`
  // }
  const handleChange = () => {
    setImgPreview(updateMovie.hinhAnh);
  };
  // setImgPreview(updateMovie.hinhAnh)

  const onSubmit = async (values) => {
    console.log(values);
    try {
      const user = JSON.parse(localStorage.getItem("user"));
      await dispatch(updateMovies(values)).unwrap();
      console.log(values);
      // Thành công: gọi notification
      // Redirect về trang MovieList
      navigate("/admin/movies");
      notification.success({
        message: "thêm user thành công",
      });
    } catch (error) {
      // Thất bại: gọi notification hiển thị error
      notification.error({
        message: error,
        description: error,
      });
    }
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
  // const onChange1 = (checked) => {
  //   // console.log(`switch to ${checked}`);
  //   setValue("dangChieu", checked);
  // };
  // const onChange2 = (checked) => {
  //   setValue("sapChieu", checked);
  // };
  //   function setVa(){
  //     document.getElementById("dangchieu").defaultCheckedd = `${updateMovie?.dangChieu}`
  // }
  return (
    <div className={scss.center}>
      <div className="p-3 bg-white rounded-3">
        <h1 className={scss.h1}>Update Phim</h1>
        <form onSubmit={handleSubmit(onSubmit)} className={scss.form}>
          {/* <input type="text" {...register("maPhim")} name="" id="" /> */}
          <div className={scss.divma}>
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
          <div className={scss.divma}>
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
          <div className={scss.divma}>
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
          <div className={scss.divma}>
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
            src={imgPreview === "" ? updateMovie.hinhAnh : imgPreview}
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

          <div className={scss.divma}>
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

          {abc()}
          {/* {setVa()} */}

          <button className="mt-3 btn btn-info">cập nhật Phim</button>
        </form>
      </div>
    </div>
  );
};

export default UpdateMovie;
{
  /* <Controller
control={control}
name="dangChieu"
render={({ field: { value, onChange } }) => (
  <AntdSwitch onChange={onChange} checked={value} />
)}
/> */
}
