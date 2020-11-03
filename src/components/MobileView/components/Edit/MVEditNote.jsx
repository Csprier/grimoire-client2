import React, { Component } from 'react';

/** Util */
import Util from '../../../../utility/util';

/** Components */
import CustomEditor from '../../../Editor/CustomEditor';

/** Styles */
import {
  MVEditNoteInput,
  MVEditNoteLabel,
  MVEditNoteComponentContainer,
  MVEditNoteForm,
  MVEditNoteSubmitButton,
} from './MVEditNoteForm.styled';

class MVEditNoteComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.note._id,
      title: this.props.note.title,
      content: this.props.note.content
    };
    this._handleChange = this._handleChange.bind(this);
    this._handleContentChange = this._handleContentChange.bind(this);
    this._submitNote = this._submitNote.bind(this);
  };

  componentDidUpdate(prevProps) {
    if (this.props !== prevProps) {
      this.setState({
        id: this.props.note._id,
        title: this.props.note.title,
        content: this.props.note.content
      })
    }
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
    const id = this.props.note._id;
    const user_id = Util.DATA.getUserIdFromLocalStorage();
    let payload = {
      userId: user_id,
      title: this.state.title,
      content: JSON.stringify(this.state.content)
    };
    console.log('Payload: ', payload);
    return Util.API.notePUT(id, payload)
      .then(res => console.log('notePUT res:', res))
      .then(() => this.props.reRender())
      .catch(err => console.error(err));
  };

  _deleteNote = () => {
    const id = this.state.id;
    console.log('Deleting note:', id);
    return Util.API.noteDELETE(id)
      .then(() => this.props.reRender())
      .catch(err => console.error(err));
  };

  render() {
    console.log('PROPS:', this.props.note, '\n', 
                'STATE:', this.state);
    return(
      <MVEditNoteComponentContainer>
        <MVEditNoteForm onSubmit={this._submitNote}>
          <MVEditNoteLabel>Title
            <MVEditNoteInput 
              type="text"
              name="title"
              onChange={this._handleChange}
              defaultValue={this.state.title}
              placeholder="Title..."
            />
          </MVEditNoteLabel>

          <MVEditNoteLabel>Content
            <CustomEditor
              editorState={this.state.content}
              handleContentChange={this._handleContentChange}
            />
          </MVEditNoteLabel>
          <MVEditNoteSubmitButton>Save</MVEditNoteSubmitButton>
        </MVEditNoteForm>
      </MVEditNoteComponentContainer>
    );
  };
};

export default MVEditNoteComponent;