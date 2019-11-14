import React, {useState, useEffect} from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';



function ChooseRace(match) {

    const [finishingOrder, setFinishingOrder] = useState([]);
    const [raceName, setRaceName] = useState([]);
    const [season, setSeason] = useState([]);
    const [trackName, setTrackName] = useState([]);
    const [country, setCountry] = useState([]);
    const [city, setCity] = useState([]);

    const [year, setYear] = useState([]);
    const [raceNum, setRaceNum] = useState([]);

    
    useEffect(() => {
        fetchResults();

    }, []);


    const fetchResults = async () => {
        const data = await fetch('https://ergast.com/api/f1/'+match.match.params.year+'/'+match.match.params.gpNum+'/qualifying.json');

        setYear(match.match.params.year);
        setRaceNum(match.match.params.gpNum);
  
         
        const results = await data.json();


        setCity(results.MRData.RaceTable.Races[0].Circuit.Location.locality)
        setCountry(results.MRData.RaceTable.Races[0].Circuit.Location.country)
        setTrackName(results.MRData.RaceTable.Races[0].Circuit.circuitName);
        setSeason(results.MRData.RaceTable.season);
        setRaceName(results.MRData.RaceTable.Races[0].raceName);
        // console.log('raceName: ' + raceName)
        var finish = [];
        // var position = 1;
        var temp = results.MRData.RaceTable.Races[0].QualifyingResults;
        // console.log('temp: ' + JSON.stringify(temp));
        var num = 0;
        temp.forEach(driver => {
            if (num < temp.length) {
                const first = driver.Driver.givenName;
                const last = driver.Driver.familyName;
                var position = num+1;
                // console.log('time: ' + JSON.stringify(driver.Time.time));
                var q1Time = driver.Q1;
                var q2Time = '';
                if(driver.Q2){
                    q2Time = driver.Q2;
                }
                var q3Time = '';
                if(driver.Q3){
                    q3Time = driver.Q3;
                }
                const constructor = driver.Constructor.name;
                const points = driver.points;
                var info = {position, first, last, constructor, q1Time, q2Time, q3Time};
                finish.push(info)
                num++;
            }
            
        });
        console.log('temp: ' + temp);
        setFinishingOrder(finish)
        // console.log('Results set...')
        console.log(results)

    };
    const raceUrl = 'raceresults/' + year + '/' + raceNum; 


    

    
    return (
        <div>
            <h1>{season} {raceName} Qualifying Results</h1>
            <h3>{trackName} </h3>
            <h3>{city}, {country}</h3>

            <br/>
            <Button component={Link} to={raceUrl}>
            {/* <Button onClick={changeToRace()}> */}
            Switch to Race
            </Button>
            <br/>

            <table class='center'>
                <tbody>
                    <tr>
                        <th>Position</th>
                        <th>Driver</th>
                        <th>Constructor</th>
                        <th>Q1</th>
                        <th>Q2</th>
                        <th>Q3</th>
                    </tr>
                    {finishingOrder.map(name => (
                        <tr>
                            <td>
                                {name.position}
                            </td>
                            <td>
                                <ul>
                                    <li key={name.position}>{name.first} {name.last}</li>
                                </ul>
                            </td>
                            <td>
                                {name.constructor}
                            </td>
                            <td>
                                {name.q1Time}
                            </td>
                            <td>
                                {name.q2Time}
                            </td>
                            <td>
                                {name.q3Time}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    )

}

export default ChooseRace;