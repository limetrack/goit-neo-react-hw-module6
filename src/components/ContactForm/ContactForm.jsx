import React from 'react';
import { Formik, Form } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, selectContacts } from '../../redux/contactsSlice';
import { contactValidationSchema } from '../../validation/contactValidationSchema';
import FormGroup from '../FormGroup/FormGroup';
import styles from './ContactForm.module.css';

const initialValues = { name: '', number: '' };

function ContactForm() {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    const duplicate = contacts.find(contact => contact.name === values.name);

    if (duplicate) {
      alert(`${values.name} is already in contacts.`);
    } else {
      dispatch(addContact(values));
      resetForm();
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={contactValidationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={styles.form}>
        <FormGroup name="name" label="Name" />
        <FormGroup name="number" label="Number" />

        <button type="submit" className={styles.submitBtn}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
}

export default ContactForm;
