import React, { Component } from 'react';

/** Util */
import Util from '../../../../utility/util';

/** Components */
import CustomEditor from '../../../Editor/CustomEditor';

/** Styles */
import './mv-edit-note.css';

class MVEditNote2 extends Component {
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
    const id = this.props.note._id;
    const user_id = Util.DATA.getUserIdFromLocalStorage();
    let payload = {
      userId: user_id,
      title: this.state.title,
      content: JSON.stringify(this.state.content)
    };
    console.log('Payload: ', payload);
    return Util.API.notePUT(id, payload)
      .then(res => console.log('notePUT res:', res))
      .then(() => this.props.reRender())
      .catch(err => console.error(err));
  };

  _deleteNote = () => {
    const id = this.state.id;
    console.log('Deleting note:', id);
    return Util.API.noteDELETE(id)
      .then(() => this.props.reRender())
      .catch(err => console.error(err));
  };

  render() {
    return(
      <div className="mv-edit-note-container">
        <form className="mv-edit-note-form" onSubmit={this._submitNote}>
          <label className="mv-edit-note-label">Title
            <input 
              className="mv-edit-note-input"
              type="text"
              name="title"
              onChange={this._handleChange}
              defaultValue={this.state.title}
              placeholder="Title..."
            />
          </label>

          <label className="mv-edit-note-label">Content
            <CustomEditor 
              editorState={this.state.content}
              _handleContentChange={this._handleContentChange}
            />
          </label>
          <button className="mv-edit-note-submit-button">Save</button>
        </form>
      </div>
    );
  }
};

export default MVEditNote2;