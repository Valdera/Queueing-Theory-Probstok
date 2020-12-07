import React from 'react';
import './input-data.styles.scss';

const InputComponents = ({ handleChange, value, labelText, ...otherProps }) => {
  return (
    <div className="input-data">
      <label htmlFor={otherProps.name}>{labelText}</label>
      <input
        type="number"
        id="quantity"
        value={value}
        onChange={handleChange}
        {...otherProps}
      />
    </div>
  );
};

export default InputComponents;
