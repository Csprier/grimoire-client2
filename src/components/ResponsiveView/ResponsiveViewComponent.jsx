import React, { useEffect, useState } from 'react';

/** Components */
import Note from './components/Note';
import SearchNotes from '../SearchNotes/SearchNotes';

/** Styles */
import './responsive-view.css';

const ResponsiveViewComponent = (props) => {
  const [notes, setNotes] = useState([]);
  const [selectedNote, setAsSelectedNote] = useState({});
  const isSelected = selectedNote.hasOwnProperty('_id');
  const { searchTerm, setSearchTerm } = props;

  useEffect(() => {
    setNotes(props.notes);
    // console.log('selectedNote:', selectedNote);
    console.log('isSelected: ', isSelected);
  }, [props.notes, setNotes, notes, selectedNote, isSelected]);

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
        </div>
        <ul className="note-list">
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