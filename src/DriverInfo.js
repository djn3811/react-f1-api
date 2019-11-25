import React, { useEffect, useState } from "react";
import DriverResults, {fetchResults} from './DriverProfile';


function DriverInfo(match){

    const [name, setName] = useState();
    const [number, setNumber] = useState();
    const [dob, setDob] = useState();
    const [nationality, setNationality] = useState();
    const [abbrev, setAbbrev] = useState();
    const [driverId, setDriverId] = useState();
    const [season, setSeason] = useState();
    const [careerSeasons, setCareerSeasons] = useState([0]);
    var careerYears = [];
 
    useEffect(() => {
        fetchData();
        getSeasons();
        changeSeason();
    }, []);

    useEffect(() =>{
        changeSeason();
    }, [season])


    const fetchData = async () => {
        const data = await fetch('http://ergast.com/api/f1/drivers/'+match.match.params.driverId+'.json');
        const results = await data.json();
        // console.log(results);

        setDriverId(match.match.params.driverId);
        var temp = results.MRData.DriverTable.Drivers[0];
        const first = temp.givenName;
        const last = temp.familyName;
        const full = first + ' ' + last;
        setName(full);
        if(temp.code){
            var a = '(' + temp.code + ')'
            // setAbbrev(temp.code);
            setAbbrev(a);   
        }
        if(temp.permanentNumber){
            var n = '#' + temp.permanentNumber;
            setNumber(n);
            // setNumber(temp.permanentNumber);
        }
        setDob(temp.dateOfBirth);
        setNationality(temp.nationality);
        
    }

    const changeSeason = async () => {
        setSeason((document.getElementById('y')||{}).value);
        // console.log('change seasons: ' + season);
        // console.log('driverId: ' + driverId);
        // DriverResults.fetchResults();
    }

    const getSeasons = async () => {
        const data = await fetch('http://ergast.com/api/f1/drivers/'+match.match.params.driverId+'/seasons.json');
        const temp = await data.json();
        var years = temp.MRData.SeasonTable.Seasons;
        years.forEach(year => {
            careerYears.push(year.season);
        })
        setCareerSeasons(careerYears);
        setSeason(years[0].season);
    }



    return (
        <div>
            <h1>{name}</h1>
            <h3>{abbrev} {number}</h3>
            <h5>{nationality}</h5>
            <h5>Date of Birth:{dob}</h5>
            Season:  
            <select id='y' onChange={(y) => changeSeason(y.target.value)}>
                {careerSeasons.map(y => <option value={y} key={y} > {y} </option>)}
            </select>
            <DriverResults driverId={driverId} year={season} />
            
        </div>
    )

}



export default DriverInfo;
