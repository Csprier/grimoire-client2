import React from 'react';

/** Styles */
import {
  MVNote,
  MVAddNoteButton,
  MVNoteListh1,
  MVNoteListContainer,
  // MVNoteListAnimatedContainer,
  MVNoteTitle,
  MVNoteSnippet
} from './MVNoteList.styled';

const MobileViewNoteList = (props) => {
  const { setAddNote, setClicked, setSelected, setShowModal } = props;
  return(
    <MVNoteListContainer>
      <MVNoteListh1>Notes</MVNoteListh1>
      <MVAddNoteButton 
        onClick={() => {
          setAddNote(true);
          setShowModal(true);
          console.log('Add a note!');
      }}>+</MVAddNoteButton>

      { /** Render the note list with styled-components */
        props.notes 
          ? props.notes.map(note => {
              let contentSnippet = JSON.parse(note.content);
              let formattedSnippet = contentSnippet.blocks[0].text.slice(0, 10) + '...';
              // console.log(note);
              return (
                <MVNote key={note._id} id={note._id}
                  onClick={() => {
                    setClicked(true);
                    setSelected(note);
                    setShowModal(true);
                  }}
                >
                  <MVNoteTitle>{note.title}</MVNoteTitle>
                  <MVNoteSnippet>{formattedSnippet}</MVNoteSnippet>
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