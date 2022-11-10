import Banner from "../components/Banner";
import Blog from "../components/Blog/Blog";
import Cinema from "../components/Cinema";
import Moviesc from "../components/moviesapchieu/Moviesc";
import MovieShowing from "../components/MovieShowing";
import News from "../components/News/News";

const Home = () => {
  return (
    <div className="bg-white">
      <div className=" p-3 pt-0 " style={{ background: "black" }}>
        <div className="">
          
          <div className="row">
            <div className="col-sm-7 ">
              <Banner />
            </div>
            <div className="col-sm-5">
              <Moviesc />
            </div>
          </div>
        </div>
      </div>
      <MovieShowing />
      <Cinema />
      <Blog />
      <News />
    </div>
  );
};

export default Home;
