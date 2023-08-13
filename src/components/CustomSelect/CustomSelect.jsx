import React from 'react';
import Select, { components } from 'react-select';
import PropTypes from 'prop-types';
import { SelectIcon, customStyles } from './CustomSelect.styled';

const DropdownIndicator = props => {
  return (
    components.DropdownIndicator && (
      <components.DropdownIndicator {...props}>
        <SelectIcon />
      </components.DropdownIndicator>
    )
  );
};

export const CustomSelect = ({ options, onChange, name, placeholder }) => {
  return (
    <>
      <Select
        name={name}
        placeholder={placeholder}
        options={options}
        onChange={onChange}
        styles={customStyles}
        components={{ DropdownIndicator }}
      />
    </>
  );
};

CustomSelect.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      label: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    }).isRequired
  ).isRequired,
  onChange: PropTypes.func.isRequired,
};
