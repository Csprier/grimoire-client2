import React, { useState } from 'react';
import './css/dropdown.css';
import { CSSTransition } from 'react-transition-group';

function DropDown() {
  const [activeMenu, setActiveMenu] = useState('login'); // Login, Register

  function DropDownItem(props) {
    return(
      <a 
        href="#" 
        className="dropdown-item"
        onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)} 
      >
        {props.children}
      </a>
    );
  }

  return(
    <div className="dropdown-container">
      
      <CSSTransition 
        in={activeMenu === 'login'} 
        unmountOnExit 
        timeout={500}
        classNames="menu-primary"
      >
        <div className="menu">
          <DropDownItem goToMenu="login">Login</DropDownItem>
        </div>
      </CSSTransition>

      <CSSTransition 
        in={activeMenu === 'register'} 
        unmountOnExit 
        timeout={500}
        classNames="menu-secondary"
      >
        <div className="menu">
          <DropDownItem goToMenu="register">Register</DropDownItem>
        </div>
      </CSSTransition>

    </div>
  );
};

export default DropDown;