import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Result from './components/Result';

function App() {


  const [query, setQuery] = useState("");

  const [weatherData, setWeatherData] = useState(null);


  const apiKey = "99fbe51e51305fa8b55d51b6e5085e35";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${apiKey}`;

  const searchFunc = async () => {

    await fetch(url).then(result => result.json()).then(data => {
      setWeatherData(data);
      console.log(data);
    });

    setQuery("")





  }





  return (
    <>
      <div className="App">
        <Navbar query={query} setQuery={setQuery} searchFunc={searchFunc} />
        {weatherData ? <Result weatherData={weatherData} /> : ("")}
      </div>


    </>
  );
}

export default App;
