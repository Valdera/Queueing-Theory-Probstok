import React from 'react';
import './warning.styles.scss';

const Warning = ({ handleClose, warnText }) => {
  return (
    <div className="warning">
      <p>{warnText}</p>
      <button onClick={handleClose}>Close</button>
    </div>
  );
};

export default Warning;
