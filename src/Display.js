import React, {useState, useEffect} from 'react';
import Races from './Races';


var round = 0;
var season = 0;
var raceName = 'a';


function Display(props) {

   

    useEffect(() => {
        Display();
    }, []);


    round = props.MRData.RaceTable.round;
    season = props.MRData.RaceTable.season;
    raceName = props.MRData.RaceTable.Races[0].raceName;







    return (
        <div>
            <h1>Race Results</h1>
            <select>
                <option value='2008'>2008</option>
            </select>
            <select>
                <option value='5'>5</option>
            </select>
            <h1>{raceName}</h1>
            {raceName === 'temp' ?
                <div>Loading</div>
                :
                <div>{raceName}</div>
            }
            {/* {results.map(name =>(
                {name}
            ))} */}
        </div>
    );

};


export default Display;