import React, { Fragment, useState } from 'react';
import './css/accordion.css';


function Accordion({ children, onToggle, title }) {
  const [visibility, setVisibility] = useState(false);

  return(
    <div className="accordion-container">
      <button
        className="accordion-button"
        onClick={() => {
          setVisibility(!visibility);
          if (!onToggle) {
            onToggle(visibility);
          };
        }}
      >{title}</button>
      <div className={visibility ? "accordion" : "accordion closed"}>
        {visibility ? <Fragment>{children}</Fragment> : null}
      </div>
    </div>
  );
};

export default Accordion;