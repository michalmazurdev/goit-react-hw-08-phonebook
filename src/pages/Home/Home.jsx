import css from './Home.module.css';

export const Home = () => {
  return (
    <div className={css.homeContainer}>
      <h1 className={css.heading}>Welcome to Phonebook application</h1>
      <p className={css.text}>
        Please register in order to use the funcionality of the app where you
        can store all your phone contacts!
      </p>
    </div>
  );
};
