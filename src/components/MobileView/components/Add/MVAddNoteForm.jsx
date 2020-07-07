import React, { Component } from 'react';

/** Util */
import Util from '../../../../utility/util';

/** Components */
import MVAddNoteTextEditor from '../Editor/MVAddNoteTextEditor';

/** Styles */
import {
  // MVAddNoteButtonContainer,
  MVAddNoteInput,
  MVAddNoteLabel,
  MVAddNoteComponentContainer,
  MVAddNoteForm,
  // MVAddNoteComponentHeader,
  // MVAddNoteTitle,
  MVAddNoteSubmitButton,
  // MVAddNoteToggleButton,
  // MVAddNoteDeleteButton
} from './MVAddNoteForm.styled';

class MVAddNoteFormComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      content: {}      
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
      .then(() => this.setState({ title: '', content: {} }))
      .catch(err => console.error(err));
  };

  render() {
    console.log('MVAddNote State:', this.state);
    return(
      <MVAddNoteComponentContainer>
        <MVAddNoteForm onSubmit={this._submitNote}>
          <MVAddNoteLabel>Title
            <MVAddNoteInput 
              type="text"
              name="title"
              onChange={this._handleChange}
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