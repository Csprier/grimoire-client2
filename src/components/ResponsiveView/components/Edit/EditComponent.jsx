import React, { Component } from 'react';

/** Util */
import Util from '../../../../utility/util';

/** Components */
import CustomEditor from '../../../Editor/CustomEditor';

/** Styles */
import './edit-component.css';

class EditComponent extends Component {
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
      })
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
    let payload = {
      userId: user_id,
      title: this.state.title,
      content: JSON.stringify(this.state.content)
    };
    return Util.API.notePUT(note_id, payload)
      .then(() => this.props.reRenderFunction())
      .catch(err => console.error(err));
  };

  render() {
    return(
      <div className="edit-container">
        <form className="edit-form">
          <label className="edit-label">Title</label>
          <input
            className="edit-input"
            type="text"
            name="title"
            onChange={this._handleChange}
            defaultValue={this.state.title}
            placeholder="Title..."
          />
          

          <label className="edit-label">Content</label>
          <CustomEditor 
            editorState={this.state.content}
            handleContentChange={this._handleContentChange}
          />

          <button className="edit-submit-button">Submit</button>
        </form>
      </div>
    );
  };
};

export default EditComponent;