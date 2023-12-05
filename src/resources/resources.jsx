import './styles.css'

import rec1 from '../img/rec1.webp'
import rec2 from '../img/rec2.webp'
import rec3 from '../img/rec3.webp'
import rec4 from '../img/rec4.webp'
import rec5 from '../img/rec5.webp'
import rec6 from '../img/rec6.webp'
import rec7 from '../img/rec7.webp'
import rec8 from '../img/rec8.webp'
import rec9 from '../img/rec9.webp'
import rec10 from '../img/rec10.webp'

export const Resources = () => {
    return (
        <div className="Resources">
            <a href="https://www.ecologiaverde.com/como-afecta-la-contaminacion-al-medio-ambiente-1818.html">
                <article className='notice'>
                    <section className='description'>
                        <p className='title'>Cómo afecta la contaminación al medio ambiente</p>
                        <p className="days"></p>
                    </section>
                    <figure>
                        <img src={rec1} alt="" />
                    </figure>
                </article>
            </a>
            <a href="https://www.ecologiaverde.com/contaminacion-por-basura-causas-y-consecuencias-1777.html">
                <article className='notice'>
                    <section className='description'>
                        <p className='title'>Contaminación por basura: causas y consecuencias</p>
                        <p className="days"></p>
                    </section>
                    <figure>
                        <img src={rec2} alt="" />
                    </figure>
                </article>
            </a>
            <a href="https://www.ecologiaverde.com/como-evitar-la-contaminacion-del-mar-y-oceanos-1773.html">
                <article className='notice'>
                    <section className='description'>
                        <p className='title'>Cómo evitar la contaminación del mar y océanos</p>
                        <p className="days"></p>
                    </section>
                    <figure>
                        <img src={rec3} alt="" />
                    </figure>
                </article>
            </a>
            <a href="https://www.ecologiaverde.com/contaminacion-por-plasticos-causas-consecuencias-y-soluciones-2114.html">
                <article className='notice'>
                    <section className='description'>
                        <p className='title'>Contaminación por plásticos: causas, consecuencias y soluciones</p>
                        <p className="days"></p>
                    </section>
                    <figure>
                        <img src={rec4} alt="" />
                    </figure>
                </article>
            </a>
            <a href="https://www.ecologiaverde.com/como-evitar-la-contaminacion-ambiental-1700.html">
                <article className='notice'>
                    <section className='description'>
                        <p className='title'>Cómo evitar la contaminación ambiental</p>
                        <p className="days"></p>
                    </section>
                    <figure>
                        <img src={rec5} alt="" />
                    </figure>
                </article>
            </a>
            <a href="https://www.ecologiaverde.com/que-es-la-contaminacion-ambiental-3044.html">
                <article className='notice'>
                    <section className='description'>
                        <p className='title'>Qué es la contaminación ambiental</p>
                        <p className="days"></p>
                    </section>
                    <figure>
                        <img src={rec6} alt="" />
                    </figure>
                </article>
            </a>
            <a href="https://www.ecologiaverde.com/tipos-de-contaminantes-ambientales-2477.html">
                <article className='notice'>
                    <section className='description'>
                        <p className='title'>Tipos de contaminantes ambientales</p>
                        <p className="days"></p>
                    </section>
                    <figure>
                        <img src={rec7} alt="" />
                    </figure>
                </article>
            </a>
            <a href="https://www.ecologiaverde.com/los-neumaticos-grandes-contaminantes-419.html">
                <article className='notice'>
                    <section className='description'>
                        <p className='title'>Los neumáticos, grandes contaminantes</p>
                        <p className="days"></p>
                    </section>
                    <figure>
                        <img src={rec8} alt="" />
                    </figure>
                </article>
            </a>
            <a href="https://www.ecologiaverde.com/los-productos-mas-contaminantes-119.html">
                <article className='notice'>
                    <section className='description'>
                        <p className='title'>Los productos más contaminantes</p>
                        <p className="days"></p>
                    </section>
                    <figure>
                        <img src={rec9} alt="" />
                    </figure>
                </article>
            </a>
            <a href="https://www.ecologiaverde.com/los-paises-que-mas-contaminan-13.html">
                <article className='notice'>
                    <section className='description'>
                        <p className='title'>Los países que más contaminan</p>
                        <p className="days"></p>
                    </section>
                    <figure>
                        <img src={rec10} alt="" />
                    </figure>
                </article>
            </a>
        </div>
    )
}