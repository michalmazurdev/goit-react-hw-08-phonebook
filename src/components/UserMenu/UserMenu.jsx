import { useAuth } from 'hooks/useAuth';
import css from './UserMenu.module.css';

export const UserMenu = () => {
  const { user } = useAuth();

  return (
    <div className={css.userMenu}>
      <p className={css.userInfo}>Welcome, {user?.name}</p>
      <button type="button">Logout</button>
    </div>
  );
};
