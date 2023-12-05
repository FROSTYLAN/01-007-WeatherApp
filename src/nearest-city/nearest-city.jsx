import navigation from '../img/navigation.png'
import cloudy from '../img/cloudy.png'


import thermometer from '../img/thermometer.png'
import gauge from '../img/gauge.png'
import humidity from '../img/humidity.png'
import north from '../img/north.png'
import windy from '../img/windy.png'

import './nearest-city.css'

export const NearestCity = ({ weather }) => {

    return (
        <div className='NearestCity'>
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
                <article className='clima'>
                    <img src={cloudy} alt="cloudy" />
                </article>
                <article className='stacks'>
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
                    <p>
                        <img src={windy} alt="humidity" />
                        <span>{weather.current.weather.ws} m/s</span>
                    </p>
                    <p>
                        <img src={north} alt="humidity" />
                        <span>{weather.current.weather.wd}°</span>
                    </p>
                </article>
            </section>
            <footer>
                    <p style={{
                        fontSize: "12px",
                        color: "gray",
                        marginTop: "18px"
                    }}>Creado por grupo 8</p>
                </footer>
        </div>
    )
}