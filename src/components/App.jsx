// import { useDispatch, useSelector } from 'react-redux';
// import { useEffect } from 'react';
// import { fetchContacts } from 'redux/operations';
// import { ContactForm } from './ContactForm/ContactForm';
// import { Filter } from './Filter/Filter';
// import { ContactItem } from './ContactItem/ContactItem';
// import { ContactList } from './ContactList/ContactList';
// import { ProgressBar } from 'react-loader-spinner';
// import { getError, getIsLoading } from 'redux/selectors';

// import css from './App.module.css';
import { Routes, Route } from 'react-router-dom';
import { Register } from 'pages/Register/Register';
import { Login } from 'pages/Login/Login';
import { Contacts } from 'pages/Contacts/Contacts';
import { Home } from 'pages/Home/Home';

export const App = () => {
  // const dispatch = useDispatch();
  // const state = useSelector(state => state);
  // console.log(state);
  // const isLoading = useSelector(getIsLoading);
  // const error = useSelector(getError);

  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/contacts" element={<Contacts />} />
    </Routes>
    // <div
    //   style={{
    //     display: 'flex',
    //     alignItems: 'center',
    //     flexDirection: 'column',
    //   }}
    // >
    //   <h1 className={css.heading}>Phonebook</h1>
    //   <ContactForm />
    //   <h2 className={css.secondaryHeading}>Contacts</h2>
    //   <Filter />
    //   {isLoading && !error && <ProgressBar />}
    //   {error && <p>We are sorry, there was an error linked to your request</p>}
    //   <ContactList>
    //     <ContactItem />
    //   </ContactList>
    // </div>
  );
};
