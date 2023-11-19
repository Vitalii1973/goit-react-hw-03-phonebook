import React, { Component } from 'react';
import './Buttons.css';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;

    return (
      <form className="contact-form" onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
            required
          />
        </label>
        <label>
          Number:
          <input
            type="tel"
            name="number"
            value={number}
            onChange={this.handleChange}
            required
          />
        </label>
        <button className="addContactButton" type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

export default ContactForm;
