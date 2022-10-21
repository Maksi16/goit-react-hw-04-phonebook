import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { Label, Form, Input, Button } from './ContactForm.styled';

const DEFAULT_STATE = {
  name: '',
  number: '',
};

export class ContactForm extends Component {
  state = { ...DEFAULT_STATE };
  handlerChang = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };
  handlerSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };
  reset = () => {
    this.setState({ name: '', number: '' });
  };
  render() {
    const { name, number } = this.state;
    const idName = nanoid(5);
    const idNumber = nanoid(5);
    return (
      <div>
        <Form onSubmit={this.handlerSubmit}>
          <Label>
            Name
            <Input
              id={idName}
              type="text"
              name="name"
              onChange={this.handlerChang}
              value={name}
              placeholder="Enter a name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </Label>
          <Label htmlFor="">
            Number
            <Input
              id={idNumber}
              type="tel"
              name="number"
              onChange={this.handlerChang}
              value={number}
              placeholder="Enter a phone number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </Label>
          <Button type="submit">Add contact</Button>
        </Form>
      </div>
    );
  }
}
ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
