import authAPI from "apis/authAPI";
import useRequest from "hooks/useRequest";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { notification } from "antd";
import scss from "./style.module.scss";
import { useEffect } from "react";
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
  useEffect(() => {
  
    document.body.style.background =
      "linear-gradient(120deg, #2980b9, #8e44ad)";
    return () => {
      document.body.style.background = null;
    };
  }, []);

  return (
   <div className={scss.bg}>
     <div className={scss.contain} >
      <h1 className="mb-3 text-center" >Đăng ký</h1>
      <form onSubmit={handleSubmit(onSubmit, onError)} className={scss.form}>
        <div className={scss.inputbox} >
          <input
            required="required"
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
          <span>tài khoản</span>
        
          {errors.taiKhoan && <p className={scss.pauth}>{errors.taiKhoan.message}</p>}
        </div>

        <div className={scss.inputbox} >
          <input
          required="required"
            type="text"
            {...register("matKhau", {
              required: {value: true, message:"mật khẩu không được để trống"},
              pattern:{
                value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                message:"ít nhất 8 ký tự, gồm chữ cái và số",
              },
            })}
          />
          <span >mật khẩu</span>
         
          {errors.matKhau && <p className={scss.pauth}>{errors.matKhau.message}</p>}
        </div>

        <div className={scss.inputbox} >
          <input
          required="required"
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
          <span>email</span>
         
          {errors.email && <p className={scss.pauth}>{errors.email.message}</p>}
        </div>

        <div className={scss.inputbox} >
          <input
          required="required"
            type="text"
            {...register("hoTen", {
              required: {value : true, message:"họ tên không được để trống"},
            })}
          />
          <span>họ và tên</span>
         
          {errors.hoTen && <p className={scss.pauth}>{errors.hoTen.message}</p>}
        </div>

        <div  className={scss.inputbox} >
          <input
          required="required"
            type="number"
            {...register("soDt", {
              required: {value : true, message:"sđt không được để trống"},
            })}
          />
          <span>số điện thoại</span>
          
          {errors.soDt && <p className={scss.pauth}>{errors.soDt.message}</p>}
        </div>

        <button className="btn btn-primary">Đăng Ký</button>
      </form>
    </div>
   </div>
  );
};

export default Register;
