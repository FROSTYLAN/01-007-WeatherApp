import { useEffect, useState } from "react";
import axios from "axios";

import { Loader } from "./loader/Loader";
import { NearestCity } from "./nearest-city/nearest-city";
import { Notices } from "./notices/notices";
import { Resources } from "./resources/resources";
import logo from "./img/logo.png";
import bell from "./img/bell.png";
import info from "./img/info.png";

function App() {
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [weather, setWeather] = useState();
  const [loading, setLoading] = useState(true);

  const sectionsData = [
    { id: 1, component: <NearestCity weather={weather} /> },
    { id: 2, component: <Notices /> },
    { id: 3, component: <Resources /> },
  ];

  const API_URL = "https://api.airvisual.com/v2";
  const API_KEY = "27e6af69-dd13-45cd-8027-391d3b3e81f5";

  const success = (pos) => {
    const lat = pos.coords.latitude;
    const lon = pos.coords.longitude;

    axios
      .get(`${API_URL}/nearest_city?lat=${lat}&lon=${lon}&key=${API_KEY}`)
      .then((res) => {
        setWeather(res.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching weather data:", error);
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
    );
  }

  return (
    <div className="App">
      <header className="header">
        <img src={info} alt="info" width="30px" height="30px" />
        <img src={logo} alt="logo" width="60px" />
        <img src={bell} alt="bell" width="30px" height="30px" />
      </header>

      <nav className="nav">
        <ul>
          <li
            className={currentSectionIndex === 0 ? "active" : ""}
            onClick={() => setCurrentSectionIndex(0)}
          >
            Ubicación
          </li>
          <li
            className={currentSectionIndex === 1 ? "active" : ""}
            onClick={() => setCurrentSectionIndex(1)}
          >
            Noticias
          </li>
          <li
            className={currentSectionIndex === 2 ? "active" : ""}
            onClick={() => setCurrentSectionIndex(2)}
          >
            Recursos
          </li>
        </ul>
      </nav>

      <div
        className="main"
        style={{
          width: "100vw", // Ancho igual al de la pantalla
          overflow: "hidden", // Oculta el desbordamiento horizontal
        }}
      >
        <div className="section-container" style={{ 
          width: "300vw", 
          display: "flex", 
          transform: `translateX(${-currentSectionIndex * 100}vw)` 
        }}>
          {sectionsData.map((section, index) => (
            <div
              key={section.id}
              className={`section ${currentSectionIndex === index ? "active" : ""}`}
            >
              {section.component}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
