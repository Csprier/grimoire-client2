import React, { useState } from 'react';
import '../css/css-LP/form-container.css';


function FormContainer(props) {
  const [open, setOpen] = useState(false);
  return(
    <div className="form-container">
      <button onClick={() => setOpen(!open)}>{props.name}</button>
      <div className={open ? "form-display expand" : "form-display"}>{props.children}</div>
    </div>
  );
};

export default FormContainer;