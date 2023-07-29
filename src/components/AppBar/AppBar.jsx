import { UserMenu } from 'components/UserMenu/UserMenu.jsx';
import { Navigaton } from 'components/Navigation/Navigation.jsx';
import { AuthNav } from 'components/AuthNav/AuthNav.jsx';
import { useAuth } from 'hooks/useAuth';
import css from './AppBar.module.css';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();
  return (
    <header className={css.header}>
      <Navigaton />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};
