import React, { Component } from 'react';

/** Util */
import Util from '../../../../utility/util';

/** Icons */
import leftArrowIcon from '../../../icons/LEFTARROW.png';

/** Components */
import CustomEditor from '../../../Editor/CustomEditor';

/** Styles */
import './dv-edit-note.css';

class DVEditNoteComponent extends Component { 
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.note._id,
      title: this.props.note.title,
      content: this.props.note.content
    };
    this._handleChange = this._handleChange.bind(this);
    this._handleContentChange = this._handleContentChange.bind(this);
    this._submitNote = this._submitNote.bind(this);
  };

  componentDidUpdate(prevProps) {
    if (this.props.note !== prevProps.note) {
      this.setState({
        id: this.props.note._id,
        title: this.props.note.title,
        content: this.props.note.content
      });
    }
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
    const note_id = this.state.id;
    const user_id = Util.DATA.getUserIdFromLocalStorage();
    let preparedPayloadContent = (typeof this.state.content === 'string') ? JSON.parse(this.state.content) : this.state.content;
    let payload = {
      userId: user_id,
      title: this.state.title,
      content: JSON.stringify(preparedPayloadContent)
    };
    console.log('edit payload: ', payload);
    return Util.API.notePUT(note_id, payload)
      .then(() => this.props.reRenderFunction())
      .then(() => Util.DATA.clearLocalStorageContent())
      .catch(err => console.error(err));
  };

  render() {
    // console.log('DVEdit Current State:', this.state);
    return(
      <div className="dv-edit-note-container">
        <div className="dv-edit-note-header-container">
          <img 
            src={leftArrowIcon} 
            alt="close editor" 
            className="dv-edit-left-arrow-icon"
            onClick={() => this.props.closeNoteEditor()} 
          />
          <h3 className="dv-edit-note-header">Editing: {this.props.note.title}</h3>
        </div>

        <form className="dv-edit-note-form" onSubmit={this._submitNote}>
          <input
            className="dv-edit-note-input"
            type="text"
            name="title"
            onChange={this._handleChange}
            defaultValue={this.state.title}
            placeholder="Title..."
          />

          <label className="dv-edit-note-label"></label>
          <CustomEditor 
            editorState={this.state.content}
            handleContentChange={this._handleContentChange}
          />

          <button className="dv-edit-note-submit-button">Submit</button>
        </form> 
      </div>
    );
  };
};

export default DVEditNoteComponent;