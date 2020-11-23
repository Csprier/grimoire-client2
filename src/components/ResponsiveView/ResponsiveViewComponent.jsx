import React, { useEffect, useState } from 'react';

/** Components */
import Note from './components/Note';
import SearchNotes from '../SearchNotes/SearchNotes';
import Modal from '../Modal/Modal';

/** Icon */
// import trashcan from '../../icons/TRASHCAN2.png';
import addIcon from '../icons/ADDICON2.png';

/** Styles */
import './responsive-view.css';
import AddComponent from './components/Add/AddComponent';

const ResponsiveViewComponent = (props) => {
  const [notes, setNotes] = useState([]);
  const [ADD, setADD] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedNote, setAsSelectedNote] = useState({});
  const isSelected = selectedNote.hasOwnProperty('_id');
  const { searchTerm, setSearchTerm } = props;

  useEffect(() => {
    setNotes(props.notes);
    // console.log('selectedNote:', selectedNote);
    // console.log('isSelected: ', isSelected);
    console.log('ADD:', ADD);
  }, [props.notes, setNotes, notes, selectedNote, isSelected, ADD]);

  /** ================================================================================ */
  /** SEARCH TERM FILTER 
  /** ================================= */
  let filteredListOfNotes = notes.filter(note => note.title.includes(searchTerm))
  let listOfNotesToRender = notes;

  if (searchTerm !== '') {
    listOfNotesToRender = filteredListOfNotes;
  } else {
    listOfNotesToRender = notes;
  };

  return(
    <div className="responsive-view-container">
      <div className="responsive-view">

        <div className={`search-container ${(!isSelected) ? 'open' : 'closed'}`}>
          <SearchNotes 
            notes={notes}
            setSearchTerm={setSearchTerm} 
          />
          <img 
            src={addIcon}
            alt="Add a note"
            className={`add-icon ${ADD ? 'hide' : ''}`}
            onClick={() => {
              console.log('Add a note!');
              setADD(true);
            }} 
          />
        </div>

        <Modal showModal={showModal}>
            
        </Modal>

        <ul className={`note-list ${ADD ? 'expand-height' : ''}`}>
          {listOfNotesToRender.map(note => {
            return(
              <Note 
                note={note} 
                key={note._id}
                setAsSelectedNote={setAsSelectedNote}
                selectedNote={selectedNote}
                reRenderFunction={props.reRenderFunction}
              />
            )
          })}
        </ul>

      </div>
    </div>
  );
};

export default ResponsiveViewComponent;

/* {(ADD)
  ? <AddComponent 
      ADD={ADD}
      setAdd={setADD}
      reRenderFunction={props.reRenderFunction}
    />
  : null
} */