import React, { Component } from 'react';
import {
  HeadlineOneButton,
  HeadlineTwoButton,
  HeadlineThreeButton
} from 'draft-js-buttons';

/** Styles */
import '../dv-note-text-editor.css';

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
          <div key={i} {...this.props} className="tb-button"></div>
        )}
      </div>
    );
  }
};

export default HeadlinesPicker;