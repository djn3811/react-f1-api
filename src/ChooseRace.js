import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';



function ChooseRace(match) {


    
    useEffect(() => {
        setYearValue();
        setRaceNumValue();
        
    }, []);


   

    
    const years = [2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019];
    const raceNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21];
    var [year, setYear] = useState(2000);
    var [raceNum, setRaceNum] = useState(1);

    var [url, setUrl] = useState('/choose');

    var setYearValue = (val) => {
        setYear((document.getElementById('y')||{}).value);
        updateUrl();
    };
    var setRaceNumValue = () => {
        setRaceNum((document.getElementById('n')||{}).value);
        updateUrl();
    }; 
    var updateUrl = () =>
    {
        setUrl('raceresults/'+year+'/'+raceNum);
    }


    var printUrl = () =>{
        // console.log('Url:' + url);
        // console.log('Year: ' + year);
        // console.log('Race: ' + raceNum)
    }


    const navStyle = {
        color:'red'
    }

  return (
      <form>
          Year:
          <select id='y' onChange={(y) => setYearValue(y.value)}>
              {/* {years.map(y => <option value={y} key={y} onChange={setYearValue()}> {y} </option>)} */}
              {years.map(y => <option value={y} key={y} > {y} </option>)}

          </select>
          <br />
          Race Number:
          <select id='n' onChange={(n) => setRaceNumValue(n.target.value)}>
              {/* {raceNumber.map(n => <option value={n} key={n} onChange={setRaceNumValue()}> {n} </option>)} */}
              {raceNumber.map(n => <option value={n} key={n} > {n} </option>) }
          </select>
          <br />
          {/* <button type='button' onClick='selectRace(year.value, num.value)'>Submit</button> */}
          <Button component={Link} to={url} onClick={printUrl()}>
            Submit
          </Button>
          {/* <Link style={navStyle} to={url} ></Link> */}
      </form>

    );



}

export default ChooseRace;