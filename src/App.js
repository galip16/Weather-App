import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Result from './components/Result';

function App() {
  const [query, setQuery] = useState("");
  const [weatherData, setWeatherData] = useState("");

  const [img, setImg] = useState("")

  const apiKey = "99fbe51e51305fa8b55d51b6e5085e35";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${apiKey}`;

  const searchFunc = async () => {
    await fetch(url).then(result => result.json()).then(data => {
      setWeatherData(data);
    });


    await fetch(`https://api.unsplash.com/search/photos?page=1&query=${query}&client_id=mWkHk8T4FdVl9Q2NwehCoK5eKnKNoG3Rq0NH5I1ZQD8`)
      .then(response => response.json())
      .then(data => setImg(data.results[0].urls.regular))

    setQuery("")
  }



  return (
    <>
      <div className="App">
        <Navbar query={query} setQuery={setQuery} searchFunc={searchFunc} />
        {weatherData ? <Result img={img} weatherData={weatherData} /> : ("")}
      </div>
    </>
  );
}

export default App;
