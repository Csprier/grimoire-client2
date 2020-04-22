import React, { Fragment, useEffect, useState } from 'react';
import './css/accordion.css';


function Accordion({ children, className = "", onToggle, title }) {
  useEffect(() => {
    console.log('Accordion loaded!');
  });

  const [visibility, setVisibility] = useState(false);

  return(
    <div className="accordion-container">
      <h2 
        className={visibility ? "accordion open" : "accordion closed"}
        // className="accordion"
        onClick={() => {
          setVisibility(!visibility);
          if (!onToggle) {
            onToggle(visibility);
          };
        }}>{title}</h2>
        {visibility ? <Fragment>{children}</Fragment> : null}
    </div>
  );
};

export default Accordion;