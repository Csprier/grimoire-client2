import React, { useEffect, useRef, useState } from 'react';
import '../css/css-LP/slider-dropdown.css';
import { CSSTransition } from 'react-transition-group';

import Login from '../Login';
import Register from '../Register';

function SliderDropDown() {
  const [activeMenu, setActiveMenu] = useState('main');
  const [menuHeight, setMenuHeight] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    setMenuHeight(dropdownRef.current?.firstChild.offsetHeight)
  }, []);

  /** Dynamically calculate the height of the animated elements prior to their render for smooth animations */
  function calcHeight(el) {
    const height = el.offsetHeight;
    setMenuHeight(height);
  }

  function DropDownItem(props) {
    return(
      <a href="#" className="menu-item" 
        onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
        <span className="icon-button">{props.leftIcon}</span>
        {props.children}
        <span className="icon-right">{props.rightIcon}</span>
      </a>
    );
  }

  /** CSSTransition Props
   * in: truthy value will render and animate children into the UI
   * unmountOnExit: removes children when they are not active
   * timeout: duration of animation
   * classNames: menu - prefix
   * onEnter: (life cycle hook) - calls a callback as soon as the 'enter class' is first added to the element
   * 
   * Description of transitions: When the 'in' prop becomes truthy
   *  it will add the 'menu-primary-enter' class to the 'menu' div. 
   *  After a timeout of 500ms, it will add 'menu-primary-enter-active' class.
   * When 'in' prop becomes false, it does the opposite.
   */
  return(
    <div className="dropdown" style={{ height: menuHeight }} ref={dropdownRef}>
      <CSSTransition 
        in={activeMenu === 'main'} 
        unmountOnExit 
        timeout={500}
        classNames="menu-primary"
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropDownItem leftIcon="&#x4c;" goToMenu="login"> Login</DropDownItem>
          <DropDownItem leftIcon="&#x52;" goToMenu="register"> Register</DropDownItem>
        </div>
      </CSSTransition>

      <CSSTransition 
        in={activeMenu === 'login'} 
        unmountOnExit 
        timeout={500}
        classNames="menu-secondary"
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropDownItem leftIcon="&#x21e6;" goToMenu="main"></DropDownItem>
          <Login />
        </div>
      </CSSTransition>

      <CSSTransition 
        in={activeMenu === 'register'} 
        unmountOnExit 
        timeout={500}
        classNames="menu-secondary"
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropDownItem leftIcon="&#x21e6;" goToMenu="main"></DropDownItem>
          <Register />
        </div>
      </CSSTransition>
    </div>
  );
};

export default SliderDropDown;