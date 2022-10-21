import { nanoid } from 'nanoid';
import React, { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Title, SubTitle } from './App.styled';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  formHandlerSubmit = ({ name, number }) => {
    const { contacts } = this.state;
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
    this.setState(({ contacts }) => ({
      contacts: [addContacts, ...contacts],
    }));
  };
  filterContacts = e => {
    this.setState({ filter: e.currentTarget.value });
  };
  contactsDelete = idContact => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(contact => contact.id !== idContact),
    }));
  };

  componentDidMount() {
    const contactsStorege = localStorage.getItem('contacts');
    const parseContacts = JSON.parse(contactsStorege);

    if (parseContacts) {
      this.setState({ contacts: [...parseContacts] });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  render() {
    const { filter } = this.state;
    const normalized = this.state.filter.toLocaleLowerCase();
    const renderContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalized)
    );

    return (
      <>
        <Title>Phonebook</Title>
        <ContactForm onSubmit={this.formHandlerSubmit} />
        <SubTitle>Contacts</SubTitle>
        <Filter value={filter} onFilterContacts={this.filterContacts} />
        <ContactList
          contacts={renderContacts}
          onDeleteContack={this.contactsDelete}
        />
      </>
    );
  }
}
