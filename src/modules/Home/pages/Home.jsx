import Banner from "../components/Banner";
import Blog from "../components/Blog/Blog";
import Cinema from "../components/Cinema";
import Moviesc from "../components/moviesapchieu/Moviesc";
import MovieShowing from "../components/MovieShowing";
import News from "../components/News/News";

const Home = () => {
  return (
    <div className="bg-white">
      <Banner />

     

      <MovieShowing />
      <Cinema />
      <Moviesc />
      <Blog />
      <News />
    </div>
  );
};

export default Home;
