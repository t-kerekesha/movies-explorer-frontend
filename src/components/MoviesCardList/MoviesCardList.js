import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

function MoviesCardList({ movies, isSavedPage }) {
  return (
    <section className="cards">
      <ul className="cards__list">
        {movies.map((movie) => (
          <MoviesCard key={movie.movieId}
            movie={movie}
            isSavedPage={isSavedPage} />
        ))}
      </ul>
    </section>
  );
}

export default MoviesCardList;