import { useCallback, useState } from 'react';
import { FaListUl } from 'react-icons/fa';
import {
  ActionBarWrapper,
  SubmitButton,
  NoteFormWrapper,
  NoteCreationFormWrapper,
  FauxTimelineSection,
  IconWrapper,
} from './NoteCreationForm.styles';
import { NoteTypeRadioGroup } from './components/note-type-radio-group';
import TextArea from './components/text-area';
import { NoteType } from '../../../../models';
import { useData } from '../../../../contexts';
import { colors } from '../../../../constants';

export const NoteCreationForm = () => {
  const [message, setMessage] = useState('');
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [noteType, setNoteType] = useState(NoteType.MESSAGE);

  const { addNote } = useData();

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setNoteType(e.target.value as NoteType);
  }, []);

  const handleNoteChange = useCallback(
    (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      const textValue = (event.target as HTMLTextAreaElement).value;

      setMessage(textValue);
    },
    []
  );

  const submitNote = () => {
    addNote({ noteType, message });
    setMessage('');
    setIsInputFocused(false);
  };

  return (
    <NoteCreationFormWrapper>
      <FauxTimelineSection>
        <IconWrapper>
          <FaListUl color={colors.grey.main} />
        </IconWrapper>
      </FauxTimelineSection>
      <NoteFormWrapper>
        <TextArea
          placeholder="Add a note..."
          role="note-input"
          onChange={handleNoteChange}
          onFocus={() => setIsInputFocused(true)}
          isFocused={isInputFocused}
          value={message}
        />
        {isInputFocused && (
          <ActionBarWrapper>
            <NoteTypeRadioGroup onChange={handleChange} noteType={noteType} />
            <SubmitButton
              type="submit"
              onClick={submitNote}
              disabled={!message}
            >
              Submit
            </SubmitButton>
          </ActionBarWrapper>
        )}
      </NoteFormWrapper>
    </NoteCreationFormWrapper>
  );
};
