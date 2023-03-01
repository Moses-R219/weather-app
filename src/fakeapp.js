
import { React, useState } from 'react';
import './App.css';
import bgImage from '././img/bg.jpg'

function App() {

  const images=[
    {
      id:1,
      imageUrl:'./img/sunny.jpg',
      imageNmae:"sky"
    }
  ]
  const apiKey = "9a6a7be9e5effae30ecfc74cbb15380f";
  const [data, setData] = useState({});
  const [city, setCity] = useState("");
  const [nocity,setNocity]=useState(false);


  // const getImage=(e)=>{
  //   fetch(`https://api.api-ninjas.com/v1/randomimage?category=nature`,{
  //   headers:{'X-Api-Key': 'nrp07UCSASfTVop+6w3nPw==c5SMSejoJMpBzviU', 'Accept': 'image/jpg'}})
  //   .then(response=>response.json())
  //   .then(data=>{
  //     console.log(data);})
  // }


  const getData = (event) => {

    if (event.key === "Enter") {
      fetch(`https://api.openweathermap.org/data/2.5/weather/?q=${city}&units=imperial&APPID=${apiKey}`)
        .then(response => response.json())
        .then((data) => {
          if (typeof data.name == 'undefined') {
            setNocity(false);
            setData({
              name:"No city found"
            })

          }
          setNocity(true);
          setData(data)
        });

      setCity("")
    }
  }
  return (

    <div className='App' style={{
      backgroundImage: `url(${bgImage})`, backgroundRepeat: "no-repeat", backgroundSize: "cover",
      height: 570, width: 1150, backgroundPosition: "center"
    }}>
      <div className="container">
        <input
          className='text'
          placeholder='Enter the city'
          value={city}
          onChange={event => setCity(event.target.value)}
          onKeyPress={getData}
        
        />

      </div>

      {
        (nocity&&(typeof data.main != "undefined") ? (
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
