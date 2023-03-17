import { URL_BEATFILM_MOVIES } from "./constants";

export function getMovies() {
  return fetch((URL_BEATFILM_MOVIES), {
    method: 'GET',
  })
  .then(checkResponse);
}

function checkResponse(response) {
  if(response.ok) {
    return response.json();
  } else {
    return response.json().then((error) => Promise.reject(error));
  }
}