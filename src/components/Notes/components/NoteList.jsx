import React, { useEffect, useState } from 'react';

/** Util */
import Util from '../../../utility/util';

/** Components */
import NoteComponent from '../NoteComponent';

/** Styles */
import {
  NoteListContainer
} from './NoteList.styled';

const NoteList = () => {
  const [listOfNotes, setListOfNotes] = useState([]);

  useEffect(() => {
    _GETNotes();
  }, []);

  function _GETNotes() {
    Util.API.noteGET()
      .then(res => {
        let notes = res;
        // notes.map(note => note.content = JSON.parse(note.content));
        // console.log('notes: ', notes);
        setListOfNotes(notes);
      })
      .catch(err => console.error(err));
  };
  
  console.log('List of Notes: ', listOfNotes);
  return(
    <NoteListContainer>
      {listOfNotes.length ? listOfNotes.map(note => <NoteComponent key={note._id} note={note} />) : null}
    </NoteListContainer>
  );
};

export default NoteList;

// Expiration date on a Note to prevent duplicates