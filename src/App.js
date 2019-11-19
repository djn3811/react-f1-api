import React from 'react';
import './App.css';
import Races from './Races'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Display from './Display';
import ChooseRace from './ChooseRace';
import Nav from './Nav';
import QualifyingResults from './QualifyingResults';
import DriversList from './DriversList';
import DriverStandings from './DriverStandings';
import ConstructorStandings from './ConstructorStandings';
import ChooseStandings from './ChooseStandings';


function App() {


 
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>{/*Finds the first route in the list with that url and renders only it. Keeps from rendering the home page on every other page */}
          <Route path='/' exact component={Home} />
          {/* <Route path='/raceresults/:year/:gpNum' exact component={Races} /> */}
          <Route path='/:year/:gpNum/race' exact component={Races} />
          <Route path='/display' component={Display} />
          <Route path='/choose' exact component={ChooseRace} />
          {/* <Route path='/qualifyingresults/:year/:gpNum' exact component={QualifyingResults} /> */}
          <Route path='/:year/:gpNum/qualifying' exact component={QualifyingResults} />
          <Route path='/yearlydrivers/:year' exact component={DriversList} />
          {/* <Route path='/driver/:name' exact component={Driver} /> */}
          <Route path='/:year/driverstandings' exact component={DriverStandings}/>
          <Route path='/:year/constructorstandings' exact component={ConstructorStandings}/>
          <Route path='/choosestandings' exact component={ChooseStandings} />

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
