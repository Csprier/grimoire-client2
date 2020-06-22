import React, { Component } from 'react';

/** Util */
import Util from '../../../../utility/util';

/** Components */
import DVNoteTextEditor from '../Editor/DVNoteTextEditor';

/** Styles */
import {
  DVNoteEditorContainer,
  DVNoteEditorForm,
  DVNoteEditorHeader,
  DVNoteEditorInput,
  DVNoteEditorLabel,
  DVNoteEditorSubmitButton,
  DVNoteEditorTitle
} from './DVNoteEditor.styled';
import './dv-edit-note.css';

class DVNoteEditor extends Component { 
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
    console.log('Payload: ', payload);
    return Util.API.notePUT(note_id, payload)
      .then(res => console.log(res))
      .then(() => this.props.reRenderFunction())
      .catch(err => console.error(err));
  };

  render() {
    return(
      <DVNoteEditorContainer>
        <DVNoteEditorHeader>
          <DVNoteEditorTitle>{this.props.note.title}</DVNoteEditorTitle>
        </DVNoteEditorHeader>

        <DVNoteEditorForm onSubmit={this._submitNote}>
          <DVNoteEditorLabel>Title
            <DVNoteEditorInput 
              type="text"
              name="title"
              onChange={this._handleChange}
              defaultValue={this.props.note.title}
              placeholder="Title..."
            />
          </DVNoteEditorLabel>

          <DVNoteEditorLabel>Content
            <DVNoteTextEditor 
              editorState={this.props.note.content}
              handleContentChange={this._handleContentChange}
            />
          </DVNoteEditorLabel>

          <DVNoteEditorSubmitButton>Submit</DVNoteEditorSubmitButton>
        </DVNoteEditorForm>
      </DVNoteEditorContainer>
    );
  };
};

export default DVNoteEditor;