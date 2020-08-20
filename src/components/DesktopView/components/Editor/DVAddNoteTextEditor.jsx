import React, { Component } from 'react';

/** Util */
import Util from '../../../../utility/util';

/** Styles */
import './dv-note-text-editor.css';

import { 
  convertToRaw,
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
  HeadlineOneButton,
  HeadlineTwoButton,
  HeadlineThreeButton,
  UnorderedListButton,
  OrderedListButton,
  BlockquoteButton,
  CodeBlockButton,
} from 'draft-js-buttons';
const toolbarPlugin = createToolbarPlugin();
const { Toolbar } = toolbarPlugin;
const plugins = [toolbarPlugin];

class HeadlinesPicker extends Component {
  componentDidMount() {
    setTimeout(() => { 
      window.addEventListener('click', this.onWindowClick); 
    });
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.onWindowClick);
  }

  // Call `onOverrideContent` again with `undefined`
  // so the toolbar can show its regular content again.
  _onWindowClick = () => this.props.onOverrideContent(undefined);

  render() {
    const buttons = [HeadlineOneButton, HeadlineTwoButton, HeadlineThreeButton];
    return (
      <div>
        {buttons.map((Button, i) => // eslint-disable-next-line
          // <Button key={i} {...this.props} className="tb-button" />
          <div key={i} {...this.props} className="tb-button"></div>
        )}
      </div>
    );
  }
};

class HeadlinesButton extends Component {
  onClick = () =>
    // A button can call `onOverrideContent` to replace the content
    // of the toolbar. This can be useful for displaying sub
    // menus or requesting additional information from the user.
    this.props.onOverrideContent(HeadlinesPicker);

  render() {
    return (
      <div className="headlineButtonWrapper">
        <button onClick={this.onClick} className="headlineButton">
          H
        </button>
      </div>
    );
  }
};

class AddNoteTextEditor extends Component {
  constructor() {
    super();
    this.state = {
      editorState: EditorState.createEmpty()
    };
    this.onChange = this.onChange.bind(this);
    this._saveContent = this._saveContent.bind(this);
    this._handleKeyCommand = this._handleKeyCommand.bind(this);
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

  /**  */
  focus = () => {
    this.editor.focus();
  };

  render() {
    const { editorState } = this.state;
    return(
      <div onClick={this.focus}>
        <Toolbar>
          {(externalProps) => (
            <div className="flex-fragment">
              <BoldButton {...externalProps} />
              <ItalicButton {...externalProps} />
              <UnderlineButton {...externalProps} />
              <CodeButton {...externalProps} />
              <Separator {...externalProps} />
              <HeadlinesButton {...externalProps} />
              <UnorderedListButton {...externalProps} />
              <OrderedListButton {...externalProps} />
              <BlockquoteButton {...externalProps} />
              <CodeBlockButton {...externalProps} />
            </div>
          )}
        </Toolbar>

        <Editor 
          editorState={editorState}
          onChange={this.onChange}
          handleKeyCommand={this._handleKeyCommand}
          plugins={plugins}
          ref={(element) => { this.editor = element; }}
        />
      </div>
    );
  }
};

export default AddNoteTextEditor;