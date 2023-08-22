import css from './ContactItem.module.css';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { removeContact } from 'redux/operations';
import { getStatusFilter, getContacts } from 'redux/selectors';
import { setEditId } from '../../redux/contactsSlice';

export const ContactItem = () => {
  const contacts = useSelector(getContacts);
  const filterPhrase = useSelector(getStatusFilter);

  const dispatch = useDispatch();

  const filterContactsByName = contacts => {
    if (filterPhrase === '') {
      return contacts;
    } else {
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(filterPhrase.toLowerCase())
      );
    }
  };
  let filteredContacts = filterContactsByName(contacts);

  const handleDelete = contactId => {
    console.log(contactId);
    dispatch(removeContact(contactId));
  };
  const handleEdit = id => {
    dispatch(setEditId(id));
  };

  return contacts.length === 0 ? (
    <p>There are no contacts yet, use add contact feature!</p>
  ) : (
    filteredContacts.map(contact => (
      <li className={css.listItem} key={contact.id}>
        <span>
          {contact?.name}: {contact?.number}
        </span>
        <div className={css.buttonContainer}>
          {' '}
          <button
            className={css.button}
            onClick={() => handleDelete(contact.id)}
          >
            Delete
          </button>
          <button className={css.button} onClick={() => handleEdit(contact.id)}>
            Edit
          </button>
        </div>
      </li>
    ))
  );
};
