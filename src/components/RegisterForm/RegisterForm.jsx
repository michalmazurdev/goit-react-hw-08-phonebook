import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { Link } from 'react-router-dom';
import css from './RegisterForm.module.css';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;

    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label className={css.label} for="registerName">
        Name
      </label>
      <input
        type="text"
        name="name"
        id="registerName"
        className={css.input}
      ></input>
      <label className={css.label} for="registerEmail">
        Email
      </label>
      <input
        type="email"
        name="email"
        id="registerEmail"
        className={css.input}
      ></input>
      <label className={css.label} for="registerPassword">
        Password
      </label>
      <input
        type="password"
        name="password"
        id="registerPassword"
        className={css.input}
      ></input>
      <button className={css.button} type="submit">
        Register
      </button>
      <p className={css.registerInfo}>
        If you already have an account, please{' '}
        <Link className={css.link} to="/login">
          log in
        </Link>
        .
      </p>
    </form>
  );
};
