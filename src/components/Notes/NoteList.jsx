import React, { useEffect, useState } from 'react';

/** Util */
import Util from '../../utility/util';

/** Components */
import AddNoteFormComponent from '../Notes/components/AddNoteForm';
import Modal from '../Modal/Modal';
import NoteFormComponent from './components/NoteForm';

/** Styles */
import {
  AddNoteButton,
  ModalContainer,
  NoteListContainer
} from './NoteList.styled';

const useForceUpdate = () => useState()[1]  

const NoteList = () => {
  const [listOfNotes, setListOfNotes] = useState([]);
  const [reRender, toggleReRender] = useState(false);
  const [showModal, toggleModal] = useState(false);
  const forceUpdate = useForceUpdate();

  useEffect(() => {
    if (reRender) {
      Util.API.debounce(_GETNotes, 2000)
      forceUpdate();
      console.log('Rerendering Note List and resetting toggle');
      toggleReRender(!reRender);
    }
    Util.API.debounce(_GETNotes, 2000);
    console.log('Initial mount modal state', showModal);
  }, [reRender, forceUpdate, showModal]);

  function _GETNotes() {
    Util.API.noteGET()
      .then(res => {
        let notes = res;
        setListOfNotes(notes);
      })
      .catch(err => console.error(err));
  };

  function _reRenderNoteList() {
    toggleReRender(!reRender);
  };

  function toggleModalRender() {
    toggleModal(!showModal);
  }

  return(
    <NoteListContainer>
      <div>
        <AddNoteButton onClick={() => toggleModalRender()} showModal={showModal}>Add Note</AddNoteButton>
        <ModalContainer showModal={showModal}>
          {showModal &&
            <Modal modalHeader={'Add a Note'} showModal={showModal}>
              <AddNoteFormComponent reRender={_reRenderNoteList} closeModal={toggleModalRender} />
            </Modal>}
        </ModalContainer>
      </div>
      {listOfNotes.length ? listOfNotes.map(note => <NoteFormComponent key={note._id} note={note} reRender={_reRenderNoteList} />) : <h1>Loading...</h1>}
    </NoteListContainer>
  );
};

export default NoteList;