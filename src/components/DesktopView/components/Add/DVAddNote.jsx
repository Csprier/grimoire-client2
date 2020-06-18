import React, { Component } from 'react';

/** Util */
import Util from '../../../../utility/util';

/** Components */
import DVAddNoteTextEditor from '../Editor/DVAddNoteTextEditor';

/** Styles */
import {
  DVAddNoteContainer,
  DVAddNoteForm,
  DVAddNoteInput,
  DVAddNoteLabel,
  DVAddNoteSubmitButton
} from './DVAddNote.styled';

class DVAddNoteComponent extends Component {
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
      content: JSON.stringify(this.state.content)
    };
    console.log('Payload: ', payload);
    return Util.API.notePOST(payload)
      .then(res => console.log(res))
      .then(() => this.props.reRenderFunction())
      .catch(err => console.error(err));
  };

  render() {
    return(
      <DVAddNoteContainer>
        <DVAddNoteForm onSubmit={(e) => this._submitNote(e)}>
          <DVAddNoteLabel>Title
            <DVAddNoteInput 
              type="text"
              name="title"
              onChange={this._handleChange}
              value={this.state.title || ''}
              placeholder="Title..."
            />
          </DVAddNoteLabel>

          <DVAddNoteLabel>Content
            <DVAddNoteTextEditor 
              editorState={JSON.stringify(this.state.content)}
              handleContentChange={this._handleContentChange}
            />
          </DVAddNoteLabel>

          <DVAddNoteSubmitButton>Submit</DVAddNoteSubmitButton>
        </DVAddNoteForm>
      </DVAddNoteContainer>
    );
  };
};

export default DVAddNoteComponent;