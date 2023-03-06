// import axios from "axios";
// Key themoviedb
const API_KEY = "ea38c7f2f57ff22a3e179a8eceaea2bb";
const BASE_URL = "https://api.themoviedb.org/3";
export const BASE_IMG_URL = "https://image.tmdb.org/t/p";

export const fetcher = (...args) => fetch(...args).then((res) => res.json());

export const requests = {
  fetchTrending: `${BASE_URL}/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=28`,
  fetchComedyMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=35`,
  fetchHorrorMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=27`,
  fetchRomanceMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=10749`,
  fetchDocumentaries: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=99`,
  fetchGenres: `${BASE_URL}/genre/movie?api_key=${API_KEY}&language=en-US`,
};

export const tmdbAPI = {
  getMovies: (value = "28") => {
    return `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=${value}`;
  },
  getTrending: () => {
    return `${BASE_URL}/trending/all/week?api_key=${API_KEY}&language=en-US`;
  },
  getTopRated: () => {
    return `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US`;
  },
  getOriginal: () => {
    return `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_networks=213`;
  },
  getGenres: () => {
    return `${BASE_URL}/genre/movie/list?api_key=${API_KEY}&with_networks=213`;
  },
};

// export const getDataFromTMDB = async () => {
//   const [
//     netflixOriginals,
//     trendingNow,
//     topRated,
//     actionMovies,
//     comedyMovies,
//     horrorMovies,
//     romanceMovies,
//     documentaries,
//   ] = await Promise.all([
//     fetch(requests.fetchTrending).then((res) => res.json()),
//     fetch(requests.fetchNetflixOriginals).then((res) => res.json()),
//     fetch(requests.fetchTopRated).then((res) => res.json()),
//     fetch(requests.fetchActionMovies).then((res) => res.json()),
//     fetch(requests.fetchComedyMovies).then((res) => res.json()),
//     fetch(requests.fetchHorrorMovies).then((res) => res.json()),
//     fetch(requests.fetchRomanceMovies).then((res) => res.json()),
//     fetch(requests.fetchDocumentaries).then((res) => res.json()),
//   ]);

//   return {
//     netflixOriginals: netflixOriginals.results,
//     trendingNow: trendingNow.results,
//     topRated: topRated.results,
//     actionMovies: actionMovies.results,
//     comedyMovies: comedyMovies.results,
//     horrorMovies: horrorMovies.results,
//     romanceMovies: romanceMovies.results,
//     documentaries: documentaries.results,
//   };
// };
