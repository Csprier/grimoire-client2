import React, { useState } from 'react';

function SliderItem(props) {
  const [open, setOpen] = useState(false);
  return(
    <li className="slider-item">
      <a href="#" className="icon-button" onClick={() => setOpen(!open)}>{props.icon}</a>
      {open && props.children}
    </li>
  );
};

export default SliderItem;