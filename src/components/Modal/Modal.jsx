import React from 'react';

/** Styles */
import {
  ModalContainer,
  ModalContent
} from './Modal.styled';

function Modal(props) {
  return(
    <ModalContainer id="modal">
      <h1>{props.modalHeader}</h1>
      <ModalContent>{props.children}</ModalContent>
    </ModalContainer>
  );
};

export default Modal;