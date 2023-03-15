import PropTypes from 'prop-types';
import styles from './movies-list.module.css';
import MovieItem from '../MovieItem/MovieItem';

const MoviesList = ({ items }) => {

  return (
    <ul className={styles.list}>
      {
        items.map((item) => (
          <MovieItem data={item} key={item.id}/>
        ))
      }
    </ul>
  );
};

export default MoviesList;

MoviesList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
