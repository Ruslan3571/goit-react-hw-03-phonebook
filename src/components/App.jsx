import { Component } from 'react';
import { nanoid } from 'nanoid';

import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

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

  addContact = person => {
    const data = { name: person.name, number: person.number, id: nanoid() };

    this.checkDuplicate(person)
      ? alert(`This ${person.name} exist`)
      : this.setState(prevState => ({
          contacts: [data, ...prevState.contacts],
        }));
  };

  deleteContact = idContact => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => idContact !== contact.id),
    }));
  };

  handleFilter = event => {
    this.setState({ filter: event.currentTarget.value.toLowerCase() });
  };

  checkDuplicate = value =>
    this.state.contacts.some(
      ({ name }) => name.toLowerCase() === value.name.toLowerCase()
    );

  FilterContacts = () =>
    this.state.contacts.filter(({ name }) =>
      name.toLowerCase().includes(this.state.filter)
    );

  render() {
    const filteredContacts = this.FilterContacts();
    return (
      <div>
        <h1 style={{ textAlign: 'center' }}>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />
        <h2 style={{ textAlign: 'center' }}>Contacts</h2>
        <Filter onHandleFilter={this.handleFilter} />
        <ContactList
          contactList={filteredContacts}
          onDelete={this.deleteContact}
        />
      </div>
    );
  }
}
