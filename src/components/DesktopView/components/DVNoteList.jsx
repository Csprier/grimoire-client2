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
  const { clicked, setClicked, displayAddNoteForm } = props;
  const [selected, setSelected] = useState('');
  console.log('displayAddNoteForm', displayAddNoteForm);
  return(
    <DVNoteListContainer>
      {props.notes 
        ? props.notes.map(note => {
            let contentSnippet = JSON.parse(note.content);
            let formattedSnippet = contentSnippet.blocks[0].text.slice(0, 10) + '...';
            let unSelectedNote = (
              <DVNote 
                key={note._id}
                onClick={() => {
                  if (selected === '') {
                    setClicked(!clicked);
                    setSelected(note._id);
                    props.openNoteEditor(note);
                  }

                  if (clicked && selected !== note._id) {
                    props.closeNoteEdtior();
                    setSelected(note._id);
                    setTimeout(() => {
                      console.log('Set Timeout triggered');
                      props.openNoteEditor(note);
                    }, 1000);
                  }
                }}
              >
                <DVNoteTitle>{note.title}</DVNoteTitle>
                <DNNoteSnippet>{formattedSnippet}</DNNoteSnippet>
              </DVNote>
            );
            let selectedNote = (
              <DVSelectedNote 
                key={note._id}
                onClick={() => {
                  setClicked(!clicked);
                  setSelected('');
                  props.closeNoteEdtior();
                }}
              >
                <DVNoteTitle>{note.title}</DVNoteTitle>
                <DNNoteSnippet>{formattedSnippet}</DNNoteSnippet>
              </DVSelectedNote>
            );

            return (clicked && selected === note._id && !displayAddNoteForm) ? selectedNote : unSelectedNote;
          })
        : null
      }
    </DVNoteListContainer>
  );
};

export default DesktopViewNoteList;