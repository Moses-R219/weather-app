
import { React, useState } from 'react';
import './App.css';

function App() {

  const apiKey = "9a6a7be9e5effae30ecfc74cbb15380f";
  const [data, setData] = useState([{}]);
  const [city, setCity] = useState("");


  const getData = (event) => {
    if (event.key === "Enter") {
      fetch(`https://api.openweathermap.org/data/2.5/weather/?q=${city}&units=imperial&APPID=${apiKey}`)
        .then(response => response.json())
        .then(data => setData(data));
      console.log(data);
      setCity("")
    }
  }

  return (
  
      <div className='App'>
        z<div className="container">
          <input
            className='text'
            placeholder='Enter the city'
            value={city}
            onChange={event => setCity(event.target.value)}
            onKeyPress={getData}
          />
        </div>
        

      </div>
    
  );
}

export default App;
