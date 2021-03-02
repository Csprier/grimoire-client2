import React, { Component } from 'react';

/** Util */
import Util from '../../utility/util';

import { 
  convertToRaw,
  convertFromRaw,
  Editor,
  EditorState,
  RichUtils
} from 'draft-js';
import { getBlockStyle } from './getBlockStyle';
import { styleMap } from './styleMap';
import BlockStyleControls from './BlockStyleControls';
import InlineStyleControls from './InlineStyleControls';

/** Styles */
import './css/editor.css';

class CustomEditor extends Component  {
  constructor(props) {
    super(props);
    this.state = {
      editorState: (this.props.editorState) 
        ? EditorState.createWithContent(convertFromRaw(JSON.parse(this.props.editorState)))
        : EditorState.createEmpty()
    };
    this.saveContent = (content) => this._saveContent(content);
    this.focus = () => this.editor.focus();
    this.onChange = (editorState) => this._onChange(editorState);
    this.handleKeyCommand = (command) => this._handleKeyCommand(command);
    this.toggleBlockType = (type) => this._toggleBlockType(type);
    this.toggleInlineStyle = (style) => this._toggleInlineStyle(style);
  };

  componentDidMount() {
    let normalizedEditorState = (typeof this.props.editorState === "object" && this.props.editorState !== null)
      ? JSON.stringify(this.props.editorState)
      : this.props.editorState;
    let editorStatetoBeRendered = EditorState.createWithContent(convertFromRaw(JSON.parse(normalizedEditorState)))
    editorStatetoBeRendered = EditorState.moveFocusToEnd(this.state.editorState);
    this.setState({
      editorState: editorStatetoBeRendered
    });
  }

  componentDidUpdate(prevProps) {
    // console.log('CustomEditor CDU props: ', this.props.editorState);
    if (this.props.editorState !== prevProps.editorState) {
      let normalizedEditorState = (typeof this.props.editorState === "object" && this.props.editorState !== null)
      ? JSON.stringify(this.props.editorState)
      : this.props.editorState;
      let editorStatetoBeRendered = EditorState.createWithContent(convertFromRaw(JSON.parse(normalizedEditorState)))
      // editorStatetoBeRendered = EditorState.moveFocusToEnd(this.state.editorState);
      this.setState({
        editorState: editorStatetoBeRendered
      });
    }
  }

  /**
   * onChange: when an onChange event happens, get the contentState of the editorState, 
   *  pass the raw JSON into props.handleContentChange and save it to localStorage via _saveContent, 
   *  and set the class this.state.editorState to the new editorState
   * @param {object}  editorState - editorState of the editor
  */
  _onChange = (editorState) => {
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
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      this.onChange(newState);
      return true;
    }
    return false;
  };

  _toggleBlockType(blockType) {
    this.onChange(
      RichUtils.toggleBlockType(
        this.state.editorState,
        blockType
      )
    );
  }

  _toggleInlineStyle(inlineStyle) {
    this.onChange(
      RichUtils.toggleInlineStyle(
        this.state.editorState,
        inlineStyle
      )
    );
  };

  render() {
    const { editorState } = this.state;
    // console.log(editorState);

    // If the user changes block type before entering any text, we can
    // either style the placeholder or hide it. Let's just hide it now.
    let className = 'RichEditor-editor';
    const contentState = editorState.getCurrentContent();
    if (!contentState.hasText()) {
      if (contentState.getBlockMap().first().getType() !== 'unstyled') {
        className += ' RichEditor-hidePlaceholder';
      }
    }

    return (
      <div className="RichEditor-root">
        <BlockStyleControls
          editorState={editorState}
          onToggle={this.toggleBlockType}
        />
        <InlineStyleControls
          editorState={editorState}
          onToggle={this.toggleInlineStyle}
        />
        <div className={className} /*onClick={this.focus}*/>
          <Editor
            blockStyleFn={getBlockStyle}
            customStyleMap={styleMap}
            editorState={editorState}
            handleKeyCommand={this.handleKeyCommand}
            onChange={this.onChange}
            placeholder="Tell a story..."
            ref={(element) => { this.editor = element; }} // necesssary for focus()
            onClick={this.focus}
            spellCheck={true}
          />
        </div>
      </div>
    );
  }
};

export default CustomEditor;

/** Handle rapid selecting from the note list to properly render editorState in the editor as new notes are selected while the editor is open */
/*
componentDidUpdate(prevProps) {
  console.clear();
  console.log('prevProps ->', prevProps.editorState);
  console.log('new props ->', typeof this.props.editorState, '\n', this.props.editorState);
  let normalizedEditorState = (typeof this.props.editorState === "object" && this.props.editorState !== null)
    ? JSON.stringify(this.props.editorState)
    : this.props.editorState;
  console.log('Updated Editor State', typeof normalizedEditorState, '\n', normalizedEditorState); 
  let editorStatetoBeRendered = EditorState.createWithContent(convertFromRaw(JSON.parse(normalizedEditorState)))
  editorStatetoBeRendered = EditorState.moveFocusToEnd(this.state.editorState);
  // console.log('prevProps ->', typeof prevProps.editorState, prevProps.editorState, '\n', 'does not equal:', typeof this.props.editorState, this.props.editorState);
  this.setState({
    editorState: editorStatetoBeRendered
  });
  // -----------------------------------------------------------------------
  // if (this.props.editorState !== prevProps.editorState) {
  //   let normalizedEditorState = (typeof this.props.editorState === "object" && this.props.editorState !== null)
  //     ? JSON.stringify(this.props.editorState)
  //     : this.props.editorState;
  //   console.log('Updated Editor State', typeof normalizedEditorState, '\n', normalizedEditorState); 
  //   let editorStatetoBeRendered = EditorState.createWithContent(convertFromRaw(JSON.parse(normalizedEditorState)))
  //   editorStatetoBeRendered = EditorState.moveFocusToEnd(this.state.editorState);
  //   // console.log('prevProps ->', typeof prevProps.editorState, prevProps.editorState, '\n', 'does not equal:', typeof this.props.editorState, this.props.editorState);
  //   this.setState({
  //     editorState: editorStatetoBeRendered
  //   });
  // }
};
*/

/*
console.log('prevProps: ', prevProps.editorState.text);
    console.log('------------------------------------')
    console.log('this.props: ', this.props.editorState.text);
    if (this.props.editorState !== prevProps.editor) {
      Util.DATA.clearLocalStorageContent();
      console.log((this.props.editorState !== prevProps.editor));
      let normalizedEditorState = (typeof this.props.editorState === "object" && this.props.editorState !== null)
        ? JSON.stringify(this.props.editorState)
        : this.props.editorState;
      // create the editorState with the normalizedEditorState
      let editorStatetoBeRendered = EditorState.createWithContent(convertFromRaw(JSON.parse(normalizedEditorState)));
      
      // set cursor focus to the end
      editorStatetoBeRendered = EditorState.moveFocusToEnd(this.state.editorState);
      console.log(JSON.stringify(editorStatetoBeRendered));
      // update state with new editorState to be rendered
      // this.setState({
      //   editorState: editorStatetoBeRendered
      // })
    }
*/