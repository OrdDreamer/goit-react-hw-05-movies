import styles from './movies.module.css';
import Loader from '../../components/Loader/Loader';
import MoviesList from '../../components/MoviesList/MoviesList';
import { useEffect, useState } from 'react';
import { getMoviesBySearchQuery } from '../../services/api';
import { useSearchParams } from 'react-router-dom';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQueryParameter = searchParams.get('query');

  const [searchInputValue, setSearchInputValue] = useState('');
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = (event) => {
    event.preventDefault();
    if (!searchInputValue) {
      return;
    }
    setSearchParams({ query: searchInputValue });
    setSearchInputValue('');
  };

  useEffect(() => {
    try {
      setLoading(true);
      getMoviesBySearchQuery(searchQueryParameter)
        .then(({ results }) => {
          setMovies(results);
          setLoading(false);
        });
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  }, [searchQueryParameter]);


  return (
    <div className={styles.container}>
      {loading && <Loader />}
      <form className={styles.searchForm} onSubmit={handleSearch}>
        <input
          className={styles.searchInput}
          type='text'
          value={searchInputValue}
          onChange={(e) => setSearchInputValue(e.target.value)}
          placeholder="Еnter a search query"
        />
        <button
          className={styles.searchButton}
          type='submit'
          disabled={!searchInputValue}
        >
          Search
        </button>
      </form>

      <MoviesList items={movies} />
      {(!movies || !movies.length) && !loading && searchQueryParameter &&
        <p className={styles.nothingFoundText}>Nothing found :(</p>
      }

      {error && <ErrorMessage message={error.message} />}
    </div>
  );
};

export default Movies;
