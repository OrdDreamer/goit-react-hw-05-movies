import styles from "./header.module.css"
import StyledLink from '../StyledLink/StyledLink';

const Header = () => {

  return (
    <div className={styles.headerContainer}>
      <StyledLink to="/" title="Home"/>
      <StyledLink to="/movies" title="Movies"/>
    </div>
  )
}

export default Header;
