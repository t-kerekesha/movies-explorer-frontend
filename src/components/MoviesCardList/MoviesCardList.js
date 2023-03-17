import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

function MoviesCardList({ movies, savedMovies, onSaveClick, onSaveDelete, isSavedPage }) {
  return (
    <section className="cards">
      <ul className="cards__list">
        {movies?.map((movie) => (
          <MoviesCard key={movie.movieId}
            movie={movie}
            savedMovies={savedMovies}
            onSaveClick={onSaveClick}
            onSaveDelete={onSaveDelete}
            isSavedPage={isSavedPage} />
        ))}
      </ul>
    </section>
  );
}

export default MoviesCardList;