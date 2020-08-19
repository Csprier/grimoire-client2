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
import './dv-note-text-editor.css';

class AddNoteTextEditor extends Component {
  constructor() {
    super();
    this.state = {
      editorState: EditorState.createEmpty()
    };
    this.onChange = this.onChange.bind(this);
    this._saveContent = this._saveContent.bind(this);
    this._handleKeyCommand = this._handleKeyCommand.bind(this);
    // this._onBoldClick = this._onBoldClick.bind(this);
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

  /** */
  // _onBoldClick = () => {
  //   const { editorState } = this.state;
  //   this.onChange(RichUtils.toggleInlineStyle(editorState, 'BOLD'));
  // }

  render() {
    const { editorState } = this.state;
    return(
      <div>
        {/* <div className="editor-button-container">
          <button 
            className="editor-button"
            type="button" 
            onClick={() => this._onBoldClick()}
          >
            <strong>BOLD</strong>
          </button>

        </div> */}

        <Editor 
          editorState={editorState}
          onChange={this.onChange}
          handleKeyCommand={this._handleKeyCommand}
        />
      </div>
    );
  }
};

export default AddNoteTextEditor;