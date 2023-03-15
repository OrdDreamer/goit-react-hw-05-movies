import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import styles from './movie-item.module.css';

const MovieItem = ({ data: { backdrop_path: img, title, id } }) => {
  const location = useLocation();

  return (
    <li className={styles.item}>
      <Link
        className={styles.link}
        to={`/movies/${id}`}
        state={{ from: location }}
      >
        <div className={styles.imageContainer}>
          {img &&
            <img
              className={styles.image}
              src={`https://image.tmdb.org/t/p/w500/${img}`}
              alt='Movie image'
            />
          }
        </div>
        <p>{title}</p>
      </Link>
    </li>
  );
};

export default MovieItem;

MovieItem.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};


