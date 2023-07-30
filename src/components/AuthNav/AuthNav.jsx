import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import css from './AuthNav.module.css';

const StyledLink = styled(NavLink)`
  color: black;
  font-weight: 400;

  &.active {
    font-weight: 700;
    text-decoration: underline;
  }
`;

export const AuthNav = () => {
  return (
    <div className={css.authNav}>
      <StyledLink className={css.link} to="/login">
        Login
      </StyledLink>
      <StyledLink className={css.link} to="/register">
        Register
      </StyledLink>
    </div>
  );
};
