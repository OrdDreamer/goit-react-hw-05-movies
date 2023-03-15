import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import styles from './reviews-view.module.css';
import Loader from '../Loader/Loader';
import { getReviews } from '../../services/api';
import ReviewItem from '../ReviewItem/ReviewItem';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

const ReviewsView = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        setLoading(true);
        const data = await getReviews(id);
        setReviews(data.results);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchReviews();
  }, [id, setReviews]);

  return (
    <div>
      {loading && <Loader />}
      {error
        ? <ErrorMessage message={error && error.message} />
        : (
          reviews.length === 0 ? (
            <h3>We don't have any reviews for this movie</h3>
          ) : (
            <ul className={styles.list}>
              {reviews.map(({id, author, content}) => (
                <ReviewItem key={id} id={id} author={author} content={content} />
              ))}
            </ul>
          )
        )
      }
    </div>
  );
};

export default ReviewsView;
