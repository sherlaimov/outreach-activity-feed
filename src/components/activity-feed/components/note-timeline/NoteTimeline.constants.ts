import {
  FaUser,
  FaComment,
  FaPhoneAlt,
  FaCoffee,
  FaBeer,
} from 'react-icons/fa';
import { NoteType } from '../../../../models';

export const NoteTypeIconMap = {
  [NoteType.MESSAGE]: FaComment,
  [NoteType.PHONE]: FaPhoneAlt,
  [NoteType.COFFEE]: FaCoffee,
  [NoteType.BEER]: FaBeer,
  [NoteType.MEETING]: FaUser,
};
