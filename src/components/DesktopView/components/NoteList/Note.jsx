import React from 'react';

/** Util */
import Util from '../../../../utility/util';

/** Icon */
import trashcan from '../../../icons/TRASHCAN2.png';

/** Styles */
import './note.css';

const Note = (props) => {
  const { note, EDITLogic, setLoading, reRenderFunction } = props;
  return(
    <div className="note" onClick={() => EDITLogic(note)}>
      <div className="info-container">
        <h2 className="title">{note.title.slice(0, 18) + '...'}</h2>
        <p className="updated-at">{note.updatedAt}</p>
      </div>
      <div className="button-container"
        onClick={(e) => {
          e.stopPropagation();
          console.log('Deleting:', note._id);
          Util.API.noteDELETE(note._id)
            .then(() => setLoading(true))
            .then(() => reRenderFunction())
            .catch(err => console.error(err)); 
        }}>
        <img 
          src={trashcan}
          alt="delete"
          className="delete-icon"
        />
      </div>
    </div>
  );
};

export default Note;