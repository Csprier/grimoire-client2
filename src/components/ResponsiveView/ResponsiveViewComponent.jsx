import React, { useEffect, useState } from 'react';

/** Components */
import Note from './components/Note';

/** Styles */
import './responsive-view.css';

const ResponsiveViewComponent = (props) => {
  const [notes, setNotes] = useState([]);
  const [selectedNote, setAsSelectedNote] = useState({});

  useEffect(() => {
    setNotes(props.notes);
    console.log('selectedNote:', selectedNote);
  }, [props.notes, setNotes, notes, selectedNote]);

  return(
    <div className="responsive-view-container">
      <div className="responsive-view">

        <ul className="note-list">
          {notes.map(note => {
            return(
              <Note 
                note={note} 
                key={note._id}
                setAsSelectedNote={setAsSelectedNote}
                selectedNote={selectedNote}
                // closeNoteEditor={closeNoteEditor}
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