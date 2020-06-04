import React, { useEffect, useState } from 'react';

/** Util */
import Util from '../../utility/util';

/** Styles */
import { 
  DesktopViewContainer
} from './DesktopView.styled';

/** Components */
import DesktopViewNoteList from './components/DVNoteList';

const DesktopViewComponent = (props) => {
  return(
    <DesktopViewContainer>
      <DesktopViewNoteList />
    </DesktopViewContainer>
  );
};

export default DesktopViewComponent;