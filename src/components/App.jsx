import { nanoid } from 'nanoid';
import React, { useState, useEffect } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Title, SubTitle } from './App.styled';

export function App() {
  const [contacts, setContacts] = useState(() => {
    return (
      JSON.parse(window.localStorage.getItem('contacts')) ?? [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      ]
    );
  });
  const [filter, setFilter] = useState('');

  const formHandlerSubmit = ({ name, number }) => {
    const addContacts = {
      id: nanoid(5),
      name,
      number,
    };
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === addContacts.name.toLowerCase()
      )
    ) {
      return alert(`${addContacts.name} is already in contacts.`);
    }
    setContacts([addContacts, ...contacts]);
  };

  const filterContacts = e => {
    setFilter(e.currentTarget.value);
  };

  const renderContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLocaleLowerCase())
    );
  };

  const contactsDelete = idContact => {
    setContacts(contacts =>
      contacts.filter(contact => contact.id !== idContact)
    );
  };

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  });
  return (
    <>
      <Title>Phonebook</Title>
      <ContactForm onSubmit={formHandlerSubmit} />
      <SubTitle>Contacts</SubTitle>
      <Filter value={filter} onFilterContacts={filterContacts} />
      <ContactList
        contacts={renderContacts()}
        onDeleteContack={contactsDelete}
      />
    </>
  );
}
