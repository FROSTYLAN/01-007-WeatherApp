import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [weather, setWeather] = useState();
  const [change, setChange] = useState(false);

  const success = (pos) => {
    const lat = pos.coords.latitude;
    const lon = pos.coords.longitude;

    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=2b6fb305fce3d2641512ec2c4368693f`
      )
      .then((res) => {
        console.log(res.data);
        setWeather(res.data);
      });
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success);
  }, []);

  return (
    <div className="App">
      <div className="main">
        <h1 className="main__title">Weather App</h1>
        <h2 className="main__location">
          {weather?.name}, {weather?.sys.country}
        </h2>
        <section className="main__contents">
          <article className="main__contents-temperature">
            <img
              src={`http://openweathermap.org/img/wn/${weather?.weather[0].icon}@2x.png`}
              alt=""
            />
            <h4>
              {change
                ? (parseInt(weather?.main.temp) - 273.15).toFixed(2) + " °C"
                : (
                    ((parseInt(weather?.main.temp) - 273.15) * 9) / 5 +
                    32
                  ).toFixed(2) + " °F"}{" "}
            </h4>
          </article>
          <article className="main__contents-others">
            <p>"{weather?.weather[0].description}"</p>
            <p>Wind speed: {weather?.wind.speed} m/s</p>
            <p>Clouds: {weather?.clouds.all}%</p>
            <p>Humidity: {weather?.main.humidity}</p>
          </article>
        </section>
        <button className="button" onClick={() => setChange(!change)}>
          Degress °F/°C
        </button>
      </div>
    </div>
  );
}

export default App;
