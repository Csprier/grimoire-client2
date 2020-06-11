import React, { useState } from 'react';

/** Util */
// import Util from '../../../utility/util';

/** Styles */
import {
  DVNote,
  DVNoteListContainer,
  DVNoteTitle,
  DNNoteSnippet,
  DVSelectedNote
} from './DVNoteList.styled';

const DesktopViewNoteList = (props) => {
  const [clicked, setClicked] = useState(false);
  const [selected, setSelected] = useState('');

  function showNoteId(note) {
    console.log(note._id);
  };

  return(
    <DVNoteListContainer>
      {props.notes 
        ? props.notes.map(note => {
            let contentSnippet = JSON.parse(note.content);
            let formattedSnippet = contentSnippet.blocks[0].text.slice(0, 10) + '...';
            let unSelectedNote = <DVNote key={note._id}>
                                  <DVNoteTitle
                                    onClick={() => {
                                      showNoteId(note);
                                      props.openNoteEditor(note);
                                      setClicked(!clicked);
                                      setSelected(note._id);
                                    }}
                                  >{note.title}</DVNoteTitle>
                                  <DNNoteSnippet>{formattedSnippet}</DNNoteSnippet>
                                </DVNote>
            let selectedNote = <DVSelectedNote key={note._id}>
                                <DVNoteTitle
                                  onClick={() => {
                                    showNoteId(note);
                                    props.openNoteEditor(note);
                                    setClicked(!clicked);
                                    setSelected('');
                                  }}
                                >{note.title}</DVNoteTitle>
                                <DNNoteSnippet>{formattedSnippet}</DNNoteSnippet>
                              </DVSelectedNote>;

            return (clicked && selected === note._id) ? selectedNote : unSelectedNote;
          })
        : null
      }
    </DVNoteListContainer>
  );
};

export default DesktopViewNoteList;