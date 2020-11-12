import React, { useEffect, useState } from 'react';

/** Components */
import Note from './components/Note';
import SearchNotes from '../SearchNotes/SearchNotes';

/** Styles */
import './responsive-view.css';

const ResponsiveViewComponent = (props) => {
  const [notes, setNotes] = useState([]);
  const [selectedNote, setAsSelectedNote] = useState({});
  const { searchTerm } = props;
  
  useEffect(() => {
    setNotes(props.notes);
    console.log('selectedNote:', selectedNote);
  }, [props.notes, setNotes, notes, selectedNote]);

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

        <div className="dashboard-util-container">
          <SearchNotes 
            notes={props.notes}
            setSearchTerm={props.setSearchTerm} 
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