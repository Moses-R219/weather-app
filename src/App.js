import { React, useEffect, useState } from 'react';
import './index.css';
import bg from './public/img/logoed.gif'
import weather from './public/img/thunder.jpg'

function App() {

  const images=[
    {
      id:"Haze",
      img:require('./public/img/haze.jpg'),
    },
    {
      id:"Rain",
      img:require('./public/img/rainy.jpg'),
    },
    {
      id:"Clouds",
      img:require('./public/img/clouds.jpg'),
    },
    {
      id:"Clear",
      img:require('./public/img/sunny.jpg'),
    },
    {
      id:"Thunderstorm",
      img:require('./public/img/thunder.jpg'),
    },

  ]

  // const imgcount = Math.floor(Math.random() * 10)
  // const apiimagekey = "nVEZCm0GwLRNQSS1RQ1ktEY2DsOW1sNz0c7D3TppIEc";
  const apiKey = "9a6a7be9e5effae30ecfc74cbb15380f";
  const [data, setData] = useState({});
  const [city, setCity] = useState("");
  const [bgimage, setbgImage] = useState(weather)

  const getImage=(climate)=>{
    console.log(climate);
    images.map(image=> {
        if(climate===image.id)
          setbgImage(image.img)
    })
  }

  // const getImage = (m) => {
  //   fetch(`https://api.unsplash.com/search/photos?query=${m}&client_id=${apiimagekey}`)
  //     .then(response => response.json())
  //     .then(data => {
  //       console.log(data.results[imgcount].urls.raw);
  //       setbgImage(data.results[imgcount].urls.raw);
  //     })
  // }

  const getData = (event) => {
    if (event.key === "Enter") {
      fetch(`https://api.openweathermap.org/data/2.5/weather/?q=${city}&units=imperial&APPID=${apiKey}`)
        .then(response => response.json())
        .then((data) => {
          if (typeof data.name == 'undefined') {
            setData("No city found")
          }
          setData(data);
          getImage(data.weather[0].main);
        });
      setCity("")
    }
  }
  return (
    <div className='App' style={{ backgroundImage: `url(${bgimage})`}}>
      <center><img src={bg} alt="logo"></img></center>
      
      <div className="container" >
        <input
          // style={{backgroundColor:"grey"}}
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
          <div className='loc'>
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
        ) : 
      // style={{ backgroundImage:`url(${setbgImage()`}}}
        ("")
        )
      }


    </div>
  );
}

export default App;
