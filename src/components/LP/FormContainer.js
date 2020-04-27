import React, { useState } from 'react';
import '../css/css-LP/form-container.css';


function FormContainer(props) {
  const [open, setOpen] = useState(false);
  return(
    <div className="form-container">
      <div 
        className="animation-toggle"
        onClick={() => setOpen(!open)}
      >
        {props.name}
      </div>
      <div className={open ? "form-display expand" : "form-display"}>{props.children}</div>
    </div>
  );
};

export default FormContainer;