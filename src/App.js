import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {

  const [weather, setWeather] = useState();

  const success = pos => {
    const lat = pos.coords.latitude;
    const lon = pos.coords.longitude;

    axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=2b6fb305fce3d2641512ec2c4368693f`)
      .then(res => (setWeather(res)))
  }

  useEffect(() => {
     navigator.geolocation.getCurrentPosition(success);
  }, []);

  return (
    <div className="App">
      <img src={`http://openweathermap.org/img/wn/${weather?.weather?.[0]?.icon}@2x.png`} alt="" />
    </div>
  );
}

export default App;
