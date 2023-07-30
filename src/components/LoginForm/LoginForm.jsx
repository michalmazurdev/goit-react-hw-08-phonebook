import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { Link } from 'react-router-dom';
import css from './LoginForm.module.css';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    dispatch(
      logIn({
        password: form.elements.password.value,
        email: form.elements.email.value,
      })
    );
    form.reset();
  };
  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label className={css.label} for="loginEmail">
        Email
      </label>
      <input
        type="email"
        name="email"
        id="loginEmail"
        className={css.input}
      ></input>
      <label className={css.label} for="loginPassword">
        Password
      </label>
      <input
        type="password"
        name="password"
        id="loginPassword"
        className={css.input}
      ></input>
      <button className={css.button} type="submit">
        Log in
      </button>
      <p className={css.registerInfo}>
        If you dont't have an account yet, please{' '}
        <Link className={css.link} to="/register">
          register
        </Link>
        .
      </p>
    </form>
  );
};
