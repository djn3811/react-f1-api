import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';





function ChooseDriver() {

    useEffect(() => {

    }, []);

    const drivers = ['hamilton', 'montoya', 'ricciardo', 'massa', 'barrichello', 'vettel', 'raikkonen', 'stewart', 'webber', 'jones', 'fangio'];
    var [driver, setDriver] = useState(drivers[0]);

    var [url, setUrl] = useState('/choosedriver');

    var setDriverValue = () => {
        setDriver((document.getElementById('d')||{}).value);
        updateUrl();
    }; 
    const updateUrl = () =>
    {
        var nextUrl = '/driver/' + driver;
        if (url !== nextUrl) {
            setUrl('/driver/' + driver);

        }
        
    };





    return (
        <form>
            Driver:
          <select id='d' onChange={(d) => setDriverValue(d.value)}>
                {drivers.map(d => <option value={d} key={d} > {d} </option>)}
            </select>
            <br />
            <Button component={Link} to={url} onClick={updateUrl()}>
                Submit
          </Button>
        </form>
    )

}

export default ChooseDriver;
