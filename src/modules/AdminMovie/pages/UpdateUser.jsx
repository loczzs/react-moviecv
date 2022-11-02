import React from "react";
import { useForm } from "react-hook-form";
import scss from "./styles.module.scss";
import { useNavigate, useParams } from "react-router-dom";
// import { useDispatch } from "react-redux";
import { message, notification } from "antd";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getDetailss , UpdateUsers } from "modules/Home/slices/useradSlice";

const UpdateUser = () => {
  const dispatch = useDispatch();
  const { isLoading, error, users, updateuser } = useSelector(
    (state) => state.user
  );
  const navigate = useNavigate();
  const { userId } = useParams();
  useEffect(() => {
    dispatch(getDetailss(userId));
  }, []);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    defaultValues: {
      taiKhoan: userId,
      matKhau: "",
      email: "",
      soDT: "",
      maNhom:"GP09",
      maLoaiNguoiDung: "",
      hoTen: "",
    },
    mode: "onTouched",
  });
  const abc =()=>{
    setValue("matKhau",updateuser.matKhau);
    setValue("email",updateuser.email)
    setValue("soDT",updateuser.soDT);
    setValue("maLoaiNguoiDung",updateuser.maLoaiNguoiDung);
    setValue("hoTen",updateuser.hoTen);
   //  setValue("hinhAnh", null);
   //  setValue("ngayKhoiChieu",updateMovie.ngayKhoiChieu);
   //  handleChange()
 //   //  console.log(updateMovie.hinhAnh)
 }
 const handlechangetype = ( evt)=>{
  const type = evt.target.value
  setValue("maLoaiNguoiDung",type)
  console.log(type)
 }

  const onSubmit = async (values) => {
    console.log(values)
    
    try {
      await dispatch(UpdateUsers(values)).unwrap();
      console.log(values);
      // Thành công: gọi notification
      // Redirect về trang MovieList
      navigate("/admin/movies/user");
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
    <div className={scss.center}>
      <h1 className={scss.h1}>update User</h1>
      <form onSubmit={handleSubmit(onSubmit)} className={scss.form}>
        <div className={scss.field}>
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
        
        <button>update User</button>
      </form>
      {abc()}
    </div>
    
  );
};

export default UpdateUser;
