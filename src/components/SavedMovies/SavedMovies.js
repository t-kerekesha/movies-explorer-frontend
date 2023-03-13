import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import './SavedMovies.css';

function SavedMovies({ movies }) {
  return (
    <main className="saved-movies">
      <SearchForm />
      <MoviesCardList movies={movies} isSavedPage={true} />
    </main>
  );
}

export default SavedMovies;