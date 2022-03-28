import React ,{useState, useEffect} from 'react';
import axios from 'axios';

function Data(props){

    const [names, setNames] = useState([]);

    useEffect(() => {
        axios.get("https://restcountries.com/v2/all")
        .then(res => {
            setNames(res.data)
        })
    }, []);

    return(
        <form onSubmit={props.GetInfo}>
            <select name='country'>
                {names.map(countryName => (
                    <option key={countryName.name}>{countryName.name}</option>
                ))}
            </select>
            <button>Get Info</button>
        </form>
    )
}

export default Data;