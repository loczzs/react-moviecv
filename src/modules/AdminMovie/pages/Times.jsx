import movieAPI from "apis/movieAPI";
import useRequest from "hooks/useRequest";
import { useForm } from "react-hook-form";
import scss from "./time.module.scss";
import { useNavigate, useParams } from "react-router-dom";
import { message, notification } from "antd";
import Logo from "modules/Home/components/Cinema/Logo";
import { useSelector, useDispatch } from "react-redux";
import { Select } from "antd";
import { useEffect } from "react";
// import Item from "antd/lib/list/Item";
// import { Select } from "antd";
const { Option } = Select;


const onChange = (value) => {
  console.log(`selected ${value}`);
};

const Times = () => {
  const navigate = useNavigate();
  const { movieId } = useParams();
  const { addresses } = useSelector((state) => state.cinema);
  console.log(addresses);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    defaultValues: {
      maPhim: "",
      ngayChieuGioChieu: "",
      maRap: "",
      giaVe: "",
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

  const user = JSON.parse(localStorage.getItem("user"));

  const { data: handleAddTime, isLoading } = useRequest(
    (values, user) => movieAPI.ShowTime(values, user.accessToken),
    { isManual: true }
  );

  const onSubmit = async (values) => {
    console.log(values);
    try {
      await handleAddTime(values, user);
      console.log(values);
      notification.success({
        message: "tạo lịch chiếu  thành công",
      });
      // Thành công: gọi notification
      // Redirect về trang MovieList
      navigate("/admin/movies");
    } catch (error) {
      notification.error({
        message: error,
        description: error,
      });
      // Thất bại: gọi notification hiển thị error
    }
  };
  function setinput() {
    setValue("maPhim", movieId);
  }
  const onChange = (value) => {
    setValue("maRap",value)
  };

  return (
  <div className={scss.center}>
      <div className="p-3 bg-white rounded-3" >
      <h1 >Thêm Lịch Chiếu</h1>
      <form className={scss.formTime} onSubmit={handleSubmit(onSubmit)} >
        <div className={scss.itemTime} >
        <p className={scss.pTime}><label htmlFor="maPhim">Mã Phim</label></p>
          <input

            id="maPhim"
            className={scss.Input}
            type="text"
            {...register("maPhim", {
              required: {
                value: true,
                message: "Mã phim không được để trống",
              },
            })}
          />
          
          {errors.maPhim && <p>{errors.maPhim.message}</p>}
        </div>
        <div className={scss.itemTime}>
        <p className={scss.pTime}><label htmlFor="date">Ngày - Giờ Chiếu</label></p>
            <p className="mb-1"> format : 22/07/2022 19:00:00</p>
          <input
            type="text"
            className={scss.Input}
            id="date"
            {...register("ngayChieuGioChieu", {
              required: {
                value: true,
                message: "giờ chiếu không được để trống",
              },
            })}
          />
          
          {errors.ngayChieuGioChieu && (
            <p>{errors.ngayChieuGioChieu.message}</p>
          )}
        </div>
        <div className="mt-3">
        <p>Chọn Hệ Thống Rạp</p>
          <Logo />
        </div>
       <div style={{marginTop:"5px"}} className={scss.itemTime}>
       <p className={scss.pTime}>Mã Cụm Rạp</p>
        <Select
                // mode="multiple"
                style={{
                  width: "100%",
                }}
                placeholder="Chọn Mã Cụm Rạp"
                onChange={onChange}
              >
                {addresses?.map((ad) => {
                  return <Option key={ad.maCumRap}>{ad.tenCumRap}</Option>;
                })}
              </Select>
       </div>
        <div className={scss.itemTime} >
        <p className={scss.pTime}><label htmlFor="cost">Giá Vé</label></p>
          <input
            type="text"
            id="cost"
            className={scss.Input}
            {...register("giaVe", {
              required: {
                value: true,
                message: "giá vé không được để trống",
              },
            })}
          />
          
          {errors.giaVe && <p>{errors.giaVe.message}</p>}
        </div>
        <button className="btn btn-info mt-3">Thêm Lịch Chiếu</button>
        {setinput()}
      </form>
    </div>
  </div>
  );
};

export default Times;
