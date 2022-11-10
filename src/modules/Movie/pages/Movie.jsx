import React from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import Overview from "../components/Overview";
import Showtimes from "../components/Showtimes";

const Movie = () => {
  // useParams là hook để lấy giá trị params trên url
  const { movieId } = useParams();
 useEffect(()=>{
  
   
      window.scrollTo({
          top:0,
          behavior:"smooth"
      })
   
  
 },[])

  return (
    <div >
      <Overview  movieId={movieId} />
      <Showtimes movieId={movieId} />
    </div>
  );
};

export default Movie;
