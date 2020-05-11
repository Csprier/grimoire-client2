import React, { useEffect, useState } from 'react';

/** Util */
import Util from '../../../utility/util';

/** Styles */
import {
  NoteListContainer
} from './NoteList.styled';

const NoteList = () => {
  const [listOfNotes, setListOfNotes] = useState([]);
  
  useEffect(() => {
    GETNotes();
    console.log(listOfNotes);
  }, []);

  function GETNotes() {
    let notes = Util.API.noteGET();
    setListOfNotes(notes);
  };

  return(
    <NoteListContainer>
            
    </NoteListContainer>
  );
};

export default NoteList;