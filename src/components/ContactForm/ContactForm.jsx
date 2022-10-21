import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { Label, Form, Input, Button } from './ContactForm.styled';
//import { useState } from 'react';

export const ContactForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handlerChangName = e => {
    setName(e.currentTarget.value);
  };
  const handlerChangNumber = e => {
    setNumber(e.currentTarget.value);
  };

  const handlerSubmit = e => {
    e.preventDefault();
    onSubmit({ name, number });
    reset();
  };
  const reset = () => {
    setName('');
    setNumber('');
  };

  const idName = nanoid(5);
  const idNumber = nanoid(5);

  return (
    <div>
      <Form onSubmit={handlerSubmit}>
        <Label>
          Name
          <Input
            id={idName}
            type="text"
            name="name"
            onChange={handlerChangName}
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
            onChange={handlerChangNumber}
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
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
