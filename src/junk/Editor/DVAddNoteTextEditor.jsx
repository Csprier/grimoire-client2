import React, { Component } from 'react';

/** Util */
import Util from '../../../../utility/util';

/** Styles */
import './dv-note-text-editor.css';
import "draft-js/dist/Draft.css";

import { 
  convertToRaw,
  Editor,
  EditorState,
  RichUtils
} from 'draft-js';
import BlockStyleToolbar, { getBlockStyle } from "./BlockStyles/BlockStyleToolbar";

class AddNoteTextEditor extends Component {
  constructor() {
    super();
    this.state = {
      editorState: EditorState.createEmpty()
    };
    this.onChange = this.onChange.bind(this);
    this._saveContent = this._saveContent.bind(this);
    this._handleKeyCommand = this._handleKeyCommand.bind(this);
    this.onUnderlineClick = this.onUnderlineClick.bind(this);
    this.onBoldClick = this.onBoldClick.bind(this);
    this.onItalicClick = this.onItalicClick.bind(this);
    this.toggleBlockType = this.toggleBlockType.bind(this);
    this.focus = this.focus.bind(this);
  };
  
  /**
   * onChange: when an onChange event happens, get the contentState of the editorState, 
   *  pass the raw JSON into props.handleContentChange and save it to localStorage via _saveContent, 
   *  and set the class this.state.editorState to the new editorState
   * @param {object}  editorState - editorState of the editor
  */
  onChange = (editorState) => {
    const contentState = editorState.getCurrentContent();
    this.props.handleContentChange(convertToRaw(contentState));
    this._saveContent(contentState);
    this.setState({ editorState });
  };

  /**
   * _saveContent: use Util.API.debounce to hold off til 1 second after the last keystroke, 
   * then save the JSON of the content to localStorage
   * @param {object}  content - editorState JSON
  */
  _saveContent = (content) => {
    Util.API.debounce(window.localStorage.setItem('content', JSON.stringify(convertToRaw(content))), 1000);
  };

  /**
   * _handleKeyCommand: Monitors key commands in the Editor, takes this.state.editorState and passes it into
   *  RichUtils.handleKeyCommand with the command parameter. If there is a newState, invoke onChange to change the 
   *  editorState to reflect the new contentState and return true; otherwise, return false and do nothing.
   * @param {string}  command 
   */
  _handleKeyCommand(command) {
    const { editorState } = this.state;
    let newState = RichUtils.handleKeyCommand(editorState, command);

    if (newState) {
      this.onChange(newState);
      return 'handled';
    }
    return 'not-handled';
  };

  /** RICH UTIL FUNCTIONS */
  onUnderlineClick = (e) => {
    e.preventDefault();
    console.log('Underline active!');
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, "UNDERLINE"));
  };

  onBoldClick = (e) => {
    e.preventDefault();
    this.focus();
    console.log('Bold active!');
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, "BOLD"));
  };

  onItalicClick = (e) => {
    e.preventDefault();
    console.log('Italic active!');
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, "ITALIC"));
  };

  toggleBlockType = (blockType) => {
    console.log(`${blockType} active!`);
    this.onChange(RichUtils.toggleBlockType(this.state.editorState, blockType));
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
          <div>
            <button onClick={this.onUnderlineClick}>U</button>
            <button onClick={(e) => this.onBoldClick(e)}>
              <b>B</b>
            </button>
            <button onClick={this.onItalicClick}>
              <em>I</em>
            </button>
          </div>

          <BlockStyleToolbar
            editorState={editorState}
            onToggle={this.toggleBlockType}
          />
        </div>

        <Editor 
          editorState={editorState}
          onChange={this.onChange}
          blockStyleFn={getBlockStyle}
          handleKeyCommand={this._handleKeyCommand}
          ref={(element) => { this.editor = element; }} // necesssary for focus()
        />
      </div>
    );
  }
};

export default AddNoteTextEditor;