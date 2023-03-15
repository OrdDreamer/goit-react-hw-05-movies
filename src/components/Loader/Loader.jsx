import styles from './loader.module.css';

const Loader = () => {
  return (
    <div className={styles.container}>
      <img className={styles.image}
           src="/goit-react-hw-05-movies/loader.jpg"
           alt=''
           width='120'
           height='120'
      />
    </div>
  );
};

export default Loader;
