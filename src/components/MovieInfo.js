import PropTypes from "prop-types";

function MovieInfo({ url, runtime, longTitle, largeImg, description, genres }) {
  return (
    <div>
      <img src={largeImg} alt={longTitle} />
      <h2>
        <a href={url}>{longTitle}</a>
      </h2>
      <p>상영시간: {runtime}분</p>
      <p>상세 내용: {description}</p>
      <ul>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
  );
}

MovieInfo.propTypes = {
  url: PropTypes.string.isRequired,
  runtime: PropTypes.number.isRequired,
  longTitle: PropTypes.string.isRequired,
  largeImg: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default MovieInfo;
