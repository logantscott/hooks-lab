import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Avatar from '../../containers/avatar/Avatar';
import CharacterDetailsContainer from '../../containers/characterDetails/CharacterDetailsContainer';

export default function App() {
  return (
    <Router>
      <h1>Avatar</h1>
      <Switch>
        <Route exact path="/characters/:_id" component={CharacterDetailsContainer}></Route>
        <Route path="/characters" component={Avatar}></Route>
      </Switch>
    </Router>
  );
}
