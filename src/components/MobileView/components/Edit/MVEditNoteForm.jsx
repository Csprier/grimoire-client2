import React, { Component } from 'react';

/** Util */
import Util from '../../../../utility/util';

/** Components */
import MVEditNoteTextEditor from '../Editor/MVNoteTextEditor';

/** Styles */
import {
  MVEditNoteButtonContainer,
  MVEditNoteInput,
  MVEditNoteLabel,
  MVEditNoteComponentContainer,
  MVEditNoteForm,
  MVEditNoteComponentHeader,
  MVEditNoteTitle,
  MVEditNoteSubmitButton,
  MVEditNoteToggleButton,
  MVEditNoteDeleteButton
} from './MVEditNoteForm.styled';

class MVEditNoteFormComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      note_id: this.props.note._id || '',
      title: this.props.note.title || '',
      content: this.props.note.content || {},
      toggle: false
    };
    this._toggle = this._toggle.bind(this);
    this._handleChange = this._handleChange.bind(this);
    this._handleContentChange = this._handleContentChange.bind(this);
    this._submitNote = this._submitNote.bind(this);
  };

  _toggle = () => {
    this.setState({ toggle: !this.state.toggle })
    console.log('Toggling Note:', this.state.note_id, this.state.toggle);
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
    const note_id = this.state.note_id;
    const user_id = Util.DATA.getUserIdFromLocalStorage();
    let payload = {
      userId: user_id,
      title: this.state.title,
      content: JSON.stringify(this.state.content)
    };
    console.log('Payload: ', payload);
    return Util.API.notePUT(note_id, payload)
      .then(res => console.log(res))
      .then(() => this.props.reRender())
      .catch(err => console.error(err));
  };

  _deleteNote = () => {
    const note_id = this.state.note_id;
    console.log('Deleting note:', note_id);
    return Util.API.noteDELETE(note_id)
      .then(() => this.props.reRender())
      .catch(err => console.error(err));
  };

  render() {
    // console.log('Note Form Props:', this.props);
    // console.log('Note Form State:', this.state);
    return(
      <MVEditNoteComponentContainer toggle={this.state.toggle}>
        {/* <MVEditNoteComponentHeader>
          <MVEditNoteTitle>{this.props.note.title}</MVEditNoteTitle>
          <MVEditNoteButtonContainer>
            <MVEditNoteToggleButton onClick={() => this._toggle(!this.state.toggle)} toggle={this.state.toggle}>{this.state.toggle ? 'open' : 'closed'}</MVEditNoteToggleButton>
            <MVEditNoteDeleteButton onClick={() => this._deleteNote()}>X</MVEditNoteDeleteButton>
          </MVEditNoteButtonContainer>
        </MVEditNoteComponentHeader> */}
        <MVEditNoteForm onSubmit={this._submitNote} toggle={this.state.toggle}>
          <MVEditNoteLabel>Title
            <MVEditNoteInput 
              type="text"
              name="title"
              onChange={this._handleChange}
              defaultValue={this.props.note.title || this.state.title || ''}
              placeholder="Title..."
            />
          </MVEditNoteLabel>

          <MVEditNoteLabel>Content
            <MVEditNoteTextEditor
              editorState={this.state.content}
              handleContentChange={this._handleContentChange}
            />
          </MVEditNoteLabel>
          <MVEditNoteSubmitButton>Submit</MVEditNoteSubmitButton>
        </MVEditNoteForm>
      </MVEditNoteComponentContainer>
    );
  };
};

export default MVEditNoteFormComponent;