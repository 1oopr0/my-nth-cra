import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieInfo from "../components/MovieInfo";

function Detail() {
  const { id } = useParams();

  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState({});
  const getMovieDetail = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json.data.movie);
    console.log(json.data.movie);
    setLoading(false);
  };
  useEffect(() => {
    getMovieDetail();
  }, []);

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          {
            <MovieInfo
              url={movie.url}
              runtime={movie.runtime}
              longTitle={movie.title_long}
              largeImg={movie.large_cover_image}
              description={movie.description_intro}
              genres={movie.genres}
            />
          }
        </div>
      )}
    </div>
  );
}
export default Detail;
