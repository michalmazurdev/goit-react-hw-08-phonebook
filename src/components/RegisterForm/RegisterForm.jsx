import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
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
      <label className={css.label}>
        Name
        <input type="text" name="name"></input>
      </label>
      <label className={css.label}>
        Email
        <input type="email" name="email"></input>
      </label>
      <label className={css.label}>
        Password
        <input type="password" name="password"></input>
      </label>
      <button type="submit">Register</button>
    </form>
  );
};
