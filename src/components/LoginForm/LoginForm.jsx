import css from './LoginForm.module.css';

export const LoginForm = () => {
  const handleSubmit = event => {
    event.preventDeafult();
    const form = event.currentTarget;
    console.log(form);
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
