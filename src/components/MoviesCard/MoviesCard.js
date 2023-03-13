import './MoviesCard.css';

function MoviesCard({ movie, isSavedPage }) {

  function handleSaveClick() {
    movie.isSaved = !movie.isSaved;
  }

  function handleDeleteClick() { }
  // const isSaved = card.owner.some((user) => {
  //   return user._id === currentUser?._id;
  // });

  const cardSaveButtonClassName = (
    `movies-card__button movies-card__button_type_save
    ${movie.isSaved && "movies-card__button_type_save-active"}`
  );

  return (
    <li>
      <article className="movies-card">
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
            {movie.duration}
          </p>
          {!isSavedPage ?
            <button className={cardSaveButtonClassName}
              type="button"
              onClick={handleSaveClick}
              aria-label="Сохранить" />
            :
            <button className="movies-card__button movies-card__button_type_delete"
              type="button"
              onClick={handleDeleteClick}
              aria-label="Удалить" />
          }
        </div>
      </article>
    </li>
  );
}

export default MoviesCard;