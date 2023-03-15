import PropTypes from 'prop-types';
import styles from "./review-item.module.css"

const ReviewItem = ({id, author, content}) => {
  return (
    <li key={id} className={styles.item}>
      <p className={styles.author}>Author: {author}</p>
      <p>{content}</p>
    </li>
  )
}

export default ReviewItem;

ReviewItem.propTypes = {
  id: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
}
