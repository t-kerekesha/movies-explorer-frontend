import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import SearchForm from '../SearchForm/SearchForm';
import './Movies.css';

function Movies({ movies, isLoading, isSaved }) {

  return (
    <main className="movies">
      <SearchForm />
      {isLoading ?
        <Preloader />
        :
        movies.length > 0 ?
          <MoviesCardList movies={movies} isSaved={false} />
          :
          <p>Ничего не найдено</p>
      }
      <section className="movies__sectoin_more">
        <button className="movies__button-more"
          type="button">
          Ещё
        </button>
      </section>
    </main>
  );
}

export default Movies;