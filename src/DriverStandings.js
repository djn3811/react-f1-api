import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';




function DriversStandings(match) {

    
    const [list, setList] = useState([]);
    const [season, setSeason] = useState([]);

    
    useEffect(() => {
        fetchResults();
    }, []);

    var pages = [];
    const fetchResults = async () => {

        const data = await fetch('https://ergast.com/api/f1/'+match.match.params.year+'/driverStandings.json');

         
        const results = await data.json();
        // console.log(results);
        setSeason(results.MRData.StandingsTable.season)
        var temp = results.MRData.StandingsTable.StandingsLists[0].DriverStandings;
        var finish  = [];
        var num = 0;
        var leader = 0;
        var pointsBehind = 0;
        temp.forEach(driver => {
            if (num < temp.length) {
                const driverId = driver.Driver.driverId;
                const first = driver.Driver.givenName;
                const last = driver.Driver.familyName;
                var constructor = driver.Constructors[0].name;
                const position = driver.position
                
                if(driver.Constructors.length > 1){
                    const num2 = driver.Constructors.length - 1;
                    constructor = driver.Constructors[num2].name;
                }
                const nationality = driver.Driver.nationality;
                const points = driver.points;
                if(num == 0){
                    leader = points;
                    pointsBehind = 0;
                }
                else{
                    pointsBehind = (points - leader);
                }
                var info = {position, first, last, constructor, nationality, points, pointsBehind};
                finish.push(info)
                num++;
            }
            
        });
        setList(finish)
        // console.log('Results set...')


    }; 
    const setPage = (pageNum) =>{
        console.log(pageNum);
    }
    var constructorsUrl = 'constructorstandings'

    
    return (
        <div>
            <h1>{season} Driver Standings</h1>
            <br/>
            <Button component={Link} to={constructorsUrl}>
            Switch to Constructor's
            </Button>
            <br/>
            <table class='center'>
                <tbody>
                    <tr>
                        <th></th>
                        <th>Driver</th>
                        <th>Nationality</th>
                        <th>Constructor</th>
                        <th>Points</th>
                        <th>Behind</th>
                    </tr>
                    {list.map(name => (
                        <tr>
                            <td>
                                {name.position}
                            </td>
                            <td>
                                {name.first} {name.last}
                            </td>
                            <td>
                                {name.nationality}
                            </td>
                            <td>
                                {name.constructor}
                            </td>
                            <td>
                                {name.points}
                            </td>
                            <td>
                                {name.pointsBehind}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )

}

export default DriversStandings;