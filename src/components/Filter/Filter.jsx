import React from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { Label, Input } from './Filter.styled';

export const Filter = ({ value, onFilterContacts }) => {
  const idFilter = nanoid(5);
  return (
    <Label htmlFor={idFilter}>
      Find contacts by name
      <Input
        id={idFilter}
        type="text"
        placeholder="Enter a name"
        value={value}
        onChange={onFilterContacts}
      />
    </Label>
  );
};
Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onFilterContacts: PropTypes.func.isRequired,
};
