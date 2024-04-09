import { FC } from 'react';
import {
  FaUser,
  FaComment,
  FaPhoneAlt,
  FaCoffee,
  FaBeer,
} from 'react-icons/fa';
import { RadioButton } from '../radio-button';
import { NoteType } from '../../../../../../models';
import { RadioGroupWrapper } from './NoteTypeRadioGroup.styles';

const RadioGroupName = 'NoteTypeRadioGroup';

interface NoteTypeRadioGroupProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  noteType: NoteType;
}

export const NoteTypeRadioGroup: FC<NoteTypeRadioGroupProps> = ({
  onChange,
  noteType,
}) => {
  return (
    <RadioGroupWrapper role="radiogroup">
      <RadioButton
        value={NoteType.MESSAGE}
        name={RadioGroupName}
        checked={noteType === NoteType.MESSAGE}
        onChange={onChange}
        icon={FaComment}
        role="radio"
      />
      <RadioButton
        value={NoteType.PHONE}
        name={RadioGroupName}
        checked={noteType === NoteType.PHONE}
        onChange={onChange}
        icon={FaPhoneAlt}
        role="radio"
      />
      <RadioButton
        value={NoteType.COFFEE}
        name={RadioGroupName}
        checked={noteType === NoteType.COFFEE}
        onChange={onChange}
        icon={FaCoffee}
        role="radio"
      />
      <RadioButton
        value={NoteType.BEER}
        name={RadioGroupName}
        checked={noteType === NoteType.BEER}
        onChange={onChange}
        icon={FaBeer}
        role="radio"
      />
      <RadioButton
        value={NoteType.MEETING}
        name={RadioGroupName}
        checked={noteType === NoteType.MEETING}
        onChange={onChange}
        icon={FaUser}
        role="radio"
      />
    </RadioGroupWrapper>
  );
};
