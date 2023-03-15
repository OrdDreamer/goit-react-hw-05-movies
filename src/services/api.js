import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    api_key: '08357b2c6f72862d20b7459882ed4543',
  },
});

export const getMoviesBySearchQuery = async (query) => {
  const { data } = await instance.get('search/movie', {
    params: {
      query,
    },
  });
  return data;
};

export const getMovieById = async (id) => {
  const { data } = await instance.get(`movie/${id}`);
  return data;
};

export const getPopularMovies = async () => {
  const { data } = await instance.get('trending/movie/day');
  return data;
};

export const getCredits = async (id) => {
  const { data } = await instance.get(`/movie/${id}/credits`);
  return data;
};

export const getReviews = async (id) => {
  const { data } = await instance.get(`/movie/${id}/reviews`);
  return data;
};
