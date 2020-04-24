import React from 'react';
import '../css/css-LP/slider-dropdown.css';

function SliderDropDown() {
  
  function DropDownItem(props) {
    return(
      <a href="#" className="menu-item">
        <span className="icon-button">{props.leftIcon}</span>
        {props.children}
        <span className="icon-right">{props.rightIcon}</span>
      </a>
    );
  }

  return(
    <div className="dropdown">
      <DropDownItem leftIcon="&#x52;">Test 1</DropDownItem>
      <DropDownItem leftIcon="&#x4c;">Test 2</DropDownItem>
    </div>
  );
};

export default SliderDropDown;