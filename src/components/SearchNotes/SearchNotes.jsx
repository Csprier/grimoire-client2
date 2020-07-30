import React from 'react';

/** Styles */
import {
  NoteCounter,
  SearchInput,
  SearchNotesInputContainer
} from './SearchNotes.styled.js';

const SearchNotes = (props) => {
  function modifySearchTerm(e) {
    let term = e.target.value;
    props.setSearchTerm(term);
  };

  return(
    <SearchNotesInputContainer>
      <NoteCounter>{props.notes ? `${props.notes.length} Notes` : 'Notes'}</NoteCounter>
      <SearchInput 
        type="text"
        name="searchterm"
        onChange={modifySearchTerm}
        placeholder="Search notes..."
      />
    </SearchNotesInputContainer>
  );
};

export default SearchNotes;