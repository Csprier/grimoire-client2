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
  const { clicked, setClicked, displayAddNoteForm, selectedNote, searchTerm  } = props;
  const [selected, setSelected] = useState('');
  // console.log('displayAddNoteForm', displayAddNoteForm, '\n', 'selected', selected, '\n', 'selectedNote', selectedNote);
  
  if (displayAddNoteForm && selectedNote === {}) {
    // Add Note button was clicked when there WAS NOT a previously selected note
    setSelected({});
  } else if (displayAddNoteForm && selectedNote !== {}) {
    // Add Note button was clicked when there WAS a previously selected note
    setSelected({});
  }

  /** SEARCH TERM FILTER */
  let notes = props.notes;
  let filteredListOfNotes = notes.filter(note => note.title.includes(searchTerm))
  let listOfNotesToRender = notes;

  if (searchTerm !== '') {
    listOfNotesToRender = filteredListOfNotes;
  } else {
    listOfNotesToRender = notes;
  }

  return(
    <DVNoteListContainer>
      {props.notes 
        ? listOfNotesToRender.map(note => {
            let contentSnippet = JSON.parse(note.content);
            let formattedSnippet = contentSnippet.blocks[0].text.slice(0, 10) + '...';
            let unSelectedNoteListItem = (
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
                    }, 200);
                  }
                }}
              >
                <DVNoteTitle>{note.title}</DVNoteTitle>
                <DNNoteSnippet>{formattedSnippet}</DNNoteSnippet>
              </DVNote>
            );

            let selectedNoteListItem = (
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

            // return (clicked && selected === note._id) ? selectedNote : unSelectedNote;
            return (displayAddNoteForm && selectedNote === {})
                ? unSelectedNoteListItem
                : (clicked && selectedNote._id === note._id) ? selectedNoteListItem : unSelectedNoteListItem;
          })
        : null
      }
    </DVNoteListContainer>
  );
};

export default DesktopViewNoteList;