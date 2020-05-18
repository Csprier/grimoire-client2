import React, { useState } from 'react';

/** Styles */
import { DashboardContainer } from './Dashboard.styled';
import {
  ModalContainer,
} from '../Notes/NoteList.styled';

/** Components */
import AddNoteFormComponent from '../Notes/components/AddNoteForm';
import Modal from '../Modal/Modal';
import NavigationBar from '../Navigation/Navigation';
import NoteList from '../Notes/NoteList';

const Dashboard = () => {
  const [showModal, toggleModal] = useState(false);

  function toggleModalRender() {
    toggleModal(!showModal);
    console.log('Modal toggle:', showModal);
  }

  return(
    <DashboardContainer>
      <NavigationBar />
      <button onClick={() => toggleModalRender()}>Add Note</button>
      <ModalContainer showModal>
        {!showModal
          ? <Modal modalHeader={'Add a Note'}>
              <AddNoteFormComponent showModal={showModal} />
            </Modal>
          : null}
      </ModalContainer>
      <NoteList />
    </DashboardContainer>
  )
};

export default Dashboard;
