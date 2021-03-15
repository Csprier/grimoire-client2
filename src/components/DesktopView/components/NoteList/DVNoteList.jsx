import React from 'react';

/** Libraries */
import moment from 'moment';

/** Icon */
import addIcon from '../../../icons/ADDICON2.png';

/** Components */
import SearchNotes from '../../../SearchNotes/SearchNotes';
import Note from './Note';
import Loader from '../../../Loader/Loader';

/** Styles */
import './dv-note-list.css';

const DVNoteList = (props) => {
	/** ================================================================================ */
  /** PROP IMPORTS 
  /** ================================= */
  const {
    ADDLogic,
    EDITLogic,
    CLICKED,
    LOADING,
    setLoading,
    selectedNote, 
    searchTerm,
  } = props;

	/** ================================================================================ */
  /** SEARCH TERM FILTER 
  /** ================================= */
  let notes = props.notes;
  let filteredListOfNotes = notes.filter(note => note.title.includes(searchTerm))
  let listOfNotesToRender = notes;

  if (searchTerm !== '') {
    listOfNotesToRender = filteredListOfNotes;
  } else {
    listOfNotesToRender = notes;
  };

	return(
    <div className={(selectedNote !== {} && CLICKED) ? "dv-note-list-container editor-opened" : "dv-note-list-container"}>
      <div className="fixed-container">
        <SearchNotes 
          notes={props.notes}
          setSearchTerm={props.setSearchTerm} 
        />
        <img src={addIcon} alt="add" className="add-icon" 
          onClick={() => ADDLogic()}
        />
      </div>

      <div className={(LOADING) ? "show-loader" : "no-loader"}>
        <Loader />
      </div>

      {/* <div className={(LOADING) ? "note-list hide-list-show-loader": "note-list"}> */}
      <div className="note-list">
        {(props.notes)
          ? listOfNotesToRender.map(note => {
            let updatedAt = moment(note.updatedAt);
            let date = updatedAt.format('MMMM Do YYYY, h:mm:ss a')
            return (
              <Note note={note}
                key={note._id}
                date={date}
                updatedAt={updatedAt}
                EDITLogic={EDITLogic}
                setLoading={setLoading}
                reRenderFunction={props.reRenderFunction}
              />
            )
          })
          : <p>No Notes!</p>
        }
      </div>

		</div>
	);
};

export default DVNoteList;