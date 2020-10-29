import React, { Component } from 'react';

/** Util */
import Util from '../../../../utility/util';

/** Styles */
import './mv-note-text-editor.css';

import { 
  convertToRaw,
  convertFromRaw,
  Editor,
  EditorState,
  RichUtils
} from 'draft-js';
// import Editor from 'draft-js-plugins-editor';
// import createToolbarPlugin from 'draft-js-static-toolbar-plugin';
// import {
//   ItalicButton,
//   BoldButton,
//   UnderlineButton,
//   CodeButton,
//   BlockquoteButton
// } from 'draft-js-buttons';
// const toolbarPlugin = createToolbarPlugin();
// const { Toolbar } = toolbarPlugin;
// const plugins = [toolbarPlugin];

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

  componentDidUpdate(prevProps) {
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
  };

  /**
   * _handleKeyCommand: Monitors key commands in the Editor, takes this.state.editorState and passes it into
   *  RichUtils.handleKeyCommand with the command parameter. If there is a newState, invoke onChange to change the 
   *  editorState to reflect the new contentState and return true; otherwise, return false and do nothing.
   * @param {string}  command 
   */
  _handleKeyCommand(command, editorState = this.state.editorState) {
    // const { editorState } = this.state;
    // console.log('asdasga', editorState);
    let newState = RichUtils.handleKeyCommand(editorState, command);

    if (newState) {
      this.onChange(newState);
      return 'handled';
    }
    return 'not-handled';
  };

  /** RICH UTIL FUNCTIONS */
  onUnderlineClick = () => {
		this.onChange(
			RichUtils.toggleInlineStyle(this.state.editorState, "UNDERLINE")
		);
	};

	onBoldClick = () => {
		this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, "BOLD"));
	};

	onItalicClick = () => {
		this.onChange(
			RichUtils.toggleInlineStyle(this.state.editorState, "ITALIC")
		);
	};

  /** FOCUS the Editor */
  focus = () => {
    this.editor.focus();
  };

  render() {
    const { editorState } = this.state;
    return(
      <div onClick={this.focus}>
        <div>
          <button onClick={this.onUnderlineClick}>U</button>
          <button onClick={this.onBoldClick}>
            <b>B</b>
          </button>
          <button onClick={this.onItalicClick}>
            <em>I</em>
          </button>
        </div>
        <Editor 
          editorState={editorState}
          onChange={this.onChange}
          handleKeyCommand={this._handleKeyCommand}
          // plugins={plugins}
          ref={(element) => { this.editor = element }}
        />
      </div>
    );
  }
};

export default MVNoteTextEditor;

/* <Toolbar>
  {(externalProps) => (
    <div className="flex-fragment">
      <BoldButton {...externalProps} />
      <ItalicButton {...externalProps} />
      <UnderlineButton {...externalProps} />
      <CodeButton {...externalProps} />
      <BlockquoteButton {...externalProps} />
    </div>
  )}
</Toolbar> */