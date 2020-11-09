import React from 'react';

/** Libraries */
import moment from 'moment';

/** Components */
import EditComponent from './Edit/EditComponent';

/** Styles */
import './note.css';

const Note = (props) => {
  const { note, setAsSelectedNote, selectedNote } = props;
  let contentSnippet = JSON.parse(note.content);
  let formattedSnippet = contentSnippet.blocks[0].text.slice(0, 20) + '...';
  let updatedAt = moment(note.updatedAt);
  let date = updatedAt.format('MMMM Do YYYY, h:mm:ss a');

  function _onClick() {
    // console.log(note);
    if (selectedNote === {}) {
      setAsSelectedNote(note);
    }

    if (selectedNote._id === note._id) {
      setAsSelectedNote({});
    }
    else if (selectedNote._id !== note._id) {
      setAsSelectedNote(note);
    }
  };

  return(
    <li className="note" key={note._id} onClick={_onClick}>
      <div className="note-info">
        <h4>{note.title.slice(0, 18) + '...'}</h4>
        <span>Last updated: {date}</span>
        <span>{formattedSnippet}</span>
      </div>
      <div className={`animated-editor-display${(selectedNote && selectedNote._id === note._id) ? ' animate-open' : ''}`}>
        <EditComponent 
          note={note}
        />
      </div>
    </li>
  );
};

export default Note;