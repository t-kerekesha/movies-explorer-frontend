import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { initialMovies } from '../../utils/constants';
import ErrorMessagePopup from '../ErrorMessagePopup/ErrorMessagePopup';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import PageNotFound from '../PageNotFound/PageNotFound';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import SavedMovies from '../SavedMovies/SavedMovies';

import './App.css';

function App() {
  const [currentUser, setCurrentUser] = useState(({
    name: 'Виталий',
    email: 'pochta@yandex.ru',
  }));
  const [loggedIn, setLoggedIn] = useState(true);
  const [movies, setMovies] = useState(initialMovies);
  const [isLoading, setLoading] = useState(false);
  const [isErrorMessagePopupOpen, setErrorMessagePopupOpen] = useState(false);

  const savedMovies = initialMovies.filter(function (movie) {
    return movie.isSaved === true;
  });

  function closePopup() {
    setErrorMessagePopupOpen(false);
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="app">
        <Routes>
          <Route path="/" element={
            <>
              <Header
                isLoggedIn={loggedIn}
                isPromoPage="true" />
              <Main />
              <Footer />
            </>
          } />
          <Route path="/movies" element={
            <>
              <Header isLoggedIn={loggedIn} />
              <Movies
                movies={movies}
                isLoading={isLoading} />
              <Footer />
            </>
          } />
          <Route path="/saved-movies" element={
            <>
              <Header isLoggedIn={loggedIn} />
              <SavedMovies
                movies={savedMovies} />
              <Footer />
            </>
          } />
          <Route path="/profile" element={
            <>
              <Header isLoggedIn={loggedIn} />
              <Profile />
            </>
          } />
          <Route path="/signin" element={<Login />} />
          <Route path="/signup" element={<Register />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>

        <ErrorMessagePopup
          isOpen={isErrorMessagePopupOpen}
          onClose={closePopup}
          message="" />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
