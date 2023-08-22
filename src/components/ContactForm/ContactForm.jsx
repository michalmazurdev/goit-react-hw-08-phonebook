import css from './ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, editContact } from 'redux/operations';
import { getContacts, getEditId } from 'redux/selectors';
import { clearEditId } from '../../redux/contactsSlice';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const editId = useSelector(getEditId);
  const findEditedContact = editId => {
    const index = contacts.findIndex(contact => contact.id === editId);
    return contacts[index];
  };
  const editedContact = findEditedContact(editId);
  // console.log(editedContact);

  const handleSubmitAdd = event => {
    event.preventDefault();
    const form = event.target;
    const nameInputValue = event.target.elements.name.value;
    const numberInputValue = event.target.elements.number.value;
    const contact = { name: nameInputValue, number: numberInputValue };

    const contactNames = contacts.map(contact => contact.name);
    if (contactNames.includes(nameInputValue)) {
      return alert(`${nameInputValue} is alredy in contacts`);
    }
    const contactNumbers = contacts.map(contact => contact.number);
    if (contactNumbers.includes(numberInputValue)) {
      return alert(
        `Number ${numberInputValue} already belongs to somebody else on the list.`
      );
    }
    dispatch(addContact(contact));

    form.reset();
  };
  const handleSubmitEdit = event => {
    event.preventDefault();
    const form = event.target;
    const nameInputValue = event.target.elements.name.value;
    const numberInputValue = event.target.elements.number.value;
    const contact = { name: nameInputValue, number: numberInputValue };
    console.log(typeof editedContact.number);
    console.log(typeof numberInputValue);

    const contactNames = contacts.map(contact => contact.name);
    if (contactNames.includes(nameInputValue)) {
      if (nameInputValue !== editedContact.name) {
        return alert(`${nameInputValue} is alredy in contacts`);
      }
    }
    // console.log('edited');
    const contactNumbers = contacts.map(contact => contact.number);
    if (contactNumbers.includes(numberInputValue)) {
      if (numberInputValue !== editedContact.number) {
        return alert(
          `Number ${numberInputValue} already belongs to somebody else on the list.`
        );
      }
    }
    dispatch(editContact({ id: editId, contact: contact }));
    dispatch(clearEditId());
    console.log('edited');
    // form.reset();
  };

  return (
    <div>
      {editId === null ? (
        <div>
          <h3 className={css.heading}>Add contact</h3>
          <form className={css.form} onSubmit={handleSubmitAdd}>
            <label className={css.label}>
              Name
              <input
                className={css.input}
                type="text"
                name="name"
                pattern="^[A-Za-z.'\- ]+$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
              />
            </label>
            <label className={css.label}>
              Number
              <input
                className={css.input}
                type="tel"
                name="number"
                pattern="^\+?\d{1,4}?\s?\(?\d{1,4}?\)?\s?\d{1,4}\s?\d{1,4}\s?\d{1,9}$"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
              />
            </label>

            <button className={css.button} type="submit">
              Add contact
            </button>
          </form>
        </div>
      ) : (
        <div>
          <h3 className={css.heading}>Edit contact</h3>{' '}
          <form className={css.form} onSubmit={handleSubmitEdit}>
            <label className={css.label}>
              Name
              <input
                className={css.input}
                type="text"
                name="name"
                pattern="^[A-Za-z.'\- ]+$"
                defaultValue={editedContact.name}
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
              ></input>
            </label>
            <label className={css.label}>
              Number
              <input
                className={css.input}
                type="tel"
                name="number"
                pattern="^\+?\d{1,4}?\s?\(?\d{1,4}?\)?\s?\d{1,4}\s?\d{1,4}\s?\d{1,9}$"
                defaultValue={editedContact.number}
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
              ></input>
            </label>

            <button className={css.button} type="submit">
              Edit contact
            </button>
          </form>
        </div>
      )}
    </div>
  );
};
