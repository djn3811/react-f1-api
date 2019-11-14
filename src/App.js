import React,{useState, useEffect} from 'react';
import './App.css';
import Races from './Races'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Display from './Display';
import ChooseRace from './ChooseRace';
import Nav from './Nav';
import QualifyingResults from './QualifyingResults'

function App() {


 
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>{/*Finds the first route in the list with that url and renders only it. Keeps from rendering the home page on every other page */}
          <Route path='/' exact component={Home} />
          <Route path='/raceresults/:year/:gpNum' exact component={Races} />
          <Route path='/display' component={Display} />
          <Route path='/choose' exact component={ChooseRace} />
          <Route path='/qualifyingresults/:year/:gpNum' exact component={QualifyingResults} />
        </Switch>
      </div>
    </Router>
  );
}


const Home = () => (
  <div>
    <h1>Home Page</h1>
  </div>
);

export default App;
