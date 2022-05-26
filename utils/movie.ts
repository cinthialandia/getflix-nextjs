export interface MovieSearchResult {
  Title: string;
  Poster: string;
  Year: string;
  imdbID: string;
}

export interface MovieSearch {
  Search: MovieSearchResult[];
  Response: string;
  totalResults: string;
}

export interface Movie {
  Actors: string;
  Awards: string;
  Director: string;
  Genre: string;
  Plot: string;
  Rated: string;
  imdbRating: string;
  Title: string;
  imdbID: string;
  Poster: string;
  Year: string;
  Response: string;
}

const API_KEY = "320f6ab2";

export const getMovie = async (id: string) => {
  const response = await fetch(
    `http://www.omdbapi.com/?i=${id}&apikey=${API_KEY}`
  );

  const movie = (await response.json()) as Movie;

  if (movie.Response === "False") {
    return;
  }

  return movie;
};

export const searchMovies = async (q: string) => {
  const response = await fetch(
    `http://www.omdbapi.com/?s=${q}&apikey=${API_KEY}`
  );

  const movies = (await response.json()) as MovieSearch;

  if (movies.Response === "False") {
    return;
  }

  return movies;
};
