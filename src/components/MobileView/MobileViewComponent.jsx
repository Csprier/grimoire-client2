import React, { useState } from 'react';

/** Styles */
import {
  MobileViewContainer,
  MobileViewButtonContainer,
  MobileViewComponentContainer
} from './MobileView.styled';

const MobileViewComponent = (props) => {
  

  return(
    <MobileViewContainer>

      <MobileViewButtonContainer>
        {/** Add Note Button goes in here */}
      </MobileViewButtonContainer>

      <MobileViewComponentContainer>
        {/** Note List component goes in here */}
      </MobileViewComponentContainer>

    </MobileViewContainer>
  );
};

export default MobileViewComponent;