import React, { useEffect, useState }  from 'react';

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

/** Force ReRender */
const useForceUpdate = () => useState()[1];

const MobileViewComponent = (props) => {
  const [clicked, setClicked] = useState(false);
  const [selected, setSelected] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [addNote, setAddNote] = useState(false);
  const [init, setInit] = useState(false);
  const forceUpdate = useForceUpdate();

  useEffect(() => {
    if (init) {
      forceUpdate();
      console.log('Init is true, forcing update!');
      setInit(false);
    }
  }, [forceUpdate, init, setInit]);

  return(
    <MobileViewContainer>
      <MobileViewComponentContainer>

        <Modal showModal={showModal}>
          <ModalCloseButton onClick={() => {
            if (addNote) {
              setAddNote(false);
              setShowModal(false);
              setClicked(false);
              setSelected({});
              setInit(false);
            }
            setClicked(false);
            setSelected({});
            setShowModal(false);
            setInit(false);
            console.log('Closing modal');
          }}>CLOSE X</ModalCloseButton>
          
          {(addNote) 
            ? <MVAddNoteForm 
                reRender={props.reRenderFunction}
                setShowModal={setShowModal}
                setInit={setInit}
                init={init}
              />
            : <MVEditNoteForm 
                note={selected} 
                reRender={props.reRenderFunction}
                setShowModal={setShowModal}
              />
          }
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
          searchTerm={props.searchTerm}
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