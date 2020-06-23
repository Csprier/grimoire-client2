import React, { useState } from 'react';

/** Styles */
import {
  MVNote,
  MVNoteListContainer,
  MVNoteTitle,
  MVNoteSnippet
} from './MVNoteList.styled';

const MobileViewNoteList = (props) => {
  return(
    <MVNoteListContainer>
      {props.notes 
        ? console.log(props.notes) 
        : console.log('No notes.')}

      {props.notes 
        ? props.notes.map(note => {
            let contentSnippet = JSON.parse(note.content);
            let formattedSnippet = contentSnippet.blocks[0].text.slice(0, 10) + '...';
            return (
              <MVNote 
                key={note._id}
                onClick={() => console.log(note._id)}
              >
                <MVNoteTitle>{note.title}</MVNoteTitle>
                <MVNoteSnippet>{formattedSnippet}</MVNoteSnippet>
              </MVNote>
            );
        }) 
        : <h2>No notes...</h2>}
    </MVNoteListContainer>
  );
};

export default MobileViewNoteList;