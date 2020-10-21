import React, { Component } from 'react';

/** Util */
import Util from '../../../../utility/util';

/** Styles */
import './mv-note-text-editor.css';

import { 
  convertToRaw,
  convertFromRaw,
  EditorState,
  RichUtils
} from 'draft-js';
import Editor from 'draft-js-plugins-editor';
import createToolbarPlugin, { Separator }  from 'draft-js-static-toolbar-plugin';
import {
  ItalicButton,
  BoldButton,
  UnderlineButton,
  CodeButton,
  UnorderedListButton,
  OrderedListButton,
  BlockquoteButton,
  CodeBlockButton,
} from 'draft-js-buttons';
const toolbarPlugin = createToolbarPlugin();
const { Toolbar } = toolbarPlugin;
const plugins = [toolbarPlugin];

class MVNoteTextEditor extends Component {
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
};

export default MVNoteTextEditor;