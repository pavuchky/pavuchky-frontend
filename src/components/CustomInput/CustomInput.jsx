import PropTypes from 'prop-types';
import { FormInput, FormText, FormValidation } from './CustomInput.styled';

export const CustomInput = ({
  title,
  type,
  name,
  placeholder,
  autoComplete,
  value,
  onChange,
  hasValue,
  touched,
  error,
}) => {
  return (
    <>
      <FormText>{title}</FormText>
      <FormInput
        type={type}
        name={name}
        placeholder={placeholder}
        autoComplete={autoComplete}
        value={value}
        onChange={onChange}
        hasValue={hasValue}
      />
      {touched && error && <FormValidation>{error}</FormValidation>}
    </>
  );
};

CustomInput.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  autoComplete: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  hasValue: PropTypes.bool.isRequired,
  touched: PropTypes.bool,
  error: PropTypes.string,
};
