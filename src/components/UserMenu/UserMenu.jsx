import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks/useAuth';
import css from './UserMenu.module.css';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const handleLogOut = () => dispatch(logOut());

  return (
    <div className={css.userMenu}>
      <p className={css.userInfo}>Welcome, {user?.name}</p>
      <button className={css.button} type="button" onClick={handleLogOut}>
        Logout
      </button>
    </div>
  );
};
