import React, { Component } from 'react';

/** Styles */
import {
  DVNoteEditorContainer
} from './DVNoteEditor.styled';

class DVNoteEditor extends Component { 
  constructor(props) {
    super(props);
    this.state = {
      note_id: this.props.note._id || '',
      title: this.props.note.title || '',
      content: this.props.note.content || ''
    };
    this._handleChange = this._handleChange.bind(this);
    this._handleContentChange = this._handleContentChange.bind(this);
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
    console.log('this.props.note', this.props.note);
    return(
      <DVNoteEditorContainer>

      </DVNoteEditorContainer>
    );
  };
};

export default DVNoteEditor;