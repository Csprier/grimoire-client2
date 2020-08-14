import React from 'react';
// import React, { useState } from 'react';

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
  DVNoteList,
  DVNoteListContainer,
  DVNoteListFixedContainer,
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
  /** ================================================================================ */
  /** PROP IMPORTS 
  /** ================================= */
  const { 
    clicked, 
    setClicked, 
    selectedNote, 
    searchTerm,
    openNoteEditor,
    closeNoteEdtior,
    toggleAddNote,
    setToggleAddNote
  } = props;
  
  /** ================================================================================ */
  /** Add Note Button functions 
  /** ================================= */
  function modifyToggleAddNote(boolean) {
    console.log('Modifying boolean:', boolean);
    setToggleAddNote(!boolean);
  };

  function handleTheEditor(boolean) {
    console.log('Handling Editor based on boolean:', boolean);
    if (!boolean) {
      openNoteEditor({});
    } else {
      closeNoteEdtior();
    }
  };

  function addNoteButtonLogic() {
    console.log('AddNoteButton has been clicked; handling logic...');
    modifyToggleAddNote(toggleAddNote);
    setTimeout(() => {
      console.log('toggleAddNote was modified, handling editor...')
      handleTheEditor(toggleAddNote);
    }, 200);
  };

  /** ================================================================================ */
  /** SEARCH TERM FILTER 
  /** ================================= */
  let notes = props.notes;
  let filteredListOfNotes = notes.filter(note => note.title.includes(searchTerm))
  let listOfNotesToRender = notes;

  if (searchTerm !== '') {
    listOfNotesToRender = filteredListOfNotes;
  } else {
    listOfNotesToRender = notes;
  };
  
  /** ================================================================================ */
  /** Component */
  /** ================================= */
  return(
    <DVNoteListContainer>
      
      <DVNoteListFixedContainer>
        <SearchNotes 
          notes={props.notes}
          setSearchTerm={props.setSearchTerm} 
        />

        {/**
         * This button is on DVNoteList, and effects DVEditorDisplay.jsx.
         * addNoteButtonLogic handles modifying * toggleAddNote * and after a 1s timeout, passes to the next function.
         * handleTheEditor handles a boolean, in this case ^^^^.
         * It processes the value of the boolean, and handles opening the editor via props.openNoteEditor
         */}
        <DVNoteAddIcon 
          src={addIcon}
          alt="Add a note"
          onClick={() => {
            addNoteButtonLogic();
          }}
        />
      </DVNoteListFixedContainer>

      <DVNoteList>
        { /** Render filtered list of notes if there is a search term */
          (props.notes) 
            ? listOfNotesToRender.map(note => {
                let { 
                  selectNote, 
                  openNoteEditor, 
                  closeNoteEdtior 
                } = props;
                let contentSnippet = JSON.parse(note.content);
                let formattedSnippet = contentSnippet.blocks[0].text.slice(0, 10) + '...';
                let updatedAt = moment(note.updatedAt);
                let date = updatedAt.format('MMMM Do YYYY, h:mm:ss a')
                
                let unSelectedNoteListItem = (
                  <DVNote 
                    key={note._id}
                    onClick={() => {
                      console.log('Clicked:', note._id);
                      setClicked(true);
                      selectNote(note);
                      openNoteEditor(note);

                      if (clicked && selectedNote._id !== note._id) {
                        closeNoteEdtior(); // wipes slate clean
                        selectNote(note);
                        setClicked(!clicked); // selects new note
                        setTimeout(() => {
                          console.log('New note recognized...');
                          openNoteEditor(note); // open editor with new note
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
                      selectNote({});
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

                return (selectedNote === {})
                  ? unSelectedNoteListItem
                  : (clicked && selectedNote._id === note._id) 
                      ? selectedNoteListItem 
                      : unSelectedNoteListItem
              })
          : <p>No notes...</p>
        }
      </DVNoteList>
    </DVNoteListContainer>
  );
};

export default DesktopViewNoteList;