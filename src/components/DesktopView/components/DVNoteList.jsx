import React, { useState } from 'react';

/** Util */
// import Util from '../../../utility/util';

/** Styles */
import {
  DVNote,
  DVNoteListContainer,
  DVNoteTitle,
  DNNoteSnippet
} from './DVNoteList.styled';

const DesktopViewNoteList = (props) => {
  const [clicked, setClicked] = useState(false);

  function showNoteId(note) {
    console.log(note._id);
  };

  return(
    <DVNoteListContainer>
      {props.notes 
        ? props.notes.map(note => {
          let contentSnippet = JSON.parse(note.content);
          let formattedSnippet = contentSnippet.blocks[0].text.slice(0, 10) + '...';
            return(
              <DVNote key={note._id} clicked={clicked}>
                <DVNoteTitle
                  onClick={() => {
                    showNoteId(note);
                    props.openNoteEditor(note);
                    setClicked(!clicked);
                  }}
                >{note.title}</DVNoteTitle>
                <DNNoteSnippet>{formattedSnippet}</DNNoteSnippet>
              </DVNote>
            )
          })
        : null
      }
    </DVNoteListContainer>
  );
};

export default DesktopViewNoteList;