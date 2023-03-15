import PropTypes from 'prop-types';
import styles from './cast-item.module.css';

const CastItem = ({ id, name, character, img }) => {
  return (
    <li key={id} className={styles.item}>
      <div className={styles.imageContainer}>
        {img &&
          <img
            className={styles.image}
            src={`https://image.tmdb.org/t/p/w300/${img}`}
            alt=''
          />}
      </div>
      <p>{name}</p>
      <p>
        <span className={styles.characterLabel}>Character:</span>
        {character}
      </p>
    </li>
  );
};

export default CastItem;

CastItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  character: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};
