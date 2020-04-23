import React, { useState } from 'react';
import './css/formitem.css';

function FormItem(props) {
  const [open, setOpen] = useState(false);
  return(
    <li className="form-portal-item">
      <a 
        href="#" 
        className="portal-button"
        onClick={() => setOpen(!open)}
      >
        {props.portal}
      </a>
      {open ? props.children : null}
    </li>
  );
};

export default FormItem;