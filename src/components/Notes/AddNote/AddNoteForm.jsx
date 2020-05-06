import React, { useState, useEffect } from 'react';

/** Util */
import Util from '../../../utility/util';

/** Styles */
import {
  AddNoteForm,
  AddNoteFormContainer,
  ContentTextArea,
  Label,
  TitleInput
} from './AddNoteForm.styled';

const AddNoteFormComponent = () => {
  return(
    <AddNoteFormContainer>

      <AddNoteForm>

        <Label>Title:
          <TitleInput 
            type="text"
            placeholder="Title..."
          />
        </Label>

        <Label>Content:
          <ContentTextArea 
            type="text"
            placeholder="Content..."
            rows="10" cols="40"
          />
        </Label>

      </AddNoteForm>

    </AddNoteFormContainer>
  );
};

export default AddNoteFormComponent;