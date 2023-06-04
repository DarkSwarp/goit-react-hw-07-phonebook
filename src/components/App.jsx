import ContactForm from './ContcatForm/contactform';
import { ContactList } from './ContactList/contactlist';
import { Filter } from './Filter/filter';
import { useEffect } from 'react';

import { useSelector } from 'react-redux';
import { getFilter } from 'redux/slice/filterSplice';
import { getContacts, getIsLoading, getError } from 'redux/slice/contactsSlice';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/operation';

export function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const filter = useSelector(getFilter);
  const contacts = useSelector(getContacts);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase().trim();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      {isLoading && !error && <b>Request in progress...</b>}
      {contacts.length > 1 && <Filter />}
      {contacts.length > 0 ? (
        <ContactList contacts={getVisibleContacts()} />
      ) : (
        <p>Your phonebook is empty. Please add contact.</p>
      )}
    </div>
  );
}
