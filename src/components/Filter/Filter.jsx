import React from 'react';
import { PropTypes } from 'prop-types';

import { Input } from './Filter.styled';

export const Filter = ({ filter, onChangeInputValue }) => {
  return (
    <div>
      <Input
        type="text"
        placeholder=" Contact Name"
        value={filter}
        onChange={e => onChangeInputValue(e.target.value)}
      />
    </div>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChangeInputValue: PropTypes.func.isRequired,
};
