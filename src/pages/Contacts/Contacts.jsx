import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactItem } from 'components/ContactItem/ContactItem';
import { ContactList } from 'components/ContactList/ContactList';
import { ProgressBar } from 'react-loader-spinner';
import { getContacts, getError, getIsLoading } from 'redux/selectors';
// import css from 'components/App.module.css';
import css from './Contacts.module.css';

export const Contacts = () => {
  const dispatch = useDispatch();
  // const state = useSelector(state => state);
  // console.log(state);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  const contacts = useSelector(getContacts);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.contactsContainer}>
      <h1 className={css.heading}>Phonebook</h1>
      <ContactForm />
      <h2 className={css.secondaryHeading}>Contacts</h2>
      {contacts.length !== 0 && <Filter />}
      {isLoading && !error && (
        <ProgressBar borderColor="#a39d9d" barColor="#a39d9d" />
      )}
      {error && <p>We are sorry, there was an error linked to your request</p>}
      <ContactList>
        <ContactItem />
      </ContactList>
    </div>
  );
};
