import css from './ContactList.module.css';
import { getContacts } from 'redux/selectors';
import { useSelector } from 'react-redux';
import { Filter } from 'components/Filter/Filter';

export const ContactList = ({ children }) => {
  const contacts = useSelector(getContacts);
  return (
    <div className={css.contactListContainer}>
      <h2 className={css.secondaryHeading}>Contacts</h2>
      {contacts.length !== 0 && <Filter />}
      <ul className={css.list}>{children}</ul>
    </div>
  );
};
