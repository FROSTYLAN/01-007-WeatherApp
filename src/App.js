import { useEffect, useState } from "react";
import axios from "axios";
import { Loader } from "./loader/Loader";

import logo from "./img/logo.png"

import { NearestCity } from "./nearest-city/nearest-city";
import { ListStates } from "./list-states/list-states";

function App() {
  const [weather, setWeather] = useState();
  const [loading, setLoading] = useState(true);

  const API_URL = "https://api.airvisual.com/v2"
  const API_KEY = "27e6af69-dd13-45cd-8027-391d3b3e81f5"

  const success = (pos) => {
    const lat = pos.coords.latitude;
    const lon = pos.coords.longitude;

    axios
      .get(
        `${API_URL}/nearest_city?lat==${lat}&&lon==${lon}&key=${API_KEY}`
      )
      .then((res) => {
        setWeather(res.data.data);
        setLoading(false);
      });
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success);
  }, []);

  if (loading) {
    return (
      <div className="App">
        <Loader />
      </div>
    )
  }

  return (
    <div className="App">
      <img className="logo" src={logo} alt="logo"/>
      <div className="main">
        <NearestCity weather={weather}/> 
        <ListStates />
      </div>
    </div>
  );
}

export default App;
