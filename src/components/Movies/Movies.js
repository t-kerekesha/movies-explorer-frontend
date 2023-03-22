import { useCallback, useEffect, useState } from 'react';
import { useResize } from '../../hooks/useResize';
import {
  LOADING_STEP_SCREEN_LARGE,
  LOADING_STEP_SCREEN_MEDIUM,
  LOADING_STEP_SCREEN_SMALL,
  QUANTITY_MOVIES_SCREEN_LARGE,
  QUANTITY_MOVIES_SCREEN_MEDIUM,
  QUANTITY_MOVIES_SCREEN_SMALL,
  MESSAGE_NOT_FOUND
} from '../../utils/constants';
import { downloadMoreMovies, downloadMovies, filterMovies } from '../../utils/MovieFilter';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import SearchForm from '../SearchForm/SearchForm';
import './Movies.css';

function Movies({ movies, savedMovies, onSaveClick, onSaveDelete, isLoadingMovies, isLoading }) {
  const [foundMovies, setFoundMovies] = useState([]);
  const [searchData, setSearchData] = useState(null);
  const [downloadedMovies, setDownloadedMovies] = useState([]);
  const [showButtonMoreMovies, setShowButtonMoreMovies] = useState(false);
  const { width: screenWidth, isScreenSmall, isScreenMedium, isScreenLarge } = useResize();

  useEffect(() => {
    if (isScreenLarge) {
      setDownloadedMovies(downloadMovies(foundMovies, QUANTITY_MOVIES_SCREEN_LARGE));
    } else if (isScreenMedium) {
      setDownloadedMovies(downloadMovies(foundMovies, QUANTITY_MOVIES_SCREEN_MEDIUM));
    } else {
      setDownloadedMovies(downloadMovies(foundMovies, QUANTITY_MOVIES_SCREEN_SMALL));
    }
  }, [foundMovies, isScreenLarge, isScreenMedium, isScreenSmall, screenWidth]);

  useEffect(() => {
    if (foundMovies?.length === downloadedMovies?.length) {
      setShowButtonMoreMovies(false);
    } else {
      setShowButtonMoreMovies(true);
    }
  }, [foundMovies, downloadedMovies]);

  useEffect(() => {
    setFoundMovies(JSON.parse(localStorage.getItem('foundMovies')));
    setSearchData(JSON.parse(localStorage.getItem('searchData')));
  }, [setFoundMovies, setSearchData]);

  function handleMoreClick() {
    if (isScreenLarge) {
      setDownloadedMovies(downloadMoreMovies(foundMovies, downloadedMovies, LOADING_STEP_SCREEN_LARGE));
    } else if (isScreenMedium) {
      setDownloadedMovies(downloadMoreMovies(foundMovies, downloadedMovies, LOADING_STEP_SCREEN_MEDIUM));
    } else {
      setDownloadedMovies(downloadMoreMovies(foundMovies, downloadedMovies, LOADING_STEP_SCREEN_SMALL));
    }
  }

  // Поиск и фильтрация фильмов
  const searchMovies = useCallback((searchData) => {
    const searchResults = filterMovies(movies, searchData);
    setFoundMovies(searchResults);
    setSearchData(searchData);
    localStorage.setItem('searchData', JSON.stringify(searchData));
    localStorage.setItem('foundMovies', JSON.stringify(searchResults));
  }, [movies]);

  return (
    <main className="movies">
      <SearchForm
        onSearch={searchMovies}
        searchData={JSON.parse(localStorage.getItem('searchData'))}
        foundMovies={foundMovies} />
      {isLoadingMovies ?
        <Preloader />
        :
        searchData ?
          foundMovies?.length > 0 ?
            <MoviesCardList
              movies={downloadedMovies}
              savedMovies={savedMovies}
              onSaveClick={onSaveClick}
              onSaveDelete={onSaveDelete}
              isLoading={isLoading}
              isSavedPage={false} />
            :
            <p className="movies__not-found">{MESSAGE_NOT_FOUND}</p>
          :
          <></>
      }
      <section className="movies__sectoin_more">
        <button className={`movies__button-more ${showButtonMoreMovies && "movies__button-more_visible"}`}
          type="button"
          onClick={handleMoreClick}>
          Ещё
        </button>
      </section>
    </main>
  );
}

export default Movies;