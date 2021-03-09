import React from 'react';

/** Util */
import Util from '../../../../utility/util';

/** Icon */
import trashcan from '../../../icons/TRASHCAN2.png';

/** Styles */
import './note.css';

const Note = (props) => {
  console.log(props);
  const { note, EDITLogic } = props;
  return(
    <div className="note" onClick={() => EDITLogic(note)}>
      <div className="info-container">
        <h2 className="title">{note.title.slice(0, 18) + '...'}</h2>
        <p className="updated-at">{note.updatedAt}</p>
      </div>
      <div className="button-container">
        <img 
          src={trashcan}
          alt="delete"
          className="delete-icon"
          onClick={() => {
            console.log('Deleting:', note._id);
            Util.API.noteDELETE(note._id)
              .then(() => props.reRenderFunction())
              .then(() => props.closeNoteEditor())
              .catch(err => console.error(err)); 
          }}
        />
      </div>
    </div>
  );
};

export default Note;