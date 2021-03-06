import React from "react";
import styled from "styled-components";

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 15px 0;
  position: relative;
  margin-top: 30px;

  & > input {
    border: 1px solid ${props => (props.error ? "#e77674" : "#eee")};
    background-color: transparent;
    outline: none;
    padding: 12px 3px 12px 15px;
    font-size: 16px;
    transition: all 0.2s ease;
    z-index: 500;
  }
  & > label {
    color: #757575;
    position: absolute;
    top: 15px;
    left: 15px;
    transition: all 0.2s ease;
    z-index: 500;

    ${props =>
      props.focused &&
      `
      font-size: 13px;
      transform: translateY(-23px) translateX(-5px);
      z-index: 501;
      background: white;
      padding: 0 8px;
    `}
  }
`;

const Input = ({
  /**
 *onChange - function called when the input value changes
 *onFocus - function called when the input is focused
 *onBlur - function called when the input loses focus
 *setRef - function used to add this input as a ref for a parent component
 */
  value,
  type,
  label,
  onChange,
  onFocus,
  onBlur,
  setRef,
  ...props
}) => {
  const [focused, setFocused] = React.useState(false);
  const [error, setError] = React.useState(null);

  const handleOnFocus = () => {
    setFocused(true);
    onFocus();
  };

  const handleOnBlur = () => {
    setFocused(false);
    onBlur();
  };

  const validateValue = val => {
    if (type === "email") {
      // VERY simple email validation
      if (val.indexOf("@") === -1) {
        setError("email is invalid");
      } else {
        setError(null);
      }
    }

    // ... Validations
  };

  const handleOnChange = val => {
    validateValue(val);
    onChange(val);
  };

  const renderLabel = () => {
    if (label) {
      // if we have an error
      if (error) {
        return <label>{error}</label>;
      }
      return <label>{label}</label>;
    }
    return null;
  };

  const isFocused = focused || String(value).length || type === "date";

  return (
    <InputContainer focused={isFocused} error={error}>
      {renderLabel()}
      <input
        value={value}
        type={type}
        onChange={e => handleOnChange(e.target.value)}
        onFocus={handleOnFocus}
        onBlur={handleOnBlur}
        ref={ref => setRef(ref)}
        {...props}
      />
    </InputContainer>
  );
};

Input.defaultProps = {
  type: "text",
  label: "",
  onChange: text => {
    console.error(`Missing onChange prop: ${text}`);
  },
  onFocus: () => {},
  onBlur: () => {},
  setRef: () => {}
};

export default Input;
