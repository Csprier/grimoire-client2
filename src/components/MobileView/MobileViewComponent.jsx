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
import MVEditNoteForm from './components/Edit/MVEditNoteForm';

const MobileViewComponent = (props) => {
  const [clicked, setClicked] = useState(false);
  const [selected, setSelected] = useState({});
  const [showModal, setShowModal] = useState(false);

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
          <MVEditNoteForm 
            note={selected} 
            reRender={props.reRenderFunction}
            setShowModal={setShowModal}
          />
        </Modal>

        <MobileViewNoteList 
          notes={props.notes}
          clicked={clicked}
          setClicked={setClicked}
          selected={selected}
          setSelected={setSelected}
          setShowModal={setShowModal}
          reRenderFunction={props.reRenderFunction}
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