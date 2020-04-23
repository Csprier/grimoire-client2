import React from 'react';
import './css/formportal.css';

function FormPortal(props) {
  return(
    <div className="form-portal-container">
      <ul className="form-portal">
        {props.children}
      </ul>
    </div>
  );
};

export default FormPortal;