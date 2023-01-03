import React from "react";
import { useForm } from "react-hook-form";
import scss from "./styles.module.scss";
import { useNavigate } from "react-router-dom";
import { addmovie } from "modules/Home/slices/movieadSlice";
import { useDispatch } from "react-redux";
import { message, notification } from "antd";
import { adduser } from "modules/Home/slices/useradSlice";
import { useEffect } from "react";

const AddUser = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    document.body.style.background =
      "linear-gradient(120deg, #2980b9, #8e44ad)";
    return () => {
      document.body.style.background = null;
    };
  });

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
      maNhom: "GP09",
      maLoaiNguoiDung: "",
      hoTen: "",
    },
    mode: "onTouched",
  });

  const handlechangetype = (evt) => {
    const type = evt.target.value;
    setValue("maLoaiNguoiDung", type);
    console.log(type);
  };

  const onSubmit = async (values) => {
    console.log(values);

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
      <div className="p-3 bg-white rounded-3">
        <h1>Thêm User</h1>
        <form onSubmit={handleSubmit(onSubmit)} className={scss.form}>
          <div className={scss.divma}>
            <p>
              <label htmlFor="taiKhoan">Tài Khoản</label>
            </p>
            <input
              // hidden
              id="taiKhoan"
              type="text"
              {...register("taiKhoan", {
                required: {
                  value: true,
                  message: "tài khoản không được để trống",
                },
              })}
            />

            {errors.taiKhoan && <span>{errors.taiKhoan.message}</span>}
          </div>
          <div className={scss.divma}>
            <p>
              <label htmlFor="hoTen">Họ Tên</label>
            </p>
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
          <div className={scss.divma}>
            <p>
              <label htmlFor="email">email</label>
            </p>
            <input
              id="email"
              type="email"
              {...register("email", {
                required: {
                  value: true,
                  message: "email không được để trống",
                },
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: "email không đúng định dạng",
                },
              })}
            />

            {errors.email && <span>{errors.email.message}</span>}
          </div>
          <div className={scss.divma}>
            <p>
              <label htmlFor="SDT">Số Điện Thoại</label>
            </p>
            <input
              type="number"
              {...register("soDT", {
                required: true,
                maxLength: 10,
                minLength: 10,

                pattern: {
                  value: /^[0-9]*$/,
                  message: "không đúng định dạng số",
                },

                // maxLength:11
              })}
            />

            {errors.soDT?.type === "required" && (
              <span>không được để trống</span>
            )}
            {errors.soDT?.type === "maxLength" && (
              <span>nhiều nhất 10 kí tự</span>
            )}
            {errors.soDT?.type === "minLength" && <span>ít nhất 10 kí tự</span>}
          </div>
          <div className={scss.divma}>
            <p>
              <label htmlFor="pass">Mật Khẩu</label>
            </p>
            <input
              // hidden
              type="password"
              id="pass"
              {...register("matKhau", {
                required: {
                  value: true,
                  message: "mật khẩu không được để trống",
                },
              })}
            />

            {errors.matKhau && <span>{errors.matKhau.message}</span>}
          </div>

          <div className={scss.divma}>
            <p>
              <label htmlFor="ma">Mã Loại Người Dùng</label>
            </p>
            <select
              id="ma"
              placeholder="mã loại khách hàng"
              onChange={handlechangetype}
              className="form-control"
              {...register("maLoaiNguoiDung", {
                validate: (value) => value !== "",
              })}
            >
              <option value="">chọn mã loại người dùng</option>
              <option value="KhachHang">khách hàng</option>
              <option value="QuanTri">quản trị</option>
            </select>
            {errors.maLoaiNguoiDung?.type === "validate" && (
              <span>vui lòng chọn mã người dùng</span>
            )}
          </div>

          <button className="mt-3 btn btn-info">Thêm user</button>
        </form>
      </div>
    </div>
  );
};

// export default AddMovie;

export default AddUser;
