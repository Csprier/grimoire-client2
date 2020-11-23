import React from 'react';

/** Styles */
import {
  ToolbarButton,
  ToolbarContainer
} from './Toolbar.styled';

/** ACTUAL COMPONENT */
const Toolbar = () => {
  return(
    <ToolbarContainer>
      {// may be use React.Fragment instead of div to improve perfomance after React 16
        (externalProps) => (
          <React.Fragment>
            <BoldButton {...externalProps} />
            <ItalicButton {...externalProps} />
            <UnderlineButton {...externalProps} />
            <CodeButton {...externalProps} />
            <BlockquoteButton {...externalProps} />
            <CodeBlockButton {...externalProps} />
          </React.Fragment>
        )
      }
    </ToolbarContainer>
  );
};

export default Toolbar;

