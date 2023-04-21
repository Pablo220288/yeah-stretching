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
                <div>

                    <svg width="122" height="125" viewBox="0 0 122 125" fill="none" xmlns="http://www.w3.org/2000/svg">



                        <path className='btn-pink' d="M122 60.0117C122 92.6702 83.6513 125 49.9619 125C16.2725 125 0 92.6702 0 60.0117C0 27.3532 28.8598 0 62.5492 0C96.2386 0 122 27.3532 122 60.0117Z" fill="#F1B3D2" />


                        <path d="M54.2715 74.4645L60.6007 79.3645C61.4173 80.1812 63.2548 80.5895 64.4798 80.5895H72.2382C74.6882 80.5895 77.3423 78.752 77.9548 76.302L82.8548 61.3979C83.8756 58.5395 82.0381 56.0895 78.9756 56.0895H70.809C69.584 56.0895 68.5631 55.0687 68.7673 53.6395L69.7881 47.1062C70.1965 45.2687 68.9715 43.227 67.134 42.6145C65.5006 42.002 63.459 42.8187 62.6423 44.0437L54.2715 56.4979" stroke="#505050" stroke-width="4" stroke-miterlimit="10" />


                        <path d="M43.8594 74.4646V54.4563C43.8594 51.598 45.0844 50.5771 47.9427 50.5771H49.9844C52.8427 50.5771 54.0677 51.598 54.0677 54.4563V74.4646C54.0677 77.323 52.8427 78.3438 49.9844 78.3438H47.9427C45.0844 78.3438 43.8594 77.323 43.8594 74.4646Z" stroke="#505050" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>

                </div>
            </div>

        </section >
    )
};
