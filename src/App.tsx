import ReactionGame from './Pages/ReactionGame';
import ReactionSetting from './Pages/ReactionSetting';
import MemoryGame from './Pages/MemoryGame';
import GamesMenu from './Pages/GamesMenu';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

export default function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div>
        <Switch>
          <Route path="/reactionGame">
            <ReactionGame />
          </Route>
          <Route path="/reactionSetting">
            <ReactionSetting />
          </Route>
          <Route path="/memoryGame">
            <MemoryGame />
          </Route>
          <Route path="/">
            <GamesMenu />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
