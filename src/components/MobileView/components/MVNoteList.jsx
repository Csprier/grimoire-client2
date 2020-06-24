import React, { useState } from 'react';

/** Styles */
import {
  MVNote,
  MVNoteListContainer,
  MVNoteTitle,
  MVNoteSnippet
} from './MVNoteList.styled';
import MVNoteTextEditor from './Editor/MVNoteTextEditor';

const MobileViewNoteList = (props) => {
  const [clicked, setClicked] = useState(false);

  return(
    <MVNoteListContainer>
      {props.notes 
        ? props.notes.map(note => {
            let contentSnippet = JSON.parse(note.content);
            let formattedSnippet = contentSnippet.blocks[0].text.slice(0, 10) + '...';
            return (
              <MVNote 
                key={note._id}
                clicked={clicked}
                id={note._id}
                onClick={() => {
                  console.log(note._id);
                  setClicked(!clicked);
                }}
              >
                <MVNoteTitle onClick={() => setClicked(!clicked)}>{note.title}</MVNoteTitle>
                {(clicked) 
                  ? <MVNoteTextEditor note={note} />
                  : <span>
                      <MVNoteSnippet>{formattedSnippet}</MVNoteSnippet>
                    </span>
                }
              </MVNote>
            );
        }) 
        : <h2>No notes...</h2>}
    </MVNoteListContainer>
  );
};

export default MobileViewNoteList;