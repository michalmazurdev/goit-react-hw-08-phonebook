import { useAuth } from 'hooks/useAuth';
// import css from './UserMenu.module.css';

export const UserMenu = () => {
  const { user } = useAuth();

  return (
    <div>
      <p>Welcome, {user?.name}</p>
      <button type="button">Logout</button>
    </div>
  );
};
