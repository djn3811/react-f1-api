import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';




function ConstructorsStandings(match) {

    
    const [list, setList] = useState([]);
    const [season, setSeason] = useState([]);

    
    useEffect(() => {
        fetchResults();
    }, []);

    var pages = [];
    const fetchResults = async () => {

        const data = await fetch('https://ergast.com/api/f1/'+match.match.params.year+'/constructorStandings.json');

         
        const results = await data.json();
        // console.log(results);

        var temp = results.MRData.StandingsTable.StandingsLists[0].ConstructorStandings;
        setSeason(results.MRData.StandingsTable.season);
        var num = 0;
        var finish = [];
        var leader = 0;
        var pointsBehind = 0;
        temp.forEach(constructor => {
            if (num < temp.length) {
                const constructorId = constructor.Constructor.constructorId;
                const constructorName = constructor.Constructor.name;
                const nationality = constructor.Constructor.nationality;
                const points = constructor.points;
                const position = constructor.position;
                if(num == 0){
                    leader = points;
                    pointsBehind = 0;
                }
                else{
                    pointsBehind = (points - leader);
                }
                var info = {constructorId, constructorName, nationality, points, position, pointsBehind};
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
    var DriversUrl = 'driverstandings'

    
    return (
        <div>
            <h1>{season} Constructor Standings</h1>
            <br/>
            <Button component={Link} to={DriversUrl}>
            Switch to Driver's
            </Button>
            <br/>
            <table class='center'>
                <tbody>
                    <tr>
                        <th>Position</th>
                        <th>Constructor</th>
                        <th>Nationality</th>
                        <th>Points</th>
                        <th>Behind</th>
                    </tr>
                    {list.map(name => (
                        <tr>
                            <td>
                                {name.position}
                            </td>
                            <td>
                                {name.constructorName}
                            </td>
                            <td>
                                {name.nationality}
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

export default ConstructorsStandings;