import { useEffect, useState } from "react";
import Movie from "../components/Movie";
import styles from "./Home.module.css";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  const movieRender = () => {
    return movies.map((movie) => (
      <Movie
        key={movie.id}
        id={movie.id}
        title={movie.title}
        coverImg={movie.medium_cover_image}
        year={movie.year}
        summary={movie.summary}
        genres={movie.genres}
      />
    ));
  };

  return (
    <div className={styles.container}>
      {loading ? (
        <div className={styles.loader}>
          <span>Loading...</span>
        </div>
      ) : (
        <div className={styles.movies}>{movieRender()}</div>
      )}
    </div>
  );
}
export default Home;
