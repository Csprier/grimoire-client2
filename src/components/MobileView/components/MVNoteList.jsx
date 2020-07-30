import React from 'react';

/** Libraries */
import moment from 'moment';

/** Utility */
import Util from '../../../utility/util';

/** Icon */
import trashcan from './TRASHCANICON.png';
import addIcon from './ADDICON.png';

/** Styles */
import {
  MVNote,
  // MVAddNoteButton,
  MVNoteListh1,
  MVNoteListContainer,
  MVNoteTitle,
  MVNoteSnippet,
  MVNoteUpdatedAt,
  MVNoteInfoContainer,
  MVNoteDeleteButtonContainer,
  MVNoteTrashCan,
  MVNoteAddIcon
} from './MVNoteList.styled';

const MobileViewNoteList = (props) => {
  const { setAddNote, setClicked, setSelected, setShowModal, searchTerm } = props;

  let notes = props.notes;
  let filteredListOfNotes = notes.filter(note => note.title.includes(searchTerm))
  let listOfNotesToRender = notes;

  if (searchTerm !== '') {
    listOfNotesToRender = filteredListOfNotes;
  } else {
    listOfNotesToRender = notes;
  }

  return(
    <MVNoteListContainer>
      <MVNoteListh1>{props.notes ? `${props.notes.length} Notes` : 'Notes'}</MVNoteListh1>
      <MVNoteAddIcon 
        src={addIcon}
        alt="Add a note"
        onClick={() => {
          setAddNote(true);
          setShowModal(true);
          console.log('Add a note!');
        }}  
      />

      { /** Render filtered list of notes if there is a searchTerm */
        props.notes 
          ? listOfNotesToRender.map(note => {
              let contentSnippet = JSON.parse(note.content);
              let formattedSnippet = contentSnippet.blocks[0].text.slice(0, 10) + '...';
              let updatedAt = moment(note.updatedAt);
              let date = updatedAt.format('MMMM Do YYYY, h:mm:ss a')
              return (
                <MVNote key={note._id} id={note._id}>
                  <MVNoteInfoContainer
                    onClick={() => {
                      setClicked(true);
                      setSelected(note);
                      setShowModal(true);
                    }}
                  >
                    <MVNoteTitle>{note.title}</MVNoteTitle>
                    <MVNoteUpdatedAt>Last updated: {date}</MVNoteUpdatedAt>
                    <MVNoteSnippet>{formattedSnippet}</MVNoteSnippet>
                  </MVNoteInfoContainer>
          
                  <MVNoteDeleteButtonContainer>
                      <MVNoteTrashCan 
                        src={trashcan} 
                        alt="delete icon" 
                        onClick={() => {
                          console.log('Deleting:', note._id);
                          Util.API.noteDELETE(note._id)
                            .then(() => props.reRenderFunction())
                            .catch(err => console.error(err)); 
                        }}  
                      />
                  </MVNoteDeleteButtonContainer>
                </MVNote>
              );
            })
          : <span>No notes...</span>
      }
    </MVNoteListContainer>
  );
};

export default MobileViewNoteList;

/* 
<MVNoteAnimatedContainer clicked={clicked}>
  {(clicked && note._id === selected) 
    ? <MVEditNoteForm note={note} reRender={props.reRenderFunction} />
    : <span>
        <MVNoteSnippet>{formattedSnippet}</MVNoteSnippet>
      </span>
  }
</MVNoteAnimatedContainer> 
*/

/**
<MVNoteListAnimatedContainer clicked={clicked}>
  <MVEditNoteForm note={selected} reRender={props.reRenderFunction} />
</MVNoteListAnimatedContainer> 
*/

/**
if (!clicked && selected === {}){
  setClicked(!clicked);
  setSelected(note);
  setShowModal(true);
  console.log('Nothing was previously selected. Changing Clicked, Selected, and showModal: ON');
}

if (clicked && selected !== {}) {
  setSelected(note);
  setShowModal(true);
  console.log('Something was previous selected. Changing Selected, and showModal: ON');
}

if (clicked && selected._id === note._id) {
  setClicked(false);
  setSelected({});
  setShowModal(false);
  console.log('A previous selected Note was clicked. Changing Clicked, Selected, and ShowModal: OFF');
}
*/

/**
  <MVNoteDeleteButton
    onClick={() => {
      console.log('Deleting:', note._id);
      Util.API.noteDELETE(note._id)
        .then(() => props.reRenderFunction())
        .catch(err => console.error(err)); 
    }}
  >Delete</MVNoteDeleteButton>
 */

/*  <MVAddNoteButton 
      onClick={() => {
        setAddNote(true);
        setShowModal(true);
        console.log('Add a note!');
    }}>Add</MVAddNoteButton> 
*/

/* // Render the note list with styled-components
  props.notes 
    ? props.notes.map(note => {
        let contentSnippet = JSON.parse(note.content);
        let formattedSnippet = contentSnippet.blocks[0].text.slice(0, 10) + '...';
        let updatedAt = moment(note.updatedAt); // note.updatedAt.slice(0, 10);
        let date = updatedAt.format('MMMM Do YYYY, h:mm:ss a')
        // console.log(note);
        return (
          <MVNote key={note._id} id={note._id}>
            <MVNoteInfoContainer
              onClick={() => {
                setClicked(true);
                setSelected(note);
                setShowModal(true);
              }}
            >
              <MVNoteTitle>{note.title}</MVNoteTitle>
              <MVNoteUpdatedAt>Last updated: {date}</MVNoteUpdatedAt>
              <MVNoteSnippet>{formattedSnippet}</MVNoteSnippet>
            </MVNoteInfoContainer>

            <MVNoteDeleteButtonContainer>
                <MVNoteTrashCan 
                  src={trashcan} 
                  alt="delete icon" 
                  onClick={() => {
                    console.log('Deleting:', note._id);
                    Util.API.noteDELETE(note._id)
                      .then(() => props.reRenderFunction())
                      .catch(err => console.error(err)); 
                  }}  
                />
            </MVNoteDeleteButtonContainer>
          </MVNote>
        );
    }) 
  : <h2>No notes...</h2>
*/