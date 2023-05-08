import { Button } from "../Button";
import { CardContainer } from '../CardContainer';
import global from '../../utils/global.json';
import { Reviews } from '../Reviews/Reviews';
import { BiHeart } from "react-icons/bi";

import { Breakpoint } from '../Breakpoints/Breakpoints';

export const Home = () => {
    return (
        <main>
            <div className='hero__curve'>
                <img
                    className='hero__curve'
                    src="https://res.cloudinary.com/ferjen/image/upload/v1681964673/yeah_stretching/icons/waves_qzsila.svg"
                    alt="Imagen de curvas rosadas"
                />
            </div>


            <Breakpoint at='xs'>
                <section className='hero__container'>

                    <div className='subsection'>
                        <div className='hero__title--mt animate__animated animate__fadeInLeft'>
                            <h2>Tu cuerpo es</h2>
                            <h2>el único lugar</h2>
                            <h2>donde se</h2>
                            <h2>puede vivir,</h2>
                            <h2>
                                <span className='text__highlight'>cuida de él.</span>
                            </h2>
                            <img
                                className='hero__icon-arrow'
                                src="https://res.cloudinary.com/ferjen/image/upload/v1681962589/yeah_stretching/icons/ys-icon-down-arrow_bcbfv1.svg"
                                alt="Icono con flecha" />
                            <h2>Hola!</h2>

                        </div>
                        <div className='hero__image-container'>
                            <img
                                className='hero__image'
                                src="https://res.cloudinary.com/ferjen/image/upload/v1682651967/yeah_stretching/profe/img-prof-01_cfiul0.png"
                                alt="Profe Yamila" />
                        </div>
                    </div>

                    <div className='subsection'>
                        <div className='hero__title animate__animated animate__fadeInLeft'>
                            <h2>Soy Yami Sayag</h2>
                            <h4>Profe y creadora de Yeah Stretching</h4>
                            <h5>Yeah comenzó en Marzo del 2021, surge como una alternativa online para <span
                                className='hero__title--b'
                            > seguir activos y en movimiento, cuidando la salud de nuestro cuerpo y nuestra mente</span>, desde el hogar.
                            </h5>
                            <h5
                                className='mt-1 mb-2'
                            >
                                <span className='text__highlight text-bold'>¡Todos podemos y debemos hacer ejercicio!
                                </span>
                            </h5>
                            <Button
                                className='btn-primary'
                            >Conocé más sobre mi &gt;
                            </Button>
                        </div>
                    </div>

                </section >
            </Breakpoint>

            <Breakpoint at='sm'>
                <section className='hero__container'>

                    <div className='subsection'>
                        <div className='hero__title--mt animate__animated animate__fadeInLeft'>
                            <h2>Tu cuerpo es</h2>
                            <h2>el único lugar</h2>
                            <h2>donde se</h2>
                            <h2>puede vivir,</h2>
                            <h2>
                                <span className='text__highlight'>cuida de él.</span>
                            </h2>
                            <img
                                className='hero__icon-arrow'
                                src="https://res.cloudinary.com/ferjen/image/upload/v1681962589/yeah_stretching/icons/ys-icon-down-arrow_bcbfv1.svg"
                                alt="Icono con flecha" />
                            <h2>Hola!</h2>

                        </div>
                        <div className='hero__image-container'>
                            <img
                                className='hero__image'
                                src="https://res.cloudinary.com/ferjen/image/upload/v1682651967/yeah_stretching/profe/img-prof-01_cfiul0.png"
                                alt="Profe Yamila" />
                        </div>
                    </div>

                    <div className='subsection'>
                        <div className='hero__title animate__animated animate__fadeInLeft'>
                            <h2>Soy Yami Sayag</h2>
                            <h4>Profe y creadora de Yeah Stretching</h4>
                            <h5>Yeah comenzó en Marzo del 2021, surge como una alternativa online para <span
                                className='hero__title--b'
                            > seguir activos y en movimiento, cuidando la salud de nuestro cuerpo y nuestra mente</span>, desde el hogar.
                            </h5>
                            <h5
                                className='mt-1 mb-2'
                            >
                                <span className='text__highlight text-bold'>¡Todos podemos y debemos hacer ejercicio!
                                </span>
                            </h5>
                            <Button
                                className='btn-primary'
                            >Conocé más sobre mi &gt;
                            </Button>
                        </div>
                    </div>

                </section >
            </Breakpoint>

            <Breakpoint at='md'>
                <section className='hero__container'>

                    <div className='subsection'>
                        <div className='hero__title--mt animate__animated animate__fadeInLeft'>
                            <h2>Tu cuerpo es</h2>
                            <h2>el único lugar</h2>
                            <h2>donde se</h2>
                            <h2>puede vivir,</h2>
                            <h2>
                                <span className='text__highlight'>cuida de él.</span>
                            </h2>
                            <img
                                className='hero__icon-arrow'
                                src="https://res.cloudinary.com/ferjen/image/upload/v1681962589/yeah_stretching/icons/ys-icon-down-arrow_bcbfv1.svg"
                                alt="Icono con flecha" />
                            <h2>Hola!</h2>

                        </div>
                        <div className='hero__image-container'>
                            <img
                                className='hero__image'
                                src="https://res.cloudinary.com/ferjen/image/upload/v1682651967/yeah_stretching/profe/img-prof-01_cfiul0.png"
                                alt="Profe Yamila" />
                        </div>
                    </div>

                    <div className='subsection'>
                        <div className='hero__title animate__animated animate__fadeInLeft'>
                            <h2>Soy Yami Sayag</h2>
                            <h4>Profe y creadora de Yeah Stretching</h4>
                            <h5>Yeah comenzó en Marzo del 2021, surge como una alternativa online para <span
                                className='hero__title--b'
                            > seguir activos y en movimiento, cuidando la salud de nuestro cuerpo y nuestra mente</span>, desde el hogar.
                            </h5>
                            <h5
                                className='mt-1 mb-2'
                            >
                                <span className='text__highlight text-bold'>¡Todos podemos y debemos hacer ejercicio!
                                </span>
                            </h5>
                            <Button
                                className='btn-primary'
                            >Conocé más sobre mi &gt;
                            </Button>
                        </div>
                    </div>

                </section >
            </Breakpoint>

            <Breakpoint at="lg">

                <section className='hero__container'>

                    <div className='subsection'>
                        <div className='hero__title--mt animate__animated animate__fadeInLeft'>
                            <h2>Tu cuerpo es</h2>
                            <h2>el único lugar</h2>
                            <h2>donde se</h2>
                            <h2>puede vivir,</h2>
                            <h2>
                                <span className='text__highlight'>cuida de él.</span>
                            </h2>
                            <img
                                className='hero__icon-arrow'
                                src="https://res.cloudinary.com/ferjen/image/upload/v1681962589/yeah_stretching/icons/ys-icon-down-arrow_bcbfv1.svg"
                                alt="Icono con flecha" />
                            <h2>Hola!</h2>

                        </div>

                    </div>

                    <div className='subsection'>
                        <div className='hero__title animate__animated animate__fadeInLeft'>
                            <h2>Soy Yami Sayag</h2>
                            <h4>Profe y creadora de Yeah Stretching</h4>
                            <h5>Yeah comenzó en Marzo del 2021, surge como una alternativa online para <span
                                className='hero__title--b'
                            > seguir activos y en movimiento, cuidando la salud de nuestro cuerpo y nuestra mente</span>, desde el hogar.
                            </h5>
                            <h5
                                className='mt-1 mb-2'
                            >
                                <span className='text__highlight text-bold'>¡Todos podemos y debemos hacer ejercicio!
                                </span>
                            </h5>
                            <div className='hero__image-container'>
                                <img
                                    className='hero__image'
                                    src="https://res.cloudinary.com/ferjen/image/upload/v1682651967/yeah_stretching/profe/img-prof-01_cfiul0.png"
                                    alt="Profe Yamila" />
                            </div>
                            <Button
                                className='btn-primary'
                            >Conocé más sobre mi &gt;
                            </Button>
                        </div>
                    </div>

                </section >

            </Breakpoint>

            <section className='servicios__container'>
                <h2 className='servicios__title  animate__animated animate__fadeInUp'>
                    <span className='text__highlight'>{`Servicios que podés elegir :)`}</span>
                </h2>
                <h5 className='mb-3'>Súmate a nuevas experiencias</h5>
                <div>
                    <CardContainer global={global} />
                </div>
            </section>

            <section className='empresa__container mt-4 mb-3'>

                <div className='ps-2 mb-3 mt-2'>
                    <h2>Si tenés una Empresa,</h2>
                    <p className='empresa__text--s mb-2'>Invertí en la salud y bienestar corporativo para permitir que tu capital humano y empresarial se vea mejorado</p>
                    <Button
                        className='btn-primary'
                    >
                        Quiero saber más &gt;
                    </Button>
                </div>

                <div className='empresa__img'>
                    <img
                        className='empresa__img'
                        src="https://res.cloudinary.com/ferjen/image/upload/v1683434043/yeah_stretching/clases/4-Stretching_oficina_pnalh4.jpg"
                        alt="Mujer sentada en silla en la oficina, estirando los brazos, haciendo stretching"
                    />
                </div>

            </section>

            <section className='reviews__container mt-4'>

                <div>
                    <div className='reviews-text__container'>
                        <h2 className=' text__highlight servicios__title'>
                            Reviews&nbsp;
                            <span
                                className='text__highlight--icon'>
                                <BiHeart />
                            </span>&nbsp;
                        </h2>
                        <p className='empresa__text--c mb-2'>Las opiniones, valoraciones o testimonios de nuestros clientes nos importan ¡y mucho!</p>
                    </div>

                    <div className='empresa__img'>
                        <Reviews global={global} />
                    </div>

                </div>
                <button className='btn-secondary'>
                    <h3>Cuando te falte motivación,</h3>
                    <h3 className='text__highlight--white'>
                        que te sobre disciplina</h3>
                </button>

            </section>

        </main>
    )
};

