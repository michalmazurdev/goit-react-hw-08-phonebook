import { useAuth } from 'hooks/useAuth';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import css from './Navigation.module.css';

const StyledLink = styled(NavLink)`
  color: black;
  font-weight: 400;

  &.active {
    font-weight: 700;
    text-decoration: underline;
  }
`;

export const Navigaton = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav className={css.nav}>
      <StyledLink className={css.link} to="/">
        Home
      </StyledLink>
      {isLoggedIn && (
        <StyledLink className={css.link} to="/contacts">
          Phonebook
        </StyledLink>
      )}
    </nav>
  );
};
