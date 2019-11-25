import React, {useState, useEffect} from 'react';


function DriverResults(props){

    const [name, setName]  = useState();
    const [driverId, setDriverId] = useState();
    const [season, setSeason] = useState();
    var info = [];
    const [results, setResults] = useState([]);


    useEffect(() => {
        setSeason(props.year);
        setDriverId(props.driverId);
        fetchResults();
        // console.log('props: ' + props.year + ' ' + props.driverId)
    }, [props.year]);

    const fetchResults = async () => {
        console.log('stuff: ' + season + ' ' + driverId)
        //const data = await fetch('http://ergast.com/api/f1/'+match.match.params.year+'/drivers/'+match.match.params.driverId+'/results.json');
        console.log('props: ' + props.year + '  ' + props.driverId)
        const data = await fetch('http://ergast.com/api/f1/' + props.year + '/drivers/' + props.driverId + '/results.json');
        const results = await data.json();
        console.log(results);

        const temp = results.MRData.RaceTable.Races;
        temp.forEach(race => {
            var full = race.Results[0].Driver.givenName;
            full = full + ' ' + race.Results[0].Driver.familyName;
            setName(full);
            setDriverId(race.Results[0].driverId);
            setSeason(race.season)


            var start = race.Results[0].grid;
            if (start == 0) {
                start = 'Pit Lane'
                // start = '';
            }
            const finish = race.Results[0].position;
            const raceName = race.raceName;
            const raceNum = race.round;

            info.push({ start, finish, raceName, raceNum })

        });
        setResults(info);


    }


    return (
        <div>
            <h3>{season} Results</h3>
            <table class='center'>
                <tbody>
                    <tr>
                        <th></th>
                        <th>Race Name</th>
                        <th>Start</th>
                        <th>Finish</th>
                    </tr>
                    {results.map(data => (
                        <tr key={data.driverId}>
                            <td key={data.driverId}>
                                {data.raceNum}
                            </td>
                            <td>
                                {data.raceName}
                            </td>
                            <td>
                                {data.start}
                            </td>
                            <td>
                                {data.finish}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}


export default DriverResults;