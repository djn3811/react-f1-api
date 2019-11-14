import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';



function ChooseRace(match) {


    
    useEffect(() => {
        setYearValue();
        setRaceNumValue();
        setSessionType();
    }, []);


   

    
    const years = [2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019];
    const raceNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21];
    const sessionType = ['Race', 'Qualifying'];
    var [year, setYear] = useState(2000);
    var [raceNum, setRaceNum] = useState(1);
    var [session, setSession] = useState('Race');

    var [url, setUrl] = useState('/choose');

    var setYearValue = () => {
        setYear((document.getElementById('y')||{}).value);
        updateUrl();
        // setState({year: (document.getElementById('y')||{}).value}, () =>{
        //     updateUrl();
        // })
    };
    var setRaceNumValue = () => {
        setRaceNum((document.getElementById('n')||{}).value);
        updateUrl();
    }; 
    var setSessionType = () => {
        setSession((document.getElementById('t')||{}).value);
        updateUrl();
    }; 
    const updateUrl = () =>
    {
        var nextUrl ='';
        if(session == 'Qualifying'){
            nextUrl = 'qualifyingresults/' + year + '/' + raceNum;
            if (url !== nextUrl) {
                setUrl('qualifyingresults/' + year + '/' + raceNum );
            }
        }
        if (session == 'Race') {
            nextUrl = 'raceresults/' + year + '/' + raceNum;
            if (url !== nextUrl) {
                setUrl('raceresults/' + year + '/' + raceNum);
            }
        }
        // printUrl();
        
    }



    var printUrl = () =>{
        console.log('Year: ' + year);
        console.log('Race: ' + raceNum)
        console.log('Type: ' + session)
        console.log('Url:' + url);
    }


    const navStyle = {
        color:'red'
    }

  return (
      <form>
          Year:
          <select id='y' onChange={(y) => setYearValue(y.value)}>
              {years.map(y => <option value={y} key={y} > {y} </option>)}
          </select>
          <br />
          Race Number:
          <select id='n' onChange={(n) => setRaceNumValue(n.target.value)}>             
              {raceNumber.map(n => <option value={n} key={n} > {n} </option>) }
          </select>
          <br />
          Type:
          <select id='t' onChange={(t) => setSessionType(t.target.value)}>
              {sessionType.map(t => <option value={t} key={t} > {t} </option>)}
          </select>
          <br />
          <Button component={Link} to={url} onClick={updateUrl()}>
            Submit
          </Button>
      </form>
 
    );



}

export default ChooseRace;