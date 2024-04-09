import './App.css';
import { ActivityFeed } from './components';
import { DataProvider } from './contexts';
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';

TimeAgo.addDefaultLocale(en);

function App() {
  return (
    <DataProvider>
      <ActivityFeed />
    </DataProvider>
  );
}

export default App;
