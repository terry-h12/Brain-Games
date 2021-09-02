// import React from 'react';
// import logo from './logo.svg';
// import MainScreen from './Pages/MainScreen';
import ReactionGame from './Pages/ReactionGame';
import ReactionSetting from './Pages/ReactionSetting';
import MemoryGame from './Pages/MemoryGame';
import GamesMenu from './Pages/GamesMenu';
// import './App.css';
// import { MuiThemeProvider, createTheme } from '@material-ui/core/styles';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from 'react-router-dom';

// export const light = {
//   palette: {
//     type: "light"
//   }
// };
// export const dark = {
//   palette: {
//     type: "dark"
//   }
// };

// const theme = createTheme({
//   palette: {
//     primary: {
//       main: '#B19BB6'
//     },
//     secondary: {
//       main: '#E8D2CB'
//     }
//   }
// });

export default function App() {
  return (
    <Router>
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

