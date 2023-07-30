import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';

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
      <label className={css.label}>
        Email
        <input type="email" name="email"></input>
      </label>
      <label className={css.label}>
        Password
        <input type="password" name="password"></input>
      </label>
      <button type="submit">Log in</button>
    </form>
  );
};
