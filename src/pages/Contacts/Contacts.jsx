import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactItem } from 'components/ContactItem/ContactItem';
import { ContactList } from 'components/ContactList/ContactList';
import { ProgressBar } from 'react-loader-spinner';
import { getError, getIsLoading } from 'redux/selectors';
import css from './Contacts.module.css';

export const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      {' '}
      <h1 className={css.heading}>Phonebook</h1>
      <div className={css.contactsContainer}>
        {isLoading && !error && (
          <ProgressBar borderColor="#a39d9d" barColor="#a39d9d" />
        )}
        {error && (
          <p>We are sorry, there was an error linked to your request</p>
        )}
        <ContactList>
          <ContactItem />
        </ContactList>
        <ContactForm />
      </div>
    </>
  );
};
