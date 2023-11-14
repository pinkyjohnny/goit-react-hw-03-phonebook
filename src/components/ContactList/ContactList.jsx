import React from 'react';
import { PropTypes } from 'prop-types';

import { ContactItem, Contacts, DeleteButton } from './ContactList.styled';

export const ContactList = ({ options, onDeleteContact }) => {
  return (
    <Contacts>
      {options.map(({ id, name, number }) => (
        <ContactItem key={id}>
          {name}: {number}
          <DeleteButton onClick={() => onDeleteContact(id)}>
            Delete
          </DeleteButton>
        </ContactItem>
      ))}
    </Contacts>
  );
};

ContactList.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
