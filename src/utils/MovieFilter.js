// Поиск и фильтрация фильмов
export function filterMovies(movies, searchData) {
  let searchResults = movies;
  if (movies && searchData) {
    const { keyword, isShort } = searchData;
    if (isShort === true) {
      searchResults = searchResults.filter((movie) => {
        return movie.duration <= 40;
      });
    }
    searchResults = searchResults.filter((movie) => {
      return movie.nameRU.toLowerCase().includes(keyword.toLowerCase())
        || movie.nameEN.toLowerCase().includes(keyword.toLowerCase());
    });
  }
  return searchResults;
}

export function downloadMovies(movies = [], initialCount = 0) {
  if (movies) {
    if (movies?.length < initialCount) {
      return movies;
    } else {
      return movies.slice(0, initialCount);
    }
  }
}

export function downloadMoreMovies(initialMovies = [], sliceMovies = [], step = 0) {
  const length = sliceMovies.length + step;
  return initialMovies.slice(0, length);
}