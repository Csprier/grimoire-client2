import React from 'react';

/** Libraries */
import moment from 'moment';

/** Util */
import Util from '../utility/util';

/** Icon */
import trashcan from '../../icons/TRASHCAN2.png';
import addIcon from '../../icons/ADDICON2.png';

/** Components */
import SearchNotes from '../components/SearchNotes/SearchNotes';

/** Styles */
import {
  DVNote,
  DVNoteList,
  DVNoteListContainer,
  DVNoteListFixedContainer,
  DVNoteTitle,
  // DNNoteSnippet,
  DVSelectedNote,
  DVNoteUpdatedAt,
  DVNoteInfoContainer,
  DVNoteDeleteButtonContainer,
  DVNoteTrashCan,
  DVNoteAddIcon
} from './DVNoteList-JUNK.styled';

const DesktopViewNoteList = (props) => {
  /** ================================================================================ */
  /** PROP IMPORTS 
  /** ================================= */
  const {
    ADDLogic,
    EDITLogic,
    CLICKED,
    selectedNote, 
    searchTerm,
  } = props;

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
  
  return(
    <DVNoteListContainer>
      
      <DVNoteListFixedContainer>
          <SearchNotes 
            notes={props.notes}
            setSearchTerm={props.setSearchTerm} 
          />
        <DVNoteAddIcon 
          src={addIcon}
          alt="Add a note"
          onClick={() => {
            ADDLogic();
          }}
        />  
      </DVNoteListFixedContainer>

      <DVNoteList>
        { /** Render filtered list of notes if there is a search term */
          (props.notes) 
            ? listOfNotesToRender.map(note => {
                const { EDIT } = props;
                let updatedAt = moment(note.updatedAt);
                let date = updatedAt.format('MMMM Do YYYY, h:mm:ss a')
                let unSelectedNoteListItem = (
                  <DVNote 
                    key={note._id}
                    onClick={() => {
                      EDITLogic(note);
                    }}
                  >
                    <DVNoteInfoContainer>
                      <DVNoteTitle edit={EDIT}>{note.title.slice(0, 18) + '...'}</DVNoteTitle>
                      <DVNoteUpdatedAt edit={EDIT}>Last updated: {date}</DVNoteUpdatedAt>
                    </DVNoteInfoContainer>

                    <DVNoteDeleteButtonContainer>
                      <DVNoteTrashCan 
                        src={trashcan} 
                        alt="delete icon" 
                        onClick={() => {
                          console.log('Deleting:', note._id);
                          Util.API.noteDELETE(note._id)
                            .then(() => props.reRenderFunction())
                            .then(() => props.closeNoteEditor())
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
                      props.closeNoteEditor();
                    }}
                  >
                    <DVNoteInfoContainer>
                      <DVNoteTitle>{note.title.slice(0, 18) + '...'}</DVNoteTitle>
                      <DVNoteUpdatedAt>Last updated: {date}</DVNoteUpdatedAt>
                    </DVNoteInfoContainer>
                    <DVNoteDeleteButtonContainer>
                      {/** This styled-component exists here in DVSelectedNote to resolve a padding issue in the CSS. */}
                    </DVNoteDeleteButtonContainer>
                  </DVSelectedNote>
                );
                    
                return (note && !CLICKED)
                  ? unSelectedNoteListItem
                  : (CLICKED && selectedNote._id === note._id)
                    ? selectedNoteListItem
                    : unSelectedNoteListItem
              })
          : <p>No notes... to create a note, hit the add note button. :D</p>
        }
      </DVNoteList>
    </DVNoteListContainer>
  );
};

export default DesktopViewNoteList;