import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { selectContacts } from '../../redux/contactsSlice';
import { selectNameFilter } from '../../redux/filtersSlice';
import Contact from '../Contact/Contact';
import styles from './ContactList.module.css';

function ContactList() {
  const contacts = useSelector(selectContacts);
  const nameFilter = useSelector(selectNameFilter);

  const filteredContacts = useMemo(() => (
    contacts.filter(contact =>
      contact.name.toLowerCase().includes(nameFilter.toLowerCase())
    )
  ), [contacts, nameFilter]);

  return (
    <ul className={styles.contactList}>
      {filteredContacts.map(contact => (
        <Contact
          key={contact.id}
          contact={contact}
        />
      ))}
    </ul>
  );
}

export default ContactList;
