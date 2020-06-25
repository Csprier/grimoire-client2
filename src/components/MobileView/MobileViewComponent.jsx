import React from 'react';

/** Styles */
import {
  MobileViewContainer,
  MobileViewButtonContainer,
  MobileViewComponentContainer
} from './MobileView.styled';
import MobileViewNoteList from './components/MVNoteList';

const MobileViewComponent = (props) => {
  

  return(
    <MobileViewContainer>

      <MobileViewButtonContainer>
        {/** Add Note Button goes in here */}
      </MobileViewButtonContainer>

      <MobileViewComponentContainer>
        <MobileViewNoteList 
          notes={props.notes}
          reRenderFunction={props.reRenderFunction}
        />
      </MobileViewComponentContainer>

    </MobileViewContainer>
  );
};

export default MobileViewComponent;