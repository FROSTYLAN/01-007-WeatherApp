import navigation from '../img/navigation.png'
import cloudy from '../img/cloudy.png'


import thermometer from '../img/thermometer.png'
import gauge from '../img/gauge.png'
import humidity from '../img/humidity.png'

import './nearest-city.css'

export const NearestCity = ({ weather }) => {
    
    console.log(weather);

    return (
        <div>
            <section className='ubication-container'>
                <p>
                    <img src={navigation} alt="navigation" />
                    {weather.city}
                </p>
                <p style={{"marginTop": "2px"}}>
                    {weather.state}, {weather.country}
                </p>
            </section>
            <section className='aqi-container'>
                <p>{weather?.current.pollution.aqius}</p>
                <p>AQI US</p>
            </section>
            <section className='weather-container'>
                <article>
                    <img src={cloudy} alt="cloudy" />
                </article>
                <article>
                    <p>
                        <img src={thermometer} alt="thermometer" />
                        <span>{weather.current.weather.tp} °C</span>
                    </p>
                    <p>
                        <img src={gauge} alt="gauge" />
                        <span>{weather.current.weather.pr} hPa</span>
                    </p>
                    <p>
                        <img src={humidity} alt="humidity" />
                        <span>{weather.current.weather.hu}%</span>
                    </p>
                    {/* <p>Velocidad del viento: {weather.current.weather.ws} m/s</p>
                    <p>Humedad: {weather.current.weather.wd} grados</p> */}
                </article>
            </section>
        </div>
    )
}