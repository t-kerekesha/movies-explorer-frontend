// import { useEffect, useState } from "react";

export function useFilter(movies, searchData) {
  const { keyword, isShort } = searchData;
  let searchResults = movies;
  if (isShort === true) {
    searchResults = searchResults.filter((movie) => {
      return movie.duration <= 40;
    });
  }
  searchResults = searchResults.filter((movie) => {
    return movie.nameRU.toLowerCase().includes(keyword.toLowerCase())
      || movie.nameEN.toLowerCase().includes(keyword.toLowerCase());
  });
  return searchResults;
}