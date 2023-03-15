import styles from '../../pages/Home/home.module.css';
import PropTypes from 'prop-types';

const ErrorMessage = ({message}) => {
  return (
    <h2 className={styles.errorMessage}>{message || "Error :("}</h2>
  )
}

export default ErrorMessage;

ErrorMessage.propTypes = {
  message: PropTypes.string,
}
