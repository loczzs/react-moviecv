import movieAPI from "apis/movieAPI";
import useRequest from "hooks/useRequest";
import { useState } from "react";
import { useForm } from "react-hook-form";
import scss from "./styles.module.scss";
import { useNavigate } from "react-router-dom";
import { addmovie } from "modules/Home/slices/movieadSlice";
import { useDispatch } from "react-redux";
import { message,notification } from "antd";
// import  "dayjs";

// Data thêm phim: tenPhim, biDanh, moTa, trailer, hinhAnh, ngayKhoiChieu, maNhom

const AddMovie = () => {
  // const dispatch = useDispatch()
  const [imgPreview, setImgPreview] = useState("");
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    defaultValues: {
      tenPhim: "",
      biDanh: "",
      moTa: "",
      trailer: "",
      hinhAnh: "",
      ngayKhoiChieu: "",
    },
    mode: "onTouched",
  });

  

  const onSubmit = async (values) => {
    // console.log(values)
    try {
      await dispatch(addmovie(values)).unwrap()
      console.log(values);
      // Thành công: gọi notification
      // Redirect về trang MovieList
      navigate("/admin/movies")
      notification.success({
        message: "thêm phim thành công",
      })
    } catch (error) {
      console.log(error);
      // Thất bại: gọi notification hiển thị error
      notification.error({
        message: error,
        description: error,
      });
    }
  };

  const handleChangeImage = (evt) => {
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
      <h1 className={scss.h1}>Thêm Phim</h1>
      <form onSubmit={handleSubmit(onSubmit)} className={scss.form}>
        <div className={scss.field}>
          <input
          // hidden
            type="text"
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
        {imgPreview && (
          <img
            src={imgPreview}
            alt="preview"
            style={{ width: "200px", heigh: "250px" }}
          />
        )}
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
        {/* <div className={scss.field}>
          <input
            type="text"
            {...register("ngayKhoiChieu", {
              required: {
                value: true,
                message: "ngày không được để trống",
              },
              // dayjs("2022/09/09").format("dd/mm/yyyy"),
            })}
          />
          <span></span>
          <label>Ngày Khởi Chiếu</label>
          {errors.ngayKhoiChieu && <p>{errors.ngayKhoiChieu.message}</p>}
        </div> */}
        <button>Thêm Phim</button>
      </form>
    </div>
  );
};

export default AddMovie;
