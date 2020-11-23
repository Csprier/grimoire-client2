import React from 'react';

/** Styles */
import {
  ModalContainer,
  ModalContent,
  ModalHeader
} from './Modal.styled';

function Modal(props) {
  return(
    <ModalContainer id="modal" showModal={props.showModal}>
      <ModalHeader>{props.modalHeader}</ModalHeader>
      <ModalContent>{props.children}</ModalContent>
    </ModalContainer>
  );
};

export default Modal;

// <ModalContent showModal={props.showModal}>