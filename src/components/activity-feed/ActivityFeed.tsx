import {
  ActivityFeedWrapper,
  NoteFeedWrapper,
  RowWrapper,
} from './ActivityFeed.styles';
import { NoteCreationForm, NoteFeedRow } from './components';
import { useData } from '../../contexts';

export const ActivityFeed = () => {
  const { notes } = useData();

  return (
    <ActivityFeedWrapper>
      <NoteCreationForm />
      <RowWrapper>
        <NoteFeedWrapper>
          {notes.map((note) => (
            <NoteFeedRow key={note.id} {...note} />
          ))}
        </NoteFeedWrapper>
      </RowWrapper>
    </ActivityFeedWrapper>
  );
};
