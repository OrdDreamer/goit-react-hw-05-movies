import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import styles from './styled-link.module.css';

const StyledLink = ({ to, title }) => {
  return (
    <NavLink className={({isActive}) => `${styles.link} ${isActive ? styles.active : ""}`} to={to}>
      {title}
    </NavLink>);
};

export default StyledLink;

StyledLink.propTypes = {
  to: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
