import React, { useEffect, useState } from 'react';

/** Util */
import Util from '../../../utility/util';

/** Components */
import Note from '../Note';

/** Styles */
import {
  NoteListContainer
} from './NoteList.styled';

const NoteList = () => {
  const [listOfNotes, setListOfNotes] = useState([]);

  useEffect(() => {
    Util.API.debounce(_GETNotes, 2000);
  }, []);

  function _GETNotes() {
    Util.API.noteGET()
      .then(res => {
        let notes = res;
        setListOfNotes(notes);
      })
      .catch(err => console.error(err));
  };
  
  console.log('List of Notes: ', listOfNotes);
  return(
    <NoteListContainer>
      {listOfNotes.length ? listOfNotes.map(note => <Note key={note._id} note={note} />) : <h1>Loading...</h1>}      
    </NoteListContainer>
  );
};

export default NoteList;

// Expiration date on a Note to prevent duplicates