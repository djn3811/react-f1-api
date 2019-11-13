import React, {useState, useEffect} from 'react';



function ChooseRace(match) {

    
    const [results, setResults] = useState([]);
    const [raceName, setRaceName] = useState([]);
    const [season, setSeason] = useState([]);
    const [trackName, setTrackName] = useState([]);
    const [country, setCountry] = useState([]);
    const [city, setCity] = useState([]);


    // var raceName = 'temp';

    
    useEffect(() => {
        fetchResults();
        // console.log('match: ' + JSON.stringify(match));
        // console.log('match2: ' + match.match.params.gpNum);
    }, []);


    const fetchResults = async () => {
        const data = await fetch('https://ergast.com/api/f1/'+match.match.params.year+'/'+match.match.params.gpNum+'/results.json');

  
         
        const results = await data.json();

        setCity(results.MRData.RaceTable.Races[0].Circuit.Location.locality)
        setCountry(results.MRData.RaceTable.Races[0].Circuit.Location.country)
        setTrackName(results.MRData.RaceTable.Races[0].Circuit.circuitName);
        setSeason(results.MRData.RaceTable.season);
        setRaceName(results.MRData.RaceTable.Races[0].raceName);
        console.log('raceName: ' + raceName)
        var finish = [];
        results.MRData.RaceTable.Races[0].Results.forEach(driver => {
            const first = driver.Driver.givenName
            const last = driver.Driver.familyName
            const fullName = {first, last}
            finish.push(fullName)
        });
        setResults(finish);
        console.log('Results set...')
        console.log(results)
        console.log(results.MRData.RaceTable.Races[0].raceName)
 
        setResults(results);

        return results;

    }; 
    

    
    return (
        <div>
            {/* <select>
                <option value='2008'>2008</option>
            </select>
            <select>
                <option value='5'>5</option>
            </select> */}
            <h1>{season} {raceName} Results</h1>
            <h3>{trackName} </h3>
            <h3>{city}, {country}</h3>
            {/* {results.map(name =>(
                {name}
            ))} */}

        </div>
    )


}

export default ChooseRace;