import { Button } from '../Button';

export const Home = () => {
    return (
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
                    <img className='hero__icon-arrow' src="https://res.cloudinary.com/ferjen/image/upload/v1681962589/yeah_stretching/icons/ys-icon-down-arrow_bcbfv1.svg" alt="" />
                </div>
                <div>
                    <img className='hero__image' src="https://res.cloudinary.com/ferjen/image/upload/v1681958286/yeah_stretching/profe/img-prof-01_z5v5xg.png" alt="" />
                </div>
            </div>
            <div>
                <div className='hero__title'>
                    <h2>Hola!</h2>
                    <h2>Soy Yami Sayag</h2>
                    <h4>Profe y creadora de Yeah Stretching</h4>
                    <h5>Yeah comenzó en Marzo del 2021, surge como una alternativa online para seguir activos y en movimiento, cuidando la salud de nuestro cuerpo y nuestra mente, desde el hogar</h5>
                    <h5><span className='text__highlight'>¡Todos podemos y debemos hacer ejercicio!</span></h5>
                    <Button >Conocé más sobre mi &gt;</Button>
                </div>
            </div>

        </section >
    )
};
