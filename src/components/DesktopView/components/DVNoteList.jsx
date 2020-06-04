import React from 'react';

/** Util */
// import Util from '../../../utility/util';

/** Styles */
import {
  DVNoteListContainer
} from './DVNoteList.styled';

const DesktopViewNoteList = (props) => {
  function showNoteId(note) {
    console.log(note._id);
  };

  return(
    <DVNoteListContainer>
      {props.notes 
        ? props.notes.map(note => {
            return(
              <div 
                key={note._id}
                onClick={() => showNoteId(note)}
              >
                <h1>{note.title}</h1>
              </div>
            )
          })
        : null
      }
    </DVNoteListContainer>
  );
};

export default DesktopViewNoteList;