import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import styles from './cast-view.module.css';
import { getCredits } from '../../services/api';
import Loader from '../Loader/Loader';
import CastItem from '../CastItem/CastItem';

const CastView = () => {
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const fetchCast = async () => {
      try {
        setLoading(true);
        const data = await getCredits(id);
        setCast(data.cast);
      } catch ({ response }) {
      } finally {
        setLoading(false);
      }
    };
    fetchCast();
  }, [id, setCast]);

  return (
    <div>
      {loading && <Loader />}
      {cast.length === 0
        ? (<h3>We have no information about the cast of this film.</h3>)
        : (<ul className={styles.list}>
          {cast.map(({ id, name, character, profile_path }) => (
            <CastItem key={id} id={id} name={name} character={character} img={profile_path || ""} />
          ))}
        </ul>)
      }
    </div>
  );
};

export default CastView;
