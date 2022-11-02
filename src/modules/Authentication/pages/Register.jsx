import authAPI from "apis/authAPI";
import useRequest from "hooks/useRequest";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { notification } from "antd";
import scss from "./style.module.scss";

// data: taiKhoan, matKhau, email, hoTen, soDt

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      taiKhoan: "",
      matKhau: "",
      email: "",
      hoTen: "",
      soDt: "",
    },
    // Chế độ kích hoạt validation, mặc định là onSubmit
    mode: "onTouched",
  });
  const navigate = useNavigate();

  const { data: handleRegister, isLoading } = useRequest(
    (values) => authAPI.register(values),
    { isManual: true }
  );

  const onSubmit = async (values) => {
    try {
      await handleRegister(values);
      // Sau khi đăng ký thành công, ta cần chuyển user về trang login
      navigate("/login");
    } catch (error) {
      // Đăng ký thất bại show error ra cho user thấy
      notification.error({
        message: "Đăng ký thất bại",
        description: error,
      });
    }
  };

  const onError = (error) => {
    console.log(error);
  };

  return (
    <div className={scss.center}>
      <h1 className={scss.h1}>Đăng ký</h1>
      <form onSubmit={handleSubmit(onSubmit, onError)} className={scss.form}>
        <div className={scss.field}>
          <input
            type="text"
            {...register("taiKhoan", {
              required: {
                value: true,
                message : "Tài khoản không được để trống",
              },
              minLength: {
                value: 5,
                message: "Tài khoản phải từ 5 đến 20 ký tự",
              },
              maxLength: {
                value: 20,
                message: "Tài khoản phải từ 5 đến 20 ký tự",
              },
            })}
          />
          <span></span>
          <label>Username</label>
          {errors.taiKhoan && <p>{errors.taiKhoan.message}</p>}
        </div>

        <div className={scss.field}>
          <input
            type="text"
            {...register("matKhau", {
              required: {value: true, message:"mật khẩu không được để trống"},
              pattern:{
                value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                message:"ít nhất 8 ký tự, gồm chữ cái và số",
              },
            })}
          />
          <span></span>
          <label >Password</label>
          {errors.matKhau && <p>{errors.matKhau.message}</p>}
        </div>

        <div className={scss.field}>
          <input
            type="text"
            {...register("email", {
              required: { value: true, message: "Email không được để trống" },
              pattern: {
                value:
                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: "Email không đúng định dạng",
              },
            })}
          />
          <span></span>
          <label>Email</label>
          {errors.email && <p>{errors.email.message}</p>}
        </div>

        <div className={scss.field}>
          <input
            type="text"
            {...register("hoTen", {
              required: {value : true, message:"họ tên không được để trống"},
            })}
          />
          <span></span>
          <label>Fullname</label>
          {errors.hoTen && <p>{errors.hoTen.message}</p>}
        </div>

        <div className={scss.field}>
          <input
            type="text"
            {...register("soDt", {
              required: {value : true, message:"sđt không được để trống"},
            })}
          />
          <span></span>
          <label>PhoneNumber</label>
          {errors.soDt && <p>{errors.soDt.message}</p>}
        </div>

        <button>Đăng Ký</button>
      </form>
    </div>
  );
};

export default Register;
