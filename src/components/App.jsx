import Header from './Header/Header';
import Home from '../pages/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Movies from '../pages/Movies/Movies';
import MoviesDetails from '../pages/MoviesDetails/MoviesDetails';
import NotFound from '../pages/NotFound/NotFound';
import CastView from './CastView/CastView';
import ReviewsView from './ReviewsView/ReviewsView';

export const App = () => {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        color: '#010101',
        backgroundColor: '#e7ecf2',
      }}
    >
      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/movies' element={<Movies />} />
        <Route path='/movies/:id' element={<MoviesDetails />}>
          <Route path='cast' element={<CastView />} />
          <Route path='reviews' element={<ReviewsView />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
};
