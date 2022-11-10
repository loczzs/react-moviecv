import useRequest from "hooks/useRequest";
import movieAPI from "apis/movieAPI";
// import { Carousel } from "antd";
import Carousel from "react-bootstrap/Carousel";
const TRAILERS = [
  "https://www.youtube.com/watch?v=TOFxa0w_gAo",
  "https://www.youtube.com/watch?v=TOFxa0w_gAo",
  "https://www.youtube.com/watch?v=TOFxa0w_gAo",
];

const Banner = () => {
  // const dispatch = useDispatch();
  // const { banners, isLoading, error } = useSelector((state) => state.banner);
  // useEffect(() => {
  //   dispatch(getBanners());
  // }, []);

  const {
    data: banners,
    isLoading,
    error,
  } = useRequest(() => movieAPI.getBanners());

  const bannersMapped = banners?.map((banner, index) => {
    return { ...banner, trailer: TRAILERS[index] };
  });

  // console.log(bannersMapped);

  return (
    <div>
    <h3  className="mb-1 mt-1 text-white ">Hot Movies</h3>
      <Carousel width={"100%"}>
        {banners?.map((banner) => {
          return (
            <Carousel.Item key={banner.maBanner} width={"100%"}>
              <img
                width={"100%"}
                className="d-block rounded-3 "
                key={banner.maBanner}
                src={banner.hinhAnh}
                alt="First slide"
                height={"400px"}
              />
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Banner;
