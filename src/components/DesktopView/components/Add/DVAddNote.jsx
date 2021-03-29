import React, { Component } from 'react';

/** Util */
import Util from '../../../../utility/util';

/** Icons */
import leftArrowIcon from '../../../icons/LEFTARROW.png';

/** Components */
import CustomEditor from '../../../Editor/CustomEditor';

/** Styles */
import './dv-add-note.css';

class DVAddNote extends Component {
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
    return Util.API.notePOST(payload)
      .then(() => this.props.setLoading(true))
      .then(() => this.props.reRenderFunction())
      .then(() => this.props.closeNoteEditor())
      .catch(err => console.error(err));
  };

  render() {
    return(
      <div className="dv-add-note-container">
        <div className="dv-add-note-header-container">
          <h3 className="dv-add-note-header">Add a new note!</h3>
        </div>
        <form className="dv-add-note-form" onSubmit={(e) => this._submitNote(e)}>
          {/* <button type="submit" className="close-and-submit" onClick={(e) => this._submitNote(e)}>
            <img 
              src={leftArrowIcon} 
              alt="close editor" 
              className="dv-edit-left-arrow-icon"
            />
            <p>Submit</p>
          </button> */}
          <input
            className="dv-add-note-input" 
            type="text"
            name="title"
            onChange={this._handleChange}
            value={this.state.title || ''}
            placeholder="Title..."
          />

          <label className="dv-add-note-label"></label>
          <CustomEditor 
            handleContentChange={this._handleContentChange}
          />

          <div className="form-buttons">
            <button type="submit" className="dv-edit-note-submit-button" onClick={(e) => this._submitNote(e)}>
              Submit
            </button>
            <button className="close-button" onClick={() => this.props.closeNoteEditor()}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    );
  };
};

export default DVAddNote;