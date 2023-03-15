import { useEffect, useState } from 'react';
import { getPopularMovies } from '../../services/api';
import styles from "./home.module.css";
import MoviesList from '../../components/MoviesList/MoviesList';
import Loader from '../../components/Loader/Loader';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';

const Home = () => {

  const [popularMovies, setPopularMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      setLoading(true);
      getPopularMovies().then(({ results }) => {
        setPopularMovies(results);
        setLoading(false);
      });
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  }, []);

  return (
    <div className={styles.container}>
      {loading && <Loader />}
      <h2 className={styles.title}>Trending today</h2>
      <MoviesList items={popularMovies} />
      {(!popularMovies || !popularMovies.length) && !loading &&
        <p className={styles.nothingFoundText}>Nothing found</p>
      }
      {error && <ErrorMessage message={error.message} />}
    </div>
  );
};

export default Home;
