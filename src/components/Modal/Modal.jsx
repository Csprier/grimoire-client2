import React from 'react';

/** Styles */
import {
  ModalContainer,
  ModalContent
} from './Modal.styled';

function Modal(props) {
  // if (!props.showModal) {
  //   return null;
  // }

  return(
    <ModalContainer id="modal">
      <h1>{props.modalHeader}</h1>
      {/* <ModalContent>{props.children}</ModalContent> */}
      {props.children}
    </ModalContainer>
  );
};

export default Modal;