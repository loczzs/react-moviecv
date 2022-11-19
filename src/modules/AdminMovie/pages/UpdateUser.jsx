import React from "react";
import { set, useForm } from "react-hook-form";
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
    document.body.style.background =
    "linear-gradient(120deg, #2980b9, #8e44ad)";
  return () => {
    document.body.style.background = null;
  };
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
    // setValue("maLoaiNguoiDung",updateuser.maLoaiNguoiDung);
    setValue("hoTen",updateuser.hoTen);
    setValue("maLoaiNguoiDung",updateuser.maLoaiNguoiDung);
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
     <div className="p-3 bg-white rounded-3">
      <h1 >update User</h1>
      <form onSubmit={handleSubmit(onSubmit)} >
        <div className={scss.divma} >
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
        <div className={scss.divma} >
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
        <div className={scss.divma} >
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
        <div className={scss.divma} >
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
        <div className={scss.divma} >
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
        

        <div className={scss.divma} >
        <p><label htmlFor="ma">Mã Loại Người Dùng</label></p>
          <select id="ma" placeholder="mã loại khách hàng" onChange={handlechangetype} {...register("maLoaiNguoiDung", {
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
      {abc()}
    </div>
   </div>
    
  );
};

export default UpdateUser;
