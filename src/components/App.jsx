import ContactForm from './ContcatForm/contactform';
import { ContactList } from './ContactList/contactlist';
import { Filter } from './Filter/filter';

import { useSelector } from 'react-redux';
import { getFilter } from 'redux/slice/filterSplice';
import { getContacts } from 'redux/slice/contactsSlice';

export function App() {
  const filter = useSelector(getFilter);
  const contacts = useSelector(getContacts);
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
      {contacts.length > 1 && <Filter />}
      {contacts.length > 0 ? (
        <ContactList contacts={getVisibleContacts()} />
      ) : (
        <p>Your phonebook is empty. Please add contact.</p>
      )}
      {/* <ContactList contacts={getVisibleContacts()} /> */}
    </div>
  );
}
