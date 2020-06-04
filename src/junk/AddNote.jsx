import React from 'react';

/** Util */
// import Util from '../../../utility/util';

/** Components */
import AddNoteTextEditor from '../components/Notes/components/Editor/AddNoteEditor';

/** Styles */
// import {
//   TestComponent,
//   TestHeader
// } from './AddNote.styled';
import '../../Dashboard/components/add-note.css';

const AddNote = (props) => {
  return(
    <div className="add-note-component-container">
        <form 
          className="add-note-form"
          onSubmit={(e) => {
            e.preventDefault();
            this._submitNote();
        }}>
          <label className="add-note-label">Title
            <input
              className="add-note-input" 
              type="text"
              name="title"
              onChange={this._handleChange}
              value={this.state.title || ''}
              placeholder="Title..."
            />
          </label>
          
          <label className="add-note-label">Content
            <AddNoteTextEditor
              editorState={this.state.content}
              handleContentChange={this._handleContentChange}
            />
          </label>
          
          <button className="add-note-submit-button">Submit</button>
        </form>
      </div>
  );
};

export default AddNote;