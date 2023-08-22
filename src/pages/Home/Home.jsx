import { Link } from 'react-router-dom';
import css from './Home.module.css';
import { useAuth } from '../../hooks/useAuth.js';
export const Home = () => {
  const isLoggedIn = useAuth();

  return (
    <div className={css.homeContainer}>
      <h1 className={css.heading}>Welcome to Phonebook application</h1>

      {isLoggedIn ? (
        <p className={css.text}>
          {' '}
          Go to the{' '}
          <Link className={css.link} to="/contacts">
            Phonebook
          </Link>
        </p>
      ) : (
        <p className={css.text}>
          {' '}
          Please{' '}
          <Link className={css.link} to="/register">
            register
          </Link>{' '}
          in order to use the funcionality of the app where you can store all
          your phone contacts!
        </p>
      )}
    </div>
  );
};
