import { React, useState } from 'react';
import './App.css';

function App() {

  const imgcount = Math.floor(Math.random() * 10)
  const apiimagekey = "nVEZCm0GwLRNQSS1RQ1ktEY2DsOW1sNz0c7D3TppIEc";
  const apiKey = "9a6a7be9e5effae30ecfc74cbb15380f";
  const [data, setData] = useState({});
  const [city, setCity] = useState("");
  const [bgimage, setbgImage] = useState()
  console.log(imgcount);

  const getImage = (m) => {
    fetch(`https://api.unsplash.com/search/photos?query=${m}&client_id=${apiimagekey}`)
      .then(response => response.json())
      .then(data => {
        setbgImage(data.results[imgcount].urls.raw);
      })
  }

  const getData = (event) => {

    if (event.key === "Enter") {
      fetch(`https://api.openweathermap.org/data/2.5/weather/?q=${city}&units=imperial&APPID=${apiKey}`)
        .then(response => response.json())
        .then((data) => {
          if (typeof data.name == 'undefined') {
            setData({
              name: "No city found"
            })
          }
          setData(data);
          getImage(data.weather[0].description);
        });

      setCity("")
    }
  }
  return (
    <div className='App' style={{ backgroundImage: `url(${bgimage})` }}>
      <h1>check out the Weather</h1>
      <div className="container" >
        <input
          className='text'
          placeholder='Enter the city'
          value={city}
          onChange={event => setCity(event.target.value)}
          onKeyPress={getData}
          onClick={getImage}
        />

      </div>

      {
        ((typeof data.main != "undefined") ? (
          <div>
            <div className="location-box">
              <div className="location">
                {data.name},
                {data.sys.country}
              </div>
            </div>
            <div className="weather-box">
              <div className="temp">

                {Math.round(data.main.temp)}°F
              </div>
              <div className="weather">{data.weather[0].description}</div>
            </div>
          </div>
        ) : (""))
      }


    </div>
  );
}

export default App;
