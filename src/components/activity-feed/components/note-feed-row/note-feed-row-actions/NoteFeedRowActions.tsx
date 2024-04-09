import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { FC, useCallback } from 'react';
import { FaAngleDown } from 'react-icons/fa';
import {
  ActionButton,
  DropdownContent,
  MenuTriggerButton,
} from './NoteFeedRowActions.styles';
import { useData } from '../../../../../contexts';

interface NoteFeedRowActionsProps {
  noteId: string;
}

export const NoteFeedRowActions: FC<NoteFeedRowActionsProps> = ({ noteId }) => {
  const { removeNoteById } = useData();

  const handleDeleteNode = useCallback(() => {
    removeNoteById(noteId);
  }, [noteId, removeNoteById]);

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <MenuTriggerButton data-testid="noterow-menu-trigger">
          <FaAngleDown />
        </MenuTriggerButton>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownContent sideOffset={5}>
          <DropdownMenu.Item>
            <ActionButton onClick={handleDeleteNode}>Delete</ActionButton>
          </DropdownMenu.Item>
        </DropdownContent>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};
