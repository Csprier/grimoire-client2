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
                  // Is selected === '' ?
                  if (selected === '') {
                    setClicked(!clicked);
                    setSelected(note._id);
                    props.selectNote(note);
                    props.openNoteEditor(note);
                  }
                  // Is clicked true, and selected !== note._id ?
                  if (clicked && selected !== note._id) {
                    // console.log('Clicked:', clicked, '&& note._id:', note._id, '-- selected:', selected);
                    props.closeNoteEdtior();
                    setSelected('');
                    props.openNoteEditor(note);
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

            return (clicked && selected === note._id) ? selectedNote : unSelectedNote;
          })
        : null
      }
    </DVNoteListContainer>
  );
};

export default DesktopViewNoteList;