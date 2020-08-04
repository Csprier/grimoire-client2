import React, { useState } from 'react';

/** Libraries */
import moment from 'moment';

/** Util */
import Util from '../../../utility/util';

/** Icon */
import trashcan from '../../icons/TRASHCANICON.png';
import addIcon from '../../icons/ADDICON.png';

/** Components */
import SearchNotes from '../../SearchNotes/SearchNotes';

/** Styles */
import {
  DVNote,
  DVNoteListContainer,
  DVNoteTitle,
  DNNoteSnippet,
  DVSelectedNote,
  DVNoteUpdatedAt,
  DVNoteInfoContainer,
  DVNoteDeleteButtonContainer,
  DVNoteTrashCan,
  DVNoteAddIcon
} from './DVNoteList.styled';

const DesktopViewNoteList = (props) => {
  const { 
    clicked, 
    setClicked, 
    displayAddNoteForm, 
    selectedNote, 
    searchTerm,
    openNoteEditor,
    closeNoteEdtior,
    animate,
    toggleAddNote,
    setToggleAddNote
  } = props;
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
      
      <SearchNotes 
        notes={props.notes}
        setSearchTerm={props.setSearchTerm} 
      />

      <DVNoteAddIcon 
        src={addIcon}
        alt="Add a note"
        onClick={() => {
          console.log('Button to Add a note was clicked!');
          if (!animate && !toggleAddNote) {
            // setToggleAddNote(true);
            openNoteEditor({});
            console.log('Props:', props);
          } 
          // else if (animate && !toggleAddNote) {
          //   closeNoteEdtior();
          //   setTimeout(() => {
          //     openNoteEditor({});
          //   }, 200)
          // } 
          else {
            closeNoteEdtior();
          }
        }}
      />

      { /** Render filtered list of notes if there is a search term */
        props.notes 
        ? listOfNotesToRender.map(note => {
            let contentSnippet = JSON.parse(note.content);
            let formattedSnippet = contentSnippet.blocks[0].text.slice(0, 10) + '...';
            let updatedAt = moment(note.updatedAt);
            let date = updatedAt.format('MMMM Do YYYY, h:mm:ss a')
            
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
                <DVNoteInfoContainer>
                  <DVNoteTitle>{note.title}</DVNoteTitle>
                  <DVNoteUpdatedAt>Last updated: {date}</DVNoteUpdatedAt>
                  <DNNoteSnippet>{formattedSnippet}</DNNoteSnippet>
                </DVNoteInfoContainer>

                <DVNoteDeleteButtonContainer>
                  <DVNoteTrashCan 
                    src={trashcan} 
                    alt="delete icon" 
                    onClick={() => {
                      console.log('Deleting:', note._id);
                      Util.API.noteDELETE(note._id)
                        .then(() => props.reRenderFunction())
                        .catch(err => console.error(err)); 
                    }}  
                  />
                </DVNoteDeleteButtonContainer>
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
                <DVNoteInfoContainer>
                  <DVNoteTitle>{note.title}</DVNoteTitle>
                  <DVNoteUpdatedAt>Last updated: {date}</DVNoteUpdatedAt>
                  <DNNoteSnippet>{formattedSnippet}</DNNoteSnippet>
                </DVNoteInfoContainer>
              </DVSelectedNote>
            );

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