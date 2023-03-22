// import { useContext } from 'react';
// import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { getTimeFromMinutes } from '../../utils/getTimeFromMinutes';
import './MoviesCard.css';

function MoviesCard({ movie, savedMovies, onSaveClick, onSaveDelete, isLoading, isSavedPage }) {
  // const currentUser = useContext(CurrentUserContext);

  function handleMovieClick(event) {
    if (event.target.classList.contains('movies-card__button')) {
      event.preventDefault();
    }
  }

  function handleSaveClick() {
    isSaved ?
      onSaveDelete(movie)
      :
      onSaveClick(movie);
  }

  function handleDeleteClick() {
    onSaveDelete(movie);
  }

  const isSaved = savedMovies?.some((savedMovie) => {
    return savedMovie.movieId === movie?.movieId;
  });
  // const isSaved = movie.owner?._id === currentUser?._id;
  const cardSaveButtonClassName = (
    `movies-card__button movies-card__button_type_save
    ${isSaved && "movies-card__button_type_save-active"}`
  );

  return (
    <li>
      <a href={movie.trailerLink}
        target="_blank" rel="noopener noreferrer"
        className="link"
        onClick={handleMovieClick}>
        <article className="movies-card"
          onClick={handleMovieClick}>
          <div className="movies-card__aspect-ratio">
            <img src={movie.image}
              className="movies-card__image"
              alt={movie.nameRu} />
          </div>
          <div className="movies-card__info">
            <h2 className="movies-card__name">
              {movie.nameRU}
            </h2>
            <p className="movies-card__duration">
              {getTimeFromMinutes(movie.duration)}
            </p>
            {!isSavedPage ?
              <button className={cardSaveButtonClassName}
                type="button"
                onClick={handleSaveClick}
                disabled={isLoading}
                aria-label="Сохранить" />
              :
              <button className="movies-card__button movies-card__button_type_delete"
                type="button"
                onClick={handleDeleteClick}
                disabled={isLoading}
                aria-label="Удалить" />
            }
          </div>
        </article>
      </a>
    </li>
  );
}

export default MoviesCard;