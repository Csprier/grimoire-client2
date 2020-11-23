import React from 'react';

/** Libraries */
import moment from 'moment';

/** Components */
// import EditComponent from './Edit/EditComponent';

/** Styles */
import './note.css';

const Note = (props) => {
  const { note, setAsSelectedNote, selectedNote, setShowModal } = props;
  let contentSnippet = JSON.parse(note.content);
  let formattedSnippet = contentSnippet.blocks[0].text.slice(0, 20) + '...';
  let updatedAt = moment(note.updatedAt);
  let date = updatedAt.format('MMMM Do YYYY, h:mm:ss a');
  // const isSelected = selectedNote._id === note._id;

  function _onClick() {
    setAsSelectedNote(note);
    setShowModal(true);
    // console.log(note);
    // if (selectedNote === {}) {
    //   setAsSelectedNote(note);
    //   setShowModal(true);
    // }

    // if (selectedNote._id === note._id) {
    //   setAsSelectedNote({});
    //   setShowModal(false);
    // }
    // else if (selectedNote._id !== note._id) {
    //   setAsSelectedNote(note);
    //   setShowModal(true);
    // }
  };

  return(
    <li className="note" key={note._id} onClick={_onClick}>
      <div className="note-info">
        <h4>{note.title.slice(0, 18) + '...'}</h4>
        <span>Last updated: {date}</span>
        <span>{formattedSnippet}</span>
      </div>
    </li>
  );
};

export default Note;

/**
<li className={`note${isSelected ? ' animate-open' : ''}`} key={note._id} onClick={_onClick}>
  <div className="note-info">
    <h4>{note.title.slice(0, 18) + '...'}</h4>
    <span>Last updated: {date}</span>
    <span>{formattedSnippet}</span>
  </div>
  <div className={`animated-editor-display${isSelected ? ' animate-open' : ''}`}>
    <EditComponent 
      note={note}
    />
  </div>
</li>
 */