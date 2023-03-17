import { useCallback, useState } from 'react';
import {
  MESSAGE_NOT_FOUND
} from '../../utils/constants';
import { filterMovies } from '../../utils/MovieFilter';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import './SavedMovies.css';

function SavedMovies({ movies, onSaveDelete }) {
  const [foundMovies, setFoundMovies] = useState([]);
  const [isFound, setFound] = useState(false);

  const searchMovies = useCallback((searchData) => {
    setFoundMovies(filterMovies(movies, searchData));
    setFound(true);
  }, [movies]);

  return (
    <main className="saved-movies">
      <SearchForm onSearch={searchMovies} />
      {!isFound ?
        <MoviesCardList
          movies={movies}
          onSaveDelete={onSaveDelete}
          isSavedPage={true} />
        :
        foundMovies?.length > 0 ?
          <MoviesCardList
            movies={foundMovies}
            onSaveDelete={onSaveDelete}
            isSavedPage={true} />
          :
          <p className="saved-movies__not-found">{MESSAGE_NOT_FOUND}</p>
      }
    </main>
  );
}

export default SavedMovies;