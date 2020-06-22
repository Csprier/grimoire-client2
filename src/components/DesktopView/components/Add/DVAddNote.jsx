import React, { Component } from 'react';

/** Util */
import Util from '../../../../utility/util';

/** Components */
import DVAddNoteTextEditor from '../Editor/DVAddNoteTextEditor';

/** Styles */
// import {
//   DVAddNoteContainer,
//   DVAddNoteForm,
//   DVAddNoteInput,
//   DVAddNoteLabel,
//   DVAddNoteSubmitButton
// } from './DVAddNote.styled';
import './dv-add-note.css';

class DVAddNoteComponent extends Component {
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

  _submitNote = (e) => {
    e.preventDefault();
    const user_id = Util.DATA.getUserIdFromLocalStorage();
    let payload = {
      userId: user_id,
      title: this.state.title,
      content: JSON.stringify(this.state.content)
    };
    console.log('Payload: ', payload);
    return Util.API.notePOST(payload)
      .then(res => console.log(res))
      .then(() => this.props.reRenderFunction())
      .then(() => this.props.closeNoteEdtior())
      .catch(err => console.error(err));
  };

  render() {
    return(
      <div className="dv-add-note-container">
        <form className="dv-add-note-form" onSubmit={(e) => this._submitNote(e)}>
          <label className="dv-add-note-label">Title
            <input
              className="dv-add-note-input" 
              type="text"
              name="title"
              onChange={this._handleChange}
              value={this.state.title || ''}
              placeholder="Title..."
            />
          </label>

          <label className="dv-add-note-label">Content
            <DVAddNoteTextEditor 
              editorState={JSON.stringify(this.state.content)}
              handleContentChange={this._handleContentChange}
            />
          </label>

          <button className="dv-add-note-submit-button">Submit</button>
        </form>
      </div>
    );
  };
};

export default DVAddNoteComponent;