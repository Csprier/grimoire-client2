import React, { useEffect, useState } from 'react';

/** Util */
import Util from '../../../utility/util';

/** Components */
// import Note from '../Note';
import NoteFormComponent from '../NoteForm';

/** Styles */
import {
  NoteListContainer
} from './NoteList.styled';

const useForceUpdate = () => useState()[1]  

const NoteList = () => {
  const [listOfNotes, setListOfNotes] = useState([]);
  const [reRender, toggleReRender] = useState(false);
  const forceUpdate = useForceUpdate();

  useEffect(() => {
    if (reRender) {
      Util.API.debounce(_GETNotes, 2000);
      forceUpdate();
      console.log('Rerendering Note List and resetting toggle');
      toggleReRender(!reRender);
    }
    Util.API.debounce(_GETNotes, 2000);
  }, [reRender, forceUpdate]);

  function _GETNotes() {
    Util.API.noteGET()
      .then(res => {
        let notes = res;
        setListOfNotes(notes);
      })
      .catch(err => console.error(err));
  };

  function _reRenderNoteList() {
    toggleReRender(!reRender);
  };

  // console.log('Note List RR toggle:', reRender);
  // console.log('List of Notes: ', listOfNotes);
  return(
    <NoteListContainer>
      {listOfNotes.length ? listOfNotes.map(note => <NoteFormComponent key={note._id} note={note} reRender={_reRenderNoteList} />) : <h1>Loading...</h1>}      
    </NoteListContainer>
  );
};

export default NoteList;

// Expiration date on a Note to prevent duplicates