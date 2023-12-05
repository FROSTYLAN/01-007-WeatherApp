import './styles.css'

import not1 from '../img/not1.jpeg'
import not2 from '../img/not2.jpg'
import not3 from '../img/not3.webp'
import not4 from '../img/not4.webp'
import not5 from '../img/not5.jpg'

export const Notices = () => {
    return (
        <div className="Notices">
            <a href="https://aap.org.pe/iqair-calidad-de-aire-peru-mala-aap/#:~:text=28%20Mar%2C%202022-,2021%3A%20PER%C3%9A%20CON%20LA%20PEOR%20CALIDAD%20DE%20AIRE%20ENTRE%20LOS,por%20la%20firma%20privada%20IQAir">
                <article className='principal'>
                    <img src={not1} alt="" />
                    <p className='title'>2023: Peru con la peor calidad de aire entre los paises de la región</p>
                    <p className="days">hace 3 días</p>
                </article>
            </a>
            <a href="https://ojo-publico.com/derechos-humanos/salud/contaminacion-el-aire-ciudades-peruanas-supera-limites-la-oms">
                <article className='notice'>
                    <section className='description'>
                        <p className='title'>Contaminación en el aire de ciudades peruanas...</p>
                        <p className="days">hace 7 días</p>
                    </section>
                    <figure>
                        <img src={not2} alt="" />
                    </figure>
                </article>
            </a>
            <a href="https://www.infobae.com/peru/2023/09/23/contaminacion-del-aire-en-peru-el-58-proviene-del-parque-automotor/">
                <article className='notice'>
                    <section className='description'>
                        <p className='title'>58% de contaminantes en el aire proviene del...</p>
                        <p className="days">hace 14 días</p>
                    </section>
                    <figure>
                        <img src={not3} alt="" />
                    </figure>
                </article>
            </a>
            <a href="https://www.infobae.com/peru/2023/03/18/peru-fue-el-pais-con-la-peor-calidad-de-aire-de-latinoamerica-en-el-2022/">
                <article className='notice'>
                    <section className='description'>
                        <p className='title'>Perú tiene la peor calidad de aire en Latinoamerica...</p>
                        <p className="days">hace 22 días</p>
                    </section>
                    <figure>
                        <img src={not4} alt="" />
                    </figure>
                </article>
            </a>
            <a href="https://inte.pucp.edu.pe/noticias-y-eventos/noticias/ahogandose-en-contaminacion-por-que-es-tan-mala-la-calidad-del-aire-en-lima-y-como-puede-mejorar/">
                <article className='notice'>
                    <section className='description'>
                        <p className='title'>¿Por qué es tan mala la calidad del aire en Lima y...</p>
                        <p className="days">hace 37 días</p>
                    </section>
                    <figure>
                        <img src={not5} alt="" />
                    </figure>
                </article>
            </a>
        </div>
    )
}