import { NavLink, Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';
import { useCallback, useEffect, useState } from 'react';
import { getMovieById } from '../../services/api';
import styles from './movies-details.module.css';
import Loader from '../../components/Loader/Loader';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';

const MoviesDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [genresStr, setGenresStr] = useState('');
  const [userScore, setUserScore] = useState(0);
  const [year, setYear] = useState();

  const [error, setError] = useState(null);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || '/';


  useEffect(() => {
    setMovie(null);
    const fetchMovie = async () => {
      try {
        const result = await getMovieById(id);
        setMovie(result);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchMovie();
  }, [id]);

  useEffect(() => {
    if (!movie) {
      return;
    }
    const genresStr = movie.genres.map(item => item.name).join(', ');
    setGenresStr(genresStr);
    const rating = Math.floor(movie.vote_average * 10);
    setUserScore(rating);
    const year = new Date(movie.release_date).getFullYear();
    setYear(year);
  }, [movie]);

  const goBack = useCallback(() => navigate(from), [navigate, from]);

  if (!movie) {
    return (<Loader />);
  }

  return (
    <div className={styles.container}>
      <button className={styles.goBackButton} onClick={goBack}>
        Go back
      </button>
      {error
        ? (<ErrorMessage message={error && error.message} />)
        : (
          <div className={styles.infoContainer}>
            <div className={styles.imageContainer}>
              <img
                className={styles.image}
                src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
                alt='Movie image'
              />
            </div>
            <h2>
              {movie.original_title}&nbsp;
              <span>({year})</span>
            </h2>
            <p>
              User score: <span>{userScore}%</span>
            </p>

            <div>
              <h3>Overview</h3>
              <p>{movie?.overview}</p>
            </div>

            <div>
              <h3>Genres</h3>
              <p className={styles.genresStr}>{genresStr}</p>
            </div>
            <div className={styles.additionalInformationContainer}>
              <h3 className={styles.additionalInformation}>Additional information</h3>
              <NavLink
                className={({ isActive }) => (
                  `${styles.additionalLink} ${isActive ? styles.additionalLinkActive : ''}`
                )}
                to='cast' state={{ from }}
              >
                Cast
              </NavLink>
              <NavLink
                className={({ isActive }) => (
                  `${styles.additionalLink} ${isActive ? styles.additionalLinkActive : ''}`
                )}
                to='reviews' state={{ from }}
              >
                Reviews
              </NavLink>
            </div>
            <Outlet />
          </div>
        )}
    </div>
  );
};

export default MoviesDetails;
