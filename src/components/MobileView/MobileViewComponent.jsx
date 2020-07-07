import React, { useState }  from 'react';

/** Styles */
import {
  MobileViewContainer,
  // MobileViewButtonContainer,
  MobileViewComponentContainer,
  ModalCloseButton
} from './MobileView.styled';
import MobileViewNoteList from './components/MVNoteList';
import Modal from '../Modal/Modal';
import MVAddNoteForm from './components/Add/MVAddNoteForm';
import MVEditNoteForm from './components/Edit/MVEditNoteForm';

const MobileViewComponent = (props) => {
  const [clicked, setClicked] = useState(false);
  const [selected, setSelected] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [addNote, setAddNote] = useState(false);

  return(
    <MobileViewContainer>

      <MobileViewComponentContainer>
        <Modal showModal={showModal}>
          <ModalCloseButton onClick={() => {
            setClicked(false);
            setSelected({});
            setShowModal(false);
            console.log('Closing modal');
          }}>CLOSE X</ModalCloseButton>
          {/* <MVEditNoteForm 
            note={selected} 
            reRender={props.reRenderFunction}
            setShowModal={setShowModal}
          /> */}
          <MVAddNoteForm 
            reRender={props.reRenderFunction}
            setShowModal={setShowModal}
          />
          {/* {(addNote) 
            ? <MVAddNoteForm 
                reRender={props.reRenderFunction}
                setShowModal={setShowModal}
              />
            : <MVEditNoteForm 
                note={selected} 
                reRender={props.reRenderFunction}
                setShowModal={setShowModal}
              />
          } */}
        </Modal>

        <MobileViewNoteList 
          clicked={clicked}
          notes={props.notes}
          reRenderFunction={props.reRenderFunction}
          selected={selected}
          setAddNote={setAddNote}
          setClicked={setClicked}
          setSelected={setSelected}
          setShowModal={setShowModal}
        />
      </MobileViewComponentContainer>

    </MobileViewContainer>
  );
};

export default MobileViewComponent;

/**
if (!clicked && selected === ''){
  setClicked(!clicked);
  setSelected(note);
  setShowModal(true);
}

if (clicked && selected !== '') {
  setSelected(note);
  setShowModal(true);
}

if (clicked && selected === note._id) {
  setClicked(false);
  setSelected({});
  setShowModal(false);
}
*/

/**
<MobileViewButtonContainer>
  // Add Note Button goes in here
</MobileViewButtonContainer>
*/