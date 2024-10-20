import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';
import styles from './Contact.module.css';

function Contact({ contact }) {
  const dispatch = useDispatch();

  const handleDelete = id => {
    dispatch(deleteContact(id));
  };

  return (
    <li className={styles.contactCard}>
      <div className={styles.contactInfo}>
        <div className={styles.contactInfoItem}>
          <span className={styles.icon}>👤</span>
          <span>{contact.name}</span>
        </div>
        <div className={styles.contactInfoItem}>
          <span className={styles.icon}>📞</span>
          <span>{contact.number}</span>
        </div>
      </div>
      <button
        className={styles.removeBtn}
        onClick={() => handleDelete(contact.id)}
      >
        Delete
      </button>
    </li>
  );
}

export default Contact;
