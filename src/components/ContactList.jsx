import React, { Component } from 'react';
import ContactListItem from './ContactListItem';

class ContactList extends Component {
  render() {
    const { contacts, onDelete } = this.props;

    return (
      <ul>
        {contacts.map(contact => (
          <ContactListItem
            key={contact.id}
            contact={contact}
            onDeleteContact={onDelete}
          />
        ))}
      </ul>
    );
  }
}

export default ContactList;
