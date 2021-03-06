import React, { Component } from 'react';

/** Util */
import Util from '../../../utility/util';

/** Components */
import AddNoteTextEditor from './Editor/AddNoteEditor';

/** Styles */
import "./add-note.css";

class AddNoteFormComponent extends Component {
  constructor(props){
    super(props);
    this.state = {
      title: '',
      content: {}
    };
    this._handleChange = this._handleChange.bind(this);
    this._handleContentChange = this._handleContentChange.bind(this);
    this._submitNote = this._submitNote.bind(this);
  };

  _handleChange = (e) => {
    e.persist();
    this.setState({
      ...this.state,
      title: e.target.value
    });
  };

  _handleContentChange = (editorState) => this.setState({ content: editorState });

  _submitNote = () => {
    console.log('Submitting note!');
    const user_id = Util.DATA.getUserIdFromLocalStorage();
    let payload = {
      userId: user_id,
      title: this.state.title,
      content: JSON.stringify(this.state.content)
    };
    console.log('Payload: ', payload);
    return Util.API.notePOST(payload)
      .then(() => this.props.toggleAnimation())
      .then(() => this.props.reRenderFunction())
      .catch(err => console.error(err));
  };

  render() {
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
};

export default AddNoteFormComponent;