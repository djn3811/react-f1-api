import React, {useState, useEffect} from 'react';



function Drivers(match) {

    
    const [time, setTime] = useState([]);
    const [finishingOrder, setFinishingOrder] = useState([]);
    const [raceName, setRaceName] = useState([]);
    const [season, setSeason] = useState([]);
    const [trackName, setTrackName] = useState([]);
    const [country, setCountry] = useState([]);
    const [city, setCity] = useState([]);


    
    useEffect(() => {
        fetchResults();
    }, []);


    const fetchResults = async () => {
        const data = await fetch('http://ergast.com/api/f1/drivers.json');

  
         
        const results = await data.json();


        setCity(results.MRData.RaceTable.Races[0].Circuit.Location.locality)
        setCountry(results.MRData.RaceTable.Races[0].Circuit.Location.country)
        setTrackName(results.MRData.RaceTable.Races[0].Circuit.circuitName);
        setSeason(results.MRData.RaceTable.season);
        setRaceName(results.MRData.RaceTable.Races[0].raceName);
        // console.log('raceName: ' + raceName)
        var finish = [];
        // var position = 1;
        var temp = results.MRData.RaceTable.Races[0].Results;
        // console.log('temp: ' + JSON.stringify(temp));
        var num = 0;
        temp.forEach(driver => {
            if (num < temp.length) {
                const first = driver.Driver.givenName;
                const last = driver.Driver.familyName;
                var position = num+1;
                // console.log('time: ' + JSON.stringify(driver.Time.time));
                var timeBehind = '';
                if(driver.Time){
                    timeBehind = driver.Time.time;
                }
                else{
                    timeBehind = driver.status;
                }
                var info = {position, first, last, timeBehind};
                finish.push(info)
                num++;
            }
            
        });
        setFinishingOrder(finish)
        // console.log('Results set...')
        console.log(results)

    }; 
    

    
    return (
        <div>
            <h1>{season} {raceName} Results</h1>
            <h3>{trackName} </h3>
            <h3>{city}, {country}</h3>

            <table>
                <tbody>
                    <tr>
                        <th>Position</th>
                        <th>Driver</th>
                        <th>Time</th>
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
                                <ul>
                                    <li key={name.position}>{name.timeBehind}</li>
                                </ul>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>



        </div>
    )

}

export default Drivers;