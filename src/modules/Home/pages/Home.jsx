import Banner from "../components/Banner";
import Blog from "../components/Blog/Blog";
import Cinema from "../components/Cinema";
import MovieShowing from "../components/MovieShowing";
import News from "../components/News/News";

const Home = () => {
  return (
    <div>
      <Banner/>
      <MovieShowing />
      <Cinema />
      <Blog/>
      <News/>
    
    </div>
  );
};

export default Home;
