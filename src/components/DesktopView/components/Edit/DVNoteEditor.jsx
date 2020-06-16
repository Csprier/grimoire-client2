import React, { Component } from 'react';

/** Components */
import DVNoteTextEditor from './Editor/DVNoteTextEditor';

/** Styles */
import {
  // DVNoteEditorButtonContainer,
  DVNoteEditorContainer,
  // DVNoteEditorDeleteButton,
  DVNoteEditorForm,
  DVNoteEditorHeader,
  DVNoteEditorInput,
  DVNoteEditorLabel,
  DVNoteEditorSubmitButton,
  DVNoteEditorTitle
} from './DVNoteEditor.styled';

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
  };

  componentDidUpdate(prevProps) {
    if (this.props.note !== prevProps.note) {
      this.setState({
        id: this.props.note._id,
        title: this.props.note.title,
        content: this.props.note.content
      })
    }
  }

  _handleChange = (e) => {
    e.persist();
    this.setState({
      ...this.state,
      title: e.target.value
    });
  };

  _handleContentChange = (editorState) => this.setState({ content: editorState });


  render() {
    // console.log('this.props.note', this.props.note);
    console.log(this);
    return(
      <DVNoteEditorContainer>
        <DVNoteEditorHeader>
          <DVNoteEditorTitle>{this.props.note.title}</DVNoteEditorTitle>
        </DVNoteEditorHeader>

        <DVNoteEditorForm>
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
              editorState={this.state.content}
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