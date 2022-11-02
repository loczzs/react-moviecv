import React from "react";
import { useForm } from "react-hook-form";
import scss from "./styles.module.scss";
import { useNavigate } from "react-router-dom";
import { addmovie } from "modules/Home/slices/movieadSlice";
import { useDispatch } from "react-redux";
import { message,notification } from "antd";
import { adduser } from "modules/Home/slices/useradSlice";


const AddUser = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

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
 const handlechangetype = ( evt)=>{
  const type = evt.target.value
  setValue("maLoaiNguoiDung",type)
  console.log(type)
 }

  const onSubmit = async (values) => {
    console.log(values)
    
    try {
      await dispatch(adduser(values)).unwrap();
      console.log(values);
      // Thành công: gọi notification
      // Redirect về trang MovieList
      navigate("/admin/movies/user");
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
  return (
    <div className={scss.center}>
      <h1 className={scss.h1}>Thêm User</h1>
      <form onSubmit={handleSubmit(onSubmit)} className={scss.form}>
        <div className={scss.field}>
          <input
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
          <label>tài khoản</label>
          {errors.taiKhoan && <p>{errors.taiKhoan.message}</p>}
        </div>
        <div className={scss.field}>
          <input
            type="text"
            {...register("hoTen", {
              required: {
                value: true,
                message: "họ tên không được để trống",
              },
            })}
          />
          <span></span>
          <label>hoTen</label>
          {errors.hoTen && <p>{errors.hoTen.message}</p>}
        </div>
        <div className={scss.field}>
          <input
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
          <span></span>
          <label>email</label>
          {errors.email && <p>{errors.email.message}</p>}
        </div>
        <div className={scss.field}>
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
          <span></span>
          <label>Số điện thoại</label>
          {errors.soDT && <p>{errors.soDT.message}</p>}
          {errors.soDT?.type === "maxLength" && <p>nhiều nhất 11 kí tự</p>}
          
          
        </div>
        <div className={scss.field}>
          <input
            // hidden
            type="text"
            {...register("matKhau", {
              required: {
                value: true,
                message: "mật khẩu không được để trống",
              },
            })}
          />
          <span></span>
          <label> mật khẩu</label>
          {errors.matKhau && <p>{errors.matKhau.message}</p>}
        </div>
        

        <div >
          <select placeholder="mã loại khách hàng" onChange={handlechangetype} className="form-control" >
            <option value="">mã loại người dùng</option>
            <option value="KhachHang">khách hàng</option>
            <option value="QuanTri">quản trị</option>
          </select>
          
          <p className="mt-3">mã loại người dùng</p>
        
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
        <button>Thêm user</button>
      </form>
    </div>
  );
};

// export default AddMovie;

export default AddUser;
