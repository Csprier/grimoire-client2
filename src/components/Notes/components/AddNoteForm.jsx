import React, { Component } from 'react';

/** Util */
import Util from '../../../utility/util';

/** Components */
import AddNoteTextEditor from './Editor/AddNoteEditor';

/** Styles */
import {
  AddNoteInput,
  AddNoteLabel,
  AddNoteComponentContainer,
  AddNoteForm,
  AddNoteSubmitButton,
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

  _submitNote = () => {
    console.log('Submitting note!');
    const user_id = Util.DATA.getUserIdFromLocalStorage();
    let payload = {
      userId: user_id,
      title: this.state.title,
      content: JSON.stringify(this.state.content)
    };
    console.log('Payload: ', payload);
    return Util.API.notePOST(payload)
      .then(() => this.props.toggleAnimation())
      .then(() => this.props.reRenderFunction())
      .catch(err => console.error(err));
  };

  render() {
    return(
      <AddNoteComponentContainer>
        <AddNoteForm onSubmit={(e) => {
          e.preventDefault();
          this._submitNote();
        }}>
          <AddNoteLabel>Title
            <AddNoteInput 
              type="text"
              name="title"
              onChange={this._handleChange}
              value={this.state.title || ''}
              placeholder="Title..."
            />
          </AddNoteLabel>
          
          <AddNoteLabel>Content
            <AddNoteTextEditor
              editorState={this.state.content}
              handleContentChange={this._handleContentChange}
            />
          </AddNoteLabel>
          
          <AddNoteSubmitButton>Submit</AddNoteSubmitButton>
        </AddNoteForm>
      </AddNoteComponentContainer>
    );
  };
};

export default AddNoteFormComponent;