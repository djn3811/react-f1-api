import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';



function ChooseStandings(match) {


    
    useEffect(() => {
        setYearValue();
        setStandingsType();
    }, []);


   

    
    const years = [2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019];
    const types = ['Drivers', 'Constructors'];
    var [year, setYear] = useState(2000);
    var [type, setType] = useState('Drivers');

    var [url, setUrl] = useState('/choosestandings');

    var setYearValue = () => {
        setYear((document.getElementById('y')||{}).value);
        updateUrl();
    };
    var setStandingsType = () => {
        setType((document.getElementById('t')||{}).value);
        updateUrl();
    }; 
    const updateUrl = () =>
    {
        var nextUrl ='';
        if(type == 'Drivers'){
            // nextUrl = 'qualifyingresults/' + year + '/' + raceNum;
            nextUrl = '/' + year + '/driverstandings';
            if (url !== nextUrl) {
                // setUrl('qualifyingresults/' + year + '/' + raceNum );
                setUrl('/' + year +  '/driverstandings' );

            }
        }
        if (type == 'Constructors') {
            // nextUrl = 'raceresults/' + year + '/' + raceNum;
            nextUrl = '/' + year + '/constructorstandings';
            if (url !== nextUrl) {
                // setUrl('raceresults/' + year + '/' + raceNum);
                setUrl('/' + year + '/constructorstandings');

            }
        }
        // printUrl();
        
    }



    var printUrl = () =>{
        console.log('Year: ' + year);
        console.log('Type: ' + type)
        console.log('Url:' + url);
    }



  return (
      <form>
          Year:
          <select id='y' onChange={(y) => setYearValue(y.value)}>
              {years.map(y => <option value={y} key={y} > {y} </option>)}
          </select>
          <br />
          Type:
          <select id='t' onChange={(t) => setStandingsType(t.target.value)}>
              {types.map(t => <option value={t} key={t} > {t} </option>)}
          </select>
          <br />
          <Button component={Link} to={url} onClick={updateUrl()}>
            Submit
          </Button>
      </form>
 
    );



}

export default ChooseStandings;