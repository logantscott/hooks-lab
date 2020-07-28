import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { CharacterDetails } from '../CharacterDetails/CharacterDetails';

export default function App() {
  return (
    <Router>
      <h1>Avatar</h1>
      <Switch>
        <Route path="/characters/:id" component={CharacterDetails}></Route>
        <Route></Route>
      </Switch>
    </Router>
  );
}
