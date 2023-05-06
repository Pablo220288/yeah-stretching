import { Button } from "../Button";

export const Home = () => {
    return (
        <>
            <section className='hero__container'>
                <div className='hero__curve'>
                    <img className='hero__curve' src="https://res.cloudinary.com/ferjen/image/upload/v1681964673/yeah_stretching/icons/waves_qzsila.svg" alt="" />
                </div>
                <div className='subsection'>
                    <div className='hero__title--mt'>
                        <h2>Tu cuerpo es el</h2>
                        <h2>único lugar donde</h2>
                        <h2>se puede vivir,</h2>
                        <h2><span className='text__highlight'>cuida de él.</span></h2>
                        <img className='hero__icon-arrow' src="https://res.cloudinary.com/ferjen/image/upload/v1681962589/yeah_stretching/icons/ys-icon-down-arrow_bcbfv1.svg" alt="Icono con flecha" />
                        <h2>Hola!</h2>
                        <h2>Soy Yami Sayag</h2>
                        <h4>Profe y creadora de</h4>
                        <h4>Yeah Stretching</h4>
                    </div>
                    <div>
                        <img className='hero__image' src="https://res.cloudinary.com/ferjen/image/upload/v1682651967/yeah_stretching/profe/img-prof-01_cfiul0.png" alt="Profe Yamila" />
                    </div>
                </div>
                <div>
                    <div className='hero__title'>
                        <h5>Yeah comenzó en Marzo del 2021, surge como una alternativa online para seguir activos y en movimiento, cuidando la salud de nuestro cuerpo y nuestra mente, desde el hogar</h5>
                        <h5><span className='text__highlight mb-1'>¡Todos podemos y debemos hacer ejercicio!</span></h5>
                        <Button className='mt-5'>Conocé más sobre mi &gt;</Button>
                    </div>
                </div>
            </section >
            <section className='servicios__container'>
                <h2 className='servicios__title'><span className='text__highlight'>{`Servicios que podés elegir :) `}</span></h2>
                <h5 className='red'>Sumate a nuevas experiencias</h5>
                <article>

                </article>
            </section>
        </>
    )
};
