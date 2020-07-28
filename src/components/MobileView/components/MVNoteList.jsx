import React from 'react';

/** Utility */
import Util from '../../../utility/util';

/** Icon */
import trashcan from './TRASHCANICON.png';

/** Styles */
import {
  MVNote,
  MVAddNoteButton,
  MVNoteListh1,
  MVNoteListContainer,
  MVNoteTitle,
  MVNoteSnippet,
  MVNoteUpdatedAt,
  MVNoteInfoContainer,
  MVNoteDeleteButtonContainer,
  MVNoteTrashCan
} from './MVNoteList.styled';

const MobileViewNoteList = (props) => {
  const { setAddNote, setClicked, setSelected, setShowModal } = props;
  return(
    <MVNoteListContainer>
      <MVNoteListh1>{props.notes ? `${props.notes.length} Notes` : 'Notes'}</MVNoteListh1>
      <MVAddNoteButton 
        onClick={() => {
          setAddNote(true);
          setShowModal(true);
          console.log('Add a note!');
      }}>Add</MVAddNoteButton>

      { /** Render the note list with styled-components */
        props.notes 
          ? props.notes.map(note => {
              let contentSnippet = JSON.parse(note.content);
              let formattedSnippet = contentSnippet.blocks[0].text.slice(0, 10) + '...';
              let updatedAt = note.updatedAt.slice(0, 10);
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
                    <MVNoteUpdatedAt>{updatedAt}</MVNoteUpdatedAt>
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