import React from 'react';

/** Styles */
import {
  ModalContainer,
  ModalContent
} from './Modal.styled';

function Modal(props) {
  console.log('props.showModal', props);
  return(
    <ModalContainer id="modal" showModal>
      <h1>{props.modalHeader}</h1>
      <ModalContent showModal>{props.children}</ModalContent>
    </ModalContainer>
  );
};

export default Modal;