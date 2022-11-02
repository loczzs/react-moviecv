
import { useState } from "react";
import { set, useForm } from "react-hook-form";
import scss from "./styles.module.scss";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { updateMovies  } from "modules/Home/slices/movieadSlice";
import { getDetail } from "modules/Home/slices/movieadSlice";
// Data thêm phim: tenPhim, biDanh, moTa, trailer, hinhAnh, ngayKhoiChieu, maNhom
import { message,notification } from "antd";
const UpdateMovie = () => {
  const dispatch = useDispatch();
  const { movies, isLoading, updateMovie, error } = useSelector(
    (state) => state.movie
  );
  const [imgPreview, setImgPreview] = useState("");
  const navigate = useNavigate();
  const { movieId } = useParams();
// console.log(updateMovie.hinhAnh)
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    defaultValues: {
      maPhim: movieId,
      tenPhim: "",
      biDanh: "",
      moTa: "",
      trailer: "",
      hinhAnh: null,
      ngayKhoiChieu: "",
      sapChieu:false,
      hot:false,
      danhGia:0
    },
    mode: "onTouched",
  });
  useEffect(() => {
   dispatch(getDetail(movieId));

  
  }, []);
const abc =()=>{
   setValue("maPhim", movieId);
   setValue('tenPhim',updateMovie.tenPhim)
   setValue("biDanh", updateMovie.biDanh);
   setValue("moTa", updateMovie.moTa);
   setValue("trailer", updateMovie.trailer);
  //  setValue("hinhAnh", null);
  //  setValue("ngayKhoiChieu",updateMovie.ngayKhoiChieu);
  //  handleChange()
//   //  console.log(updateMovie.hinhAnh)
}
 const handleChange= ()=>{
  setImgPreview(updateMovie.hinhAnh)
 }
// setImgPreview(updateMovie.hinhAnh)

  const onSubmit = async (values,) => {
    console.log(values)
    try {
      const user = JSON.parse(localStorage.getItem("user"));
      await dispatch(updateMovies(values)).unwrap();
      console.log(values);
      // Thành công: gọi notification
      // Redirect về trang MovieList
      navigate("/admin/movies");
      notification.success({
        message: "thêm user thành công",
      })
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

  return (
    <div className={scss.center}>
      <h1 className={scss.h1}>Update Phim</h1>
      <form onSubmit={handleSubmit(onSubmit)} className={scss.form}>
        {/* <input type="text" {...register("maPhim")} name="" id="" /> */}
        <div className={scss.field}>
          <input
            type="text"
            // value={updateMovie.tenPhim}
            {...register("tenPhim", {
              required: {
                value: true,
                message: "Tên phim không được để trống",
              },
            })}
          />

          <span></span>
          <label>Tên Phim</label>
          {errors.tenPhim && <p>{errors.tenPhim.message}</p>}
        </div>
        <div className={scss.field}>
          <input
            type="text"
            {...register("biDanh", {
              required: {
                value: true,
                message: "bí danh không được để trống",
              },
            })}
          />
          <span></span>
          <label>Bí Danh</label>
          {errors.biDanh && <p>{errors.biDanh.message}</p>}
        </div>
        <div className={scss.field}>
          <input
            type="text"
            {...register("moTa", {
              required: {
                value: true,
                message: "mô tả không được để trống",
              },
            })}
          />
          <span></span>
          <label>Mô Tả</label>
          {errors.moTa && <p>{errors.moTa.message}</p>}
        </div>
        <div className={scss.field}>
          <input
            type="text"
            {...register("trailer", {
              required: {
                value: true,
                message: "trailer không được để trống",
              },
            })}
          />
          <span></span>
          <label>Trailer</label>
          {errors.trailer && <p>{errors.trailer.message}</p>}
        </div>
        <div className={scss.field}>
          {/* <input type="file" placeholder="Hình Ảnh" {...register("hinhAnh")} /> */}
          <input type="file" onChange={handleChangeImage} />
          <span></span>
          <label>Hình Ảnh</label>
        </div>
        
          <img
            src={imgPreview ==="" ? updateMovie.hinhAnh : imgPreview}
            alt="preview"
            style={{ width: "150px", heigh: "150px" }}
          />
        
        <div className={scss.field}>
          <input
            type="text"
            {...register("ngayKhoiChieu", {
              required: {
                value: true,
                message: "ngày không được để trống",
              },
              pattern: {
                value:
                  /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/,
                message: "đúng định dạng dd/mm/yyyy",
              },
            })}
          />
          <span></span>
          <label>Ngày Khởi Chiếu</label>
          {errors.ngayKhoiChieu && <p>{errors.ngayKhoiChieu.message}</p>}
        </div>
        {/* <button
          onClick={() => {
            setValue("maPhim", movieId);
            setValue("tenPhim",updateMovie.tenPhim)
            setValue("biDanh", updateMovie.biDanh);
            setValue("moTa", updateMovie.moTa);
            setValue("trailer", updateMovie.trailer);
            setValue("hinhAnh", updateMovie.hinhAnh);
            setValue("ngayKhoiChieu", updateMovie.ngayKhoiChieu);
          }}
        >lấy giá trị</button> */}
        {abc()}

        <button>Update Phim</button>
      </form>
    </div>
  );
};

export default UpdateMovie;
