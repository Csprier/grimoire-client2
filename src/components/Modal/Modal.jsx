import React from 'react';

/** Styles */
import {
  ModalContainer,
  ModalContent,
  ModalHeader
} from './Modal.styled';

function Modal(props) {
  console.log('props.showModal', props);
  return(
    <ModalContainer id="modal" showModal={props.showModal}>
      <ModalHeader>{props.modalHeader}</ModalHeader>
      <ModalContent showModal={props.showModal}>{props.children}</ModalContent>
    </ModalContainer>
  );
};

export default Modal;