import { useCallback, useEffect, useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { MESSAGE_AUTH_SUCCESSFUL, MESSAGE_SERVER_ERROR, URL_DATA } from '../../utils/constants';
import MessagePopup from '../MessagePopup/MessagePopup';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import PageNotFound from '../PageNotFound/PageNotFound';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import SavedMovies from '../SavedMovies/SavedMovies';
import * as MoviesApi from '../../utils/MoviesApi';
import * as MainApi from '../../utils/MainApi';

import './App.css';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  const [isMessagePopupOpen, setMessagePopupOpen] = useState(false);
  const [message, setMessage] = useState('');

  // Авторизация пользователя
  const login = useCallback((userData) => {
    setLoading(true);
    MainApi.login(userData.email, userData.password)
      .then((dataFromServer) => {
        if (dataFromServer._id) {
          dataFromServer.email = userData.email;
          setCurrentUser(dataFromServer);
          setLoggedIn(true);
          localStorage.setItem('userId', dataFromServer._id);
        }
      })
      .catch((error) => {
        setMessagePopupOpen(true);
        setMessage(error.message);
      })
      .finally(() => setLoading(false));
  }, []);

  // Регистрация пользователя
  const register = useCallback((userData) => {
    console.log(userData)
    setLoading(true);
    MainApi.register(userData.name, userData.email, userData.password)
      .then((dataFromServer) => {
        if (dataFromServer._id) {
          login(userData);
        }
      })
      .catch((error) => {
        setMessagePopupOpen(true);
        setMessage(error.message);
      })
      .finally(() => setLoading(false));
  }, [login]);

  // Редактирование профиля
  const updateUser = useCallback((userData) => {
    setLoading(true);
    MainApi.updateUser(userData.name, userData.email)
      .then((dataFromServer) => {
        setCurrentUser(dataFromServer);
        setMessagePopupOpen(true);
        setMessage(MESSAGE_AUTH_SUCCESSFUL);
      })
      .catch((error) => {
        setMessagePopupOpen(true);
        setMessage(error.message);
      })
      .finally(() => setLoading(false));
  }, []);

  // Выход из регистрации
  const logout = useCallback(() => {
    setLoading(true);
    MainApi.logout()
      .then(() => {
        setLoggedIn(false);
        localStorage.removeItem('userId');
        localStorage.removeItem('movies');
        localStorage.removeItem('foundMovies');
        localStorage.removeItem('searchData');
        setCurrentUser(null);
        setMovies([]);
      })
      .catch((error) => {
        setMessagePopupOpen(true);
        setMessage(error.message);
      })
      .finally(() => setLoading(false));
  }, []);

  // Проверка регистрации пользователя
  const loginCheck = useCallback(() => {
    setLoading(true);
    MainApi.getUser()
      .then((user) => {
        setCurrentUser(user);
        setLoggedIn(true);
      })
      .catch((error) => {
        setMessagePopupOpen(true);
        setMessage(error.message);
      })
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    const userId = localStorage.getItem('userId');
    if (userId) {
      loginCheck();
    }
  }, [loginCheck]);

  // Загрузка фильмов из beatfilm-movies
  const getMovies = useCallback(() => {
    setLoading(true);
    MoviesApi.getMovies()
      .then((movies) => {
        const recompileMovie = movies.map((movie) => {
          return movie = {
            country: movie.country,
            director: movie.director,
            duration: movie.duration,
            year: movie.year,
            description: movie.description,
            image: URL_DATA + movie.image.url,
            trailerLink: movie.trailerLink,
            thumbnail: URL_DATA + movie.image.formats.thumbnail.url,
            movieId: movie.id,
            nameRU: movie.nameRU,
            nameEN: movie.nameEN,
          };
        });
        localStorage.setItem('movies', JSON.stringify(recompileMovie));
        setMovies(recompileMovie);
      })
      .catch((error) => {
        setMessagePopupOpen(true);
        setMessage(MESSAGE_SERVER_ERROR);
      })
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    if (loggedIn) {
      getMovies();
    }
  }, [loggedIn, getMovies]);

  useEffect(() => {
    setMovies(JSON.parse(localStorage.getItem('movies')));
  }, [setMovies]);

  // Загрузка сохраненных фильмов
  const getUserMovies = useCallback(() => {
    setLoading(true);
    MainApi.getUserMovies()
      .then((dataFromServer) => setSavedMovies(dataFromServer))
      .catch((error) => {
        setMessagePopupOpen(true);
        setMessage(error.message);
      })
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    if (loggedIn) {
      getUserMovies();
    }
  }, [loggedIn, getUserMovies]);

  // Сохранение фильма
  const handleSaveClick = useCallback((movie) => {
    MainApi.saveMovie(movie)
      .then((newMovie) => setSavedMovies([newMovie, ...savedMovies]))
      .catch((error) => {
        setMessagePopupOpen(true);
        setMessage(error.message);
      });
  }, [savedMovies]);

  // Удаление фильма из сохраненных
  const handleSaveDeleteClick = useCallback((movie) => {
    setLoading(true);
    savedMovies?.forEach((savedMovie) => {
      if (savedMovie?.movieId === movie?.movieId) {
        movie = savedMovie;
      }
    });
    MainApi.deleteMovie(movie._id)
      .then(() => setSavedMovies(savedMovies.filter(item => item._id !== movie._id)))
      .catch((error) => {
        setMessagePopupOpen(true);
        setMessage(error.message);
      })
      .finally(() => setLoading(false));
  }, [savedMovies]);

  function closePopup() {
    setMessagePopupOpen(false);
    setMessage('');
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
            <ProtectedRoute
              loggedIn={loggedIn}>
              <Header isLoggedIn={loggedIn} />
              <Movies
                movies={movies}
                savedMovies={savedMovies}
                isLoading={isLoading}
                onSaveClick={handleSaveClick}
                onSaveDelete={handleSaveDeleteClick} />
              <Footer />
              {!loggedIn && <Navigate to="/" replace />}
            </ProtectedRoute>
          } />
          <Route path="/saved-movies" element={
            <ProtectedRoute
              loggedIn={loggedIn}>
              <Header isLoggedIn={loggedIn} />
              <SavedMovies
                movies={savedMovies}
                onSaveDelete={handleSaveDeleteClick} />
              <Footer />
            </ProtectedRoute>
          } />
          <Route path="/profile" element={
            <ProtectedRoute
              loggedIn={loggedIn}>
              <Header isLoggedIn={loggedIn} />
              <Profile
                loggedIn={loggedIn}
                onUpdateUser={updateUser}
                onLogout={logout} />
            </ProtectedRoute>
          } />
          <Route path="/signin" element={
            loggedIn ?
              <Navigate to="/movies" replace /> :
              <Login
                loggedIn={loggedIn}
                onLogin={login} />
          } />
          <Route path="/signup" element={
            loggedIn ?
              <Navigate to="/movies" replace /> :
              <Register
                loggedIn={loggedIn}
                onRegister={register} />
          } />
          <Route path="*" element={<PageNotFound />} />
          {/* <Route path="/" element={!loggedIn && <Navigate to="/" replace />} /> */}
        </Routes>

        <MessagePopup
          isOpen={isMessagePopupOpen}
          onClose={closePopup}
          message={message} />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
