import React, { Component } from 'react';
import { 
  Editor,
  EditorState,
  convertFromRaw,
  convertToRaw 
} from 'draft-js';

/** Util */
import Util from '../../../../utility/util';

/** Styles */
import './dv-note-text-editor.css';

class DVNoteTextEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: (this.props.editorState) 
        ? EditorState.createWithContent(convertFromRaw(JSON.parse(this.props.editorState)))
        : EditorState.createEmpty()
    };
    this.onChange = this.onChange.bind(this);
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.props.editorState !== prevProps.editorState) {
      this.setState({
        editorState: (this.props.editorState) 
          ? EditorState.createWithContent(convertFromRaw(JSON.parse(this.props.editorState)))
          : EditorState.createEmpty()
      });
    }
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

export default DVNoteTextEditor;