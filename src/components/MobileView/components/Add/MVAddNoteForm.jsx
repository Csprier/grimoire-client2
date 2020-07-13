import React, { Component } from 'react';
import {
  EditorState
} from 'draft-js';

/** Util */
import Util from '../../../../utility/util';

/** Components */
import MVAddNoteTextEditor from '../Editor/MVAddNoteTextEditor';

/** Styles */
import {
  MVAddNoteInput,
  MVAddNoteLabel,
  MVAddNoteComponentContainer,
  MVAddNoteForm,
  MVAddNoteSubmitButton,
} from './MVAddNoteForm.styled';

class MVAddNoteFormComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      content: EditorState.createEmpty()
    };
    this._handleChange = this._handleChange.bind(this);
    this._handleContentChange = this._handleContentChange.bind(this);
    this._submitNote = this._submitNote.bind(this);
  };

  _handleChange = (e) => {
    e.persist();
    this.setState({
      ...this.state,
      title: e.target.value
    });
  };

  _handleContentChange = (editorState) => this.setState({ content: editorState });

  _submitNote = (e) => {
    e.preventDefault();
    const user_id = Util.DATA.getUserIdFromLocalStorage();
    let payload = {
      userId: user_id,
      title: this.state.title,
      content: JSON.stringify(this.state.content)
    };
    console.log('Payload: ', payload);
    return Util.API.notePOST(payload)
      .then(res => console.log(res))
      .then(() => this.props.reRender())
      .then(() => this.props.setShowModal())
      .then(() => {
        this.setState({ 
          title: '', 
          content: {}
        })
      })
      .then(() => Util.DATA.clearLocalStorageContent())
      .then(() => this.props.setInit(true))
      .catch(err => console.error(err));
  };

  render() {
    return(
      <MVAddNoteComponentContainer>
        <MVAddNoteForm onSubmit={this._submitNote}>
          <MVAddNoteLabel>Title
            <MVAddNoteInput 
              type="text"
              name="title"
              onChange={this._handleChange}
              value={this.state.title}
              placeholder="Title..."
            />
          </MVAddNoteLabel>

          <MVAddNoteLabel>Content
            <MVAddNoteTextEditor 
              editorState={this.state.content}
              handleContentChange={this._handleContentChange}
            />
          </MVAddNoteLabel>
          <MVAddNoteSubmitButton>Save</MVAddNoteSubmitButton>
        </MVAddNoteForm>
      </MVAddNoteComponentContainer>
    );
  };
};

export default MVAddNoteFormComponent;