import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Header from '../header/Header';
import Home from '../home/Home';
import Avatar from '../../containers/avatar/Avatar';
import CharacterDetailsContainer from '../../containers/characterDetails/CharacterDetailsContainer';

export default function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/characters/:_id" component={CharacterDetailsContainer}></Route>
        <Route path="/characters" component={Avatar}></Route>
      </Switch>
    </Router>
  );
}
