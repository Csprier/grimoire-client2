import React, { Component } from 'react';

/** Util */
import Util from '../../../utility/util';

/** Components */
import AddNoteTextEditor from './Editor/AddNoteEditor';

/** Styles */
import {
  Input,
  Label,
  NoteComponentContainer,
  NoteForm,
  SubmitButton,
} from './AddNoteForm.styled';

class AddNoteFormComponent extends Component {
  constructor(props){
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
      content: this.state.content
    };
    console.log('Payload: ', payload);
    return Util.API.notePOST(payload)
      .then(res => console.log(res))
      .then(() => this.props.reRender())
      .catch(err => console.error(err));
  }

  render() {
    return(
      <NoteComponentContainer>
        <NoteForm onSubmit={this.submitNote}>
          <Label>Title
            <Input 
              type="text"
              name="title"
              onChange={this._handleChange}
              value={this.state.title || ''}
              placeholder="Title..."
            />
          </Label>
          
          <Label>Content
            <AddNoteTextEditor
              editorState={this.state.content}
              handleContentChange={this._handleContentChange}
            />
          </Label>
          <SubmitButton onSubmit={this._submitNote}>Submit</SubmitButton>
        </NoteForm>
      </NoteComponentContainer>
    );
  }
};

export default AddNoteFormComponent;