import { useState } from 'react';

import css from './contactform.module.css';

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
// import { addContact } from 'components/redux/actions/actions';
import { addContact, getContacts } from '../../redux/slice/contactsSlice';


export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handlChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handlSubmit = e => {
    e.preventDefault();
      if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(`${name} is already in contacts.`);
    } else if (contacts.find(contact => contact.number === number)) {
      alert(`${number} is already in contacts.`);
    } else if (name.trim() === '' || number.trim() === '') {
      alert("Enter the contact's name and number phone!");
      } else {
        dispatch(addContact({ name, number }));
    }

    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handlSubmit}>
      <label className={css.label}>
        Name
        <input
          className={css.input}
          type="text"
          name="name"
          value={name}
          onChange={handlChange}
          pattern="^[a-zA-Za-яА-Я]+(([' -][a-zA-Za-яА-Я ])?[a-zA-Za-яА-Я]*)*$"
          title="Ivan Ivanov"
          required
        />
      </label>
      <label className={css.label}>
        Telephone
        <input
          className={css.input}
          type="tel"
          name="number"
          value={number}
          onChange={handlChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="555-55-55"
          required
        />
      </label>
      <button className={css.btn} type="submite">
        Add contact
      </button>
    </form>
  );
}
