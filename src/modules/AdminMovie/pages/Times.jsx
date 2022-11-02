import movieAPI from "apis/movieAPI";
import useRequest from "hooks/useRequest";
import { useForm } from "react-hook-form";
import scss from "./styles.module.scss";
import { useNavigate } from "react-router-dom";

const Times = () => {
    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm({
        defaultValues: {
            maPhim: "",
            ngayChieuGioChieu: "",
            maRap: "",
            giaVe: "",
        },
        mode: "onTouched",
      });

      const user = JSON.parse(localStorage.getItem("user"));
      
      const { data: handleAddTime, isLoading } = useRequest(
        (values,user) => movieAPI.ShowTime(values,user.accessToken),
        { isManual: true }
        );
        
        const onSubmit = async (values) => {
          try {
          await handleAddTime(values, user);
          console.log(values);
          // Thành công: gọi notification
          // Redirect về trang MovieList
          navigate("/admin/movies")
        } catch (error) {
          console.log(error)
          // Thất bại: gọi notification hiển thị error
        }
      };
       
  return (
    <div className={scss.center}>
      <h1 className={scss.h1}>Thêm Lịch Chiếu</h1>
      <form onSubmit={handleSubmit(onSubmit)} className={scss.form}>
        <div className={scss.field}>
          <input
            type="text"
            {...register("maPhim", {
              required: {
                value: true,
                message: "Mã phim không được để trống",
              },
            })}
          />
          <span></span>
          <label>Mã Phim</label>
          {errors.maPhim && <p>{errors.maPhim.message}</p>}
        </div>
        <div className={scss.field}>
          <input
            type="text"
            {...register("ngayChieuGioChieu", {
              required: {
                value: true,
                message: "giờ chiếu không được để trống",
              },
            })}
          />
          <span></span>
          <label>Ngày - Giờ chiếu</label>
          {errors.ngayChieuGioChieu && <p>{errors.ngayChieuGioChieu.message}</p>}
        </div>
        <div className={scss.field}>
          <input
            type="text"
            {...register("maRap", {
              required: {
                value: true,
                message: "mã rạp không được để trống",
              },
            })}
          />
          <span></span>
          <label>Mã cụm rạp</label>
          {errors.maRap && <p>{errors.maRap.message}</p>}
        </div>
        <div className={scss.field}>
          <input
            type="text"
            {...register("giaVe", {
              required: {
                value: true,
                message: "giá vé không được để trống",
              },
            })}
          />
          <span></span>
          <label>Giá vé</label>
          {errors.giaVe && <p>{errors.giaVe.message}</p>}
        </div>
        <button >Thêm Lịch Chiếu</button>
      </form>
    </div>
  )
}

export default Times