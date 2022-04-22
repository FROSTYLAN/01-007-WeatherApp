import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {

  const [weather, setWeather] = useState();
  const [change, setChange] = useState(false);

  const success = pos => {
    const lat = pos.coords.latitude;
    const lon = pos.coords.longitude;

    axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=2b6fb305fce3d2641512ec2c4368693f`)
      .then(res => (setWeather(res.data)))
  }

  useEffect(() => {
     navigator.geolocation.getCurrentPosition(success);
  }, []);

  return (
    <div className="App">
      <div>
        <h1>Weather App</h1>
        <h3>{weather?.name}, {weather?.sys.country}</h3>
        <img src={`http://openweathermap.org/img/wn/${weather?.weather[0].icon}@2x.png`} alt="" />
        <h4>{change ? (parseInt(weather?.main.temp) - 273.15).toFixed(2) + " °C" : (((parseInt(weather?.main.temp) - 273.15) * 9 / 5) + 32).toFixed(2) + " °F"} </h4>
        <button className='boton' onClick={() => setChange(!change)}>{change ? "Change to °F" : "Change to °C"}</button>
      </div>
    </div>
  );
}

export default App;
