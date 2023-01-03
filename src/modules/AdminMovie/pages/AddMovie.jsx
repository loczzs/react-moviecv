import movieAPI from "apis/movieAPI";
import useRequest from "hooks/useRequest";
import { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import scss from "./styles.module.scss";
import { useNavigate } from "react-router-dom";
import { addmovie } from "modules/Home/slices/movieadSlice";
import { useDispatch } from "react-redux";
import { message, notification } from "antd";
import { Switch as AntdSwitch } from "antd";
import moment from "moment/moment";
// import  "dayjs";

// Data thêm phim: tenPhim, biDanh, moTa, trailer, hinhAnh, ngayKhoiChieu, maNhom

const AddMovie = () => {
  // const dispatch = useDispatch()
  const [imgPreview, setImgPreview] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    control,
  } = useForm({
    defaultValues: {
      tenPhim: "",
      biDanh: "",
      moTa: "",
      trailer: "",
      hinhAnh: "",
      sapChieu: false,
      dangChieu: true,

      // sapChieu: false ,
      ngayKhoiChieu: "",
    },
    mode: "onTouched",
  });

  useEffect(() => {
    document.body.style.background =
      "linear-gradient(120deg, #2980b9, #8e44ad)";
    return () => {
      document.body.style.background = null;
    };
  });

  const onSubmit = async (values) => {
    console.log(values);
    try {
      await dispatch(addmovie(values)).unwrap();
      console.log(values);
      // Thành công: gọi notification
      // Redirect về trang MovieList
      navigate("/admin/movies");
      notification.success({
        message: "thêm phim thành công",
      });
    } catch (error) {
      console.log(error);
      // Thất bại: gọi notification hiển thị error
      notification.error({
        message: error,
        description: error,
      });
    }
  };
  // console.log( !!"false");

  const handleChangeImage = (evt) => {
    // Đối với input type là file, có sẽ không dùng event.target.value mà thay thể bằng event.target.files
    const file = evt.target.files[0];
    console.log("aadada");

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
  const onDate = (evt) => {
    const type = evt.target.value;
    // console.log(type);
    let ngayKhoiChieu = moment(type).format("DD/MM/YYYY");
    setValue("ngayKhoiChieu", ngayKhoiChieu);
  };
  // console.log(!Boolean("true"));

  return (
    <div className={scss.center}>
      <div className="p-3 bg-white rounded-3">
        <h1>Thêm Phim</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={scss.divma}>
            <p>
              <label htmlFor="moviename">Tên Phim</label>
            </p>
            <input
              id="moviename"
              // hidden
              type="text"
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
                height: "150px",
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

            {errors.trailer && <span>{errors.trailer.message}</span>}
          </div>
          <div className={scss.divma}>
            <p>
              <label>Hình Ảnh</label>
            </p>
            {/* <input type="file" placeholder="Hình Ảnh" {...register("hinhAnh")} /> */}
            <input
              style={{ border: "none" }}
              type="file"
              onChange={handleChangeImage}
            />
          </div>
          {imgPreview && (
            <img
              src={imgPreview}
              alt="preview"
              style={{ width: "200px", heigh: "250px" }}
            />
          )}

 
          <div className="row mt-3">
            <div className="col-sm-6 d-flex align-items-center  ">
              <p style={{fontWeight:600}} className="mb-0 me-3 mb-1 ">Đang Chiếu : </p>
              <Controller
              
                control={control}
                name="dangChieu"
                render={({ field: { value, onChange } }) => (
                  <AntdSwitch onChange={onChange} defaultChecked={true} />
                )}
              />
            </div>
            <div className="col-sm-6 d-flex align-items-center">
              <p style={{fontWeight:600}} className="mb-0 me-3 mb-1 ">sắp chiếu :</p>
              <Controller
                control={control}
                name="sapChieu"
                render={({ field: { value, onChange } }) => (
                  <AntdSwitch onChange={onChange} defaultChecked={false} />
                )}
              />
            </div>
          </div>
          <div className={scss.divma}>
            <p>
              <label htmlFor="moviedate">Ngày Khởi Chiếu</label>
            </p>
            <input id="moviedate" onChange={onDate} type="date" />
          </div>

          <button className="mt-3 btn btn-info">Thêm Phim</button>
        </form>
      </div>
    </div>
  );
};

export default AddMovie;

{
  /* <div>
<p>
  <label htmlFor="">đang chiếu</label>
</p>
{/* <select name="" id="" {...register("dangChieu")}>
<option value="">chọn trạng thái đang chiếu</option>
  <option value={true}>true</option>
  <option value={false}>false</option>
</select> */
}
{
  /* <Switch defaultChecked ={updateMovie?.dangChieu} onChange={onChange1} />
</div>
<div>
<p>
  <label htmlFor="">sắp chiếu</label>
</p> */
}
{
  /* <select name="" id="" {...register("sapChieu")}>
  <option value="">chọn trạng thái sắp chiếu</option>
  <option value={true}>true</option>
  <option value={false}>false</option>
</select> */
}
{
  /* <Switch defaultChecked ={updateMovie?.sapChieu} onChange={onChange2} />
</div> */
}
