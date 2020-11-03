import React, { useEffect, useState }  from 'react';

/** Icons */
import leftArrowIcon from '../icons/LEFTARROW.png';

/** Styles */
import {
  MobileViewContainer,
  MobileViewComponentContainer,
  ModalCloseButton,
  LeftArrowIcon
} from './MobileView.styled';
import MobileViewNoteList from './components/MVNoteList';
import Modal from '../Modal/Modal';
import MVAddNote from './components/Add/MVAddNote';
import MVEditNote from './components/Edit/MVEditNote';

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
          }}>
            <LeftArrowIcon 
              src={leftArrowIcon} 
              alt="close modal" 
              className="dv-add-left-arrow-icon"
            />
          </ModalCloseButton>
          <h4>
            {(addNote)
              ? 'Add a new note!'
              : `Editing: ${selected.title}!`
            }
          </h4>

          {(addNote) 
            ? <MVAddNote
                reRender={props.reRenderFunction}
                setShowModal={setShowModal}
                setInit={setInit}
                init={init}
              />
            : <MVEditNote
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
          setSearchTerm={props.setSearchTerm}
        />

      </MobileViewComponentContainer>
    </MobileViewContainer>
  );
};

export default MobileViewComponent;