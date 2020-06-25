import React, { useState } from 'react';

/** Styles */
import {
  MVNote,
  MVNoteListContainer,
  MVNoteTitle,
  MVNoteSnippet
} from './MVNoteList.styled';
import MVEditNoteForm from './Edit/MVEditNoteForm';

const MobileViewNoteList = (props) => {
  const [clicked, setClicked] = useState(false);
  const [selected, setSelected] = useState('');

  function _viewLocalState() {
    return { 
      clicked: clicked, 
      selected: selected
    };
  };

  console.log('MV NoteList Local State:', _viewLocalState());
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
              >
                <MVNoteTitle onClick={() => {
                  if (!clicked && selected === ''){
                    setClicked(!clicked);
                    setSelected(note._id);
                  }

                  if (clicked && selected !== '') {
                    setSelected(note._id);
                  }

                  if (clicked && selected === note._id) {
                    setClicked(false);
                    setSelected('');
                  }
                }}>{note.title}</MVNoteTitle>

                {(clicked && note._id === selected) 
                  ? <MVEditNoteForm note={note} reRender={props.reRenderFunction} />
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