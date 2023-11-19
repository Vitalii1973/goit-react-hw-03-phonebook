import React, { Component } from 'react';
import './Buttons.css';

class ContactListItem extends Component {
  render() {
    const { contact, onDeleteContact } = this.props;

    return (
      <li>
        {contact.name}: {contact.number}{' '}
        <button
          className="deleteContactButton"
          type="button"
          onClick={() => onDeleteContact(contact.id)}
        >
          Delete
        </button>
      </li>
    );
  }
}

export default ContactListItem;
