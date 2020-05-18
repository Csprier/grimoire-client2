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
      <ModalContent>{props.children}</ModalContent>
    </ModalContainer>
  );
};

export default Modal;