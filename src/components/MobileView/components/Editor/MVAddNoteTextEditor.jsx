import React, { Component } from 'react';
import {
  convertToRaw,
  Editor,
  EditorState,
  RichUtils
} from 'draft-js';

/** Util */
import Util from '../../../../utility/util';

/** Styles */
import './mv-note-text-editor.css';

class MVAddNoteTextEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty()
    };
    this.onChange = this.onChange.bind(this);
    this._saveContent = this._saveContent.bind(this);
    this._handleKeyCommand = this._handleKeyCommand.bind(this);
  };

  onChange = (editorState) => {
    const contentState = editorState.getCurrentContent();
    this.props.handleContentChange(convertToRaw(contentState));
    this._saveContent(contentState);
    this.setState({ editorState });
  };

  _saveContent = (content) => {
    Util.API.debounce(window.localStorage.setItem('content', JSON.stringify(convertToRaw(content))), 1000);
  };

  _handleKeyCommand = (command) => {
    const { editorState } = this.state;
    let newState = RichUtils.handleKeyCommand(editorState, command);

    if (newState) {
      this.onChange(newState);
      return true;
    }
    return false;
  };

  fu = () => {
    this.forceUpdate();
    console.log('forceUpdating the Editor');
  };

  render() {
    const { editorState } = this.state;
    // if (this.props.init) {
    //   this.fu(); // <-- does not work!!!
    //   console.log('forceUpdating the Editor');
    // }
    return(
      <div onClick={this.focus}>
        <Editor 
          editorState={editorState}
          onChange={this.onChange}
          handleKeyCommand={this._handleKeyCommand}
          placeholder="Type here..."
        />
      </div>
    );
  }
};

export default MVAddNoteTextEditor;