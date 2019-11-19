import React, {useState, useEffect} from 'react';



function DriversList(match) {

    
    const [list, setList] = useState([]);
    const [season, setSeason] = useState([]);

    
    useEffect(() => {
        fetchResults();
    }, []);

    var pages = [];
    const fetchResults = async () => {

        // const data = await fetch('http://ergast.com/api/f1/drivers?limit=30&offset='+page+'.json');
        // const data = await fetch('http://ergast.com/api/f1/drivers.json');
        const data = await fetch('http://ergast.com/api/f1/'+match.match.params.year+'/drivers.json');
        // const data = await fetch('http://ergast.com/api/f1/2010/drivers.json');


  
         
        const results = await data.json();
        console.log(results);

        var temp = results.MRData.DriverTable.Drivers;
        var finish  = [];
        var num = 0;
        temp.forEach(driver => {
            if (num < temp.length) {
                const first = driver.givenName;
                const last = driver.familyName;
                const dob = driver.dateOfBirth;
                const nationality = driver.nationality;
                // console.log('time: ' + JSON.stringify(driver.Time.time));
                var info = {first, last, dob, nationality};
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

    
    return (
        <div>
            <h1>{season} Driver Standings</h1>
            <table>
                <tbody>
                    <tr>
                        <th>Driver</th>
                        <th>Nationality</th>
                        <th>Date of Birth</th>
                    </tr>
                    {list.map(name => (
                        <tr>
                            <td>
                                {name.first} {name.last}
                            </td>
                            <td>
                                {name.nationality}
                            </td>
                            <td>
                                {name.dob}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )

}

export default DriversList;