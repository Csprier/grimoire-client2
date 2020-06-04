import React from 'react';

/** Util */
// import Util from '../../utility/util';

/** Styles */
import { 
  DesktopViewContainer
} from './DesktopView.styled';

/** Components */
import DesktopViewNoteList from './components/DVNoteList';

const DesktopViewComponent = (props) => {
  return(
    <DesktopViewContainer>
      <DesktopViewNoteList 
        notes={props.notes}
      />
    </DesktopViewContainer>
  );
};

export default DesktopViewComponent;