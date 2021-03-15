import React, { useEffect } from 'react';

/** Components */
import NoteFormComponent from './components/NoteForm';

/** Styles */
import {
  NoteListContainer
} from './NoteList.styled';

const NoteList = (props) => {
  useEffect(() => {
    if (props.reRender) {
      props.reRenderFunction();
      console.log('Rerendering Note List and resetting toggle');
      props.toggleReRender(!props.reRender);
    }
  }, [props]);

  return(
    <NoteListContainer>
      {props.listOfNotes.length 
        ? props.listOfNotes.map(note => <NoteFormComponent key={note._id} note={note} reRender={props.reRenderFunction} />) 
        : <h1>Loading...</h1>}
    </NoteListContainer>
  );
};

export default NoteList;