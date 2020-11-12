import React, { Component } from 'react';

/** Util */
import Util from '../../../../utility/util';

/** Components */
import CustomEditor from '../../../Editor/CustomEditor';

/** Styles */
import './add-component.css';

class AddComponent extends Component {
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
    const { setAdd } = this.props;
    const user_id = Util.DATA.getUserIdFromLocalStorage();
    let payload = {
      userId: user_id,
      title: this.state.title,
      content: JSON.stringify(this.state.content)
    };
    // console.log('Payload: ', payload);
    return Util.API.notePOST(payload)
      .then(res => console.log(res))
      .then(() => setAdd(false))
      .then(() => this.props.reRenderFunction())
      // .then(() => this.props.closeNoteEditor())
      .catch(err => console.error(err));
  };

  render() {
    const { ADD } = this.props;
    return(
      <div className={`add-container ${(ADD ? 'open' : '')}`}>
        <button onClick={() => this.props.setAdd(false)}>X</button>
        <form className="add-form" onSubmit={this._submitNote}>
          <label className="add-label">Title</label>
          <input
            className="add-input"
            type="text"
            name="title"
            onChange={this._handleChange}
            defaultValue={this.state.title}
            placeholder="Title..."
          />

          <label className="add-label">Content</label>
          <CustomEditor 
            // editorState={this.state.content}
            handleContentChange={this._handleContentChange}
          />

          <button className="add-submit-button">Submit</button>
        </form>
      </div>
    );
  };
};

export default AddComponent;