import React, {useEffect, useState} from 'react';
import './App.css';
import Data from './components/data';
import Info from './components/info';

function App() {

  let [information, setInformation] = useState({
    flag : '',
    name : '',
    currency : '',
    population: '',
    region: '',
    subregion: '',
    language: '',
    timeZone : '',
    capital: ''
  })


  const GetInfo = async (e) => {
    e.preventDefault();
    const main = document.querySelector('main');
    main.style.display = 'none';
    let country = e.target.elements.country.value;
    let api = await fetch(`https://restcountries.com/v2/name/${country}`);
    let data = await api.json();
    
    setInformation({
      flag : data[0].flag,
      name : data[0].name,
      currency : data[0].currencies[0].name,
      population: data[0].population,
      region: data[0].region,
      subregion: data[0].subregion,
      language: data[0].languages[0].name,
      timeZone : data[0].timezones[0],
      capital: data[0].capital
    });

  }

  return (
    <div className="App">
      <Data GetInfo={GetInfo} />
      <main data-text='Select_Country'>Select_Country</main>
      <Info 
        flag={information.flag}
        name={information.name}
        currency={information.currency}
        population={information.population}
        region={information.region}
        subregion={information.subregion}
        language={information.subregion}
        timeZone={information.timeZone}
        capital={information.capital}
      />
    </div>
  );
}

export default App;
