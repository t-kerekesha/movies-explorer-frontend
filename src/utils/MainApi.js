import { URL_API } from "./constants";

export function register(name, email, password) {
  return fetch((URL_API + '/signup'), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name, email, password })
  })
    .then(checkResponse);
}

export function login(email, password) {
  return fetch((URL_API + '/signin'), {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password })
  })
    .then(checkResponse);
}

export function logout() {
  return fetch((URL_API + '/signout'), {
    method: 'POST',
    credentials: 'include',
  })
    .then(checkResponse);
}

export function getUser() {
  return fetch((URL_API + '/users/me'), {
    method: 'GET',
    credentials: 'include',
  })
    .then(checkResponse);
}

export function updateUser(name, email) {
  return fetch((URL_API + '/users/me'), {
    method: 'PATCH',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name, email })
  })
    .then(checkResponse);
}

export function getUserMovies() {
  return fetch((URL_API + '/movies'), {
    method: 'GET',
    credentials: 'include',
  })
    .then(checkResponse);
}

export function saveMovie(movie) {
  return fetch((URL_API + '/movies'), {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(movie)
  })
    .then(checkResponse);
}

export function deleteMovie(movieId) {
  return fetch((URL_API + '/movies/' + movieId), {
    method: 'DELETE',
    credentials: 'include',
  })
    .then(checkResponse);
}

function checkResponse(response) {
  if (response.ok) {
    return response.json();
  } else {
    return response.json().then((error) => Promise.reject(error));
  }
}