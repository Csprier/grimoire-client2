import React, { Component } from 'react';
import { 
  Editor,
  EditorState,
  convertToRaw 
} from 'draft-js';

/** Util */
import Util from '../../../../utility/util';

/** Styles */
import './note-editor.css';

class AddNoteTextEditor extends Component {
  constructor() {
    super();
    this.state = {
      editorState: EditorState.createEmpty()
    };
    this.onChange = this.onChange.bind(this);
  };

  onChange = (editorState) => {
    const contentState = editorState.getCurrentContent();
    this.props.handleContentChange(convertToRaw(contentState));
    this._saveContent(contentState);
    this.setState({ editorState });
  };

  _saveContent = (content) => {
    Util.API.debounce(window.localStorage.setItem('content', JSON.stringify(convertToRaw(content))), 1000);
  }

  render() {
    const { editorState } = this.state;
    return(
      <div onClick={this.focus}>
        <Editor 
          editorState={editorState}
          onChange={this.onChange}
        />
      </div>
    );
  }
}

export default AddNoteTextEditor;