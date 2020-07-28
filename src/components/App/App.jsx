import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Avatar from '../../containers/Avatar';

export default function App() {
  return (
    <Router>
      <h1>Avatar</h1>
      <Switch>
        <Route path="/characters" component={Avatar}></Route>
        <Route></Route>
      </Switch>
    </Router>
  );
}
