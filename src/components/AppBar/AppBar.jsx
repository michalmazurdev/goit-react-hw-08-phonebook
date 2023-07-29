import { UserMenu } from 'components/UserMenu/UserMenu.jsx';
import { Navigaton } from 'components/Navigation/Navigation.jsx';
import { AuthNav } from 'components/AuthNav/AuthNav.jsx';
import { useAuth } from 'hooks/useAuth';
export const AppBar = () => {
  const { isLoggedIn } = useAuth();
  return (
    <header>
      <Navigaton />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};
