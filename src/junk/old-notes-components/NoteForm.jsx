import React, { Component } from 'react';

/** Util */
import Util from '../../../utility/util';

/** Components */
import NoteTextEditor from './Editor/NoteEditor';

/** Styles */
import {
  ButtonContainer,
  Input,
  Label,
  NoteComponentContainer,
  NoteForm,
  NoteComponentHeader,
  NoteTitle,
  SubmitButton,
  ToggleButton,
  DeleteButton
} from './NoteForm.styled';

class NoteFormComponent extends Component {
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
    console.log('Note Form Props:', this.props);
    console.log('Note Form State:', this.state);
    return(
      <NoteComponentContainer toggle={this.state.toggle}>
        <NoteComponentHeader>
          <NoteTitle>{this.props.note.title}</NoteTitle>
          <ButtonContainer>
            <ToggleButton onClick={() => this._toggle(!this.state.toggle)} toggle={this.state.toggle}>{this.state.toggle ? 'open' : 'closed'}</ToggleButton>
            <DeleteButton onClick={() => this._deleteNote()}>X</DeleteButton>
          </ButtonContainer>
        </NoteComponentHeader>
        <NoteForm onSubmit={this._submitNote} toggle={this.state.toggle}>
          <Label>Title
            <Input 
              type="text"
              name="title"
              onChange={this._handleChange}
              defaultValue={this.props.note.title || this.state.title || ''}
              placeholder="Title..."
            />
          </Label>

          <Label>Content
            <NoteTextEditor
              editorState={this.state.content}
              handleContentChange={this._handleContentChange}
            />
          </Label>
          <SubmitButton onSubmit={this._submitNote}>Submit</SubmitButton>
        </NoteForm>
      </NoteComponentContainer>
    );
  };
};

export default NoteFormComponent;