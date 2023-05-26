import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";

import AOS from "aos";

import { Link } from "react-router-dom";

export const Service = () => {
  AOS.init();

  const [ openMenu, setOpenMenu ] = useState( "" );
  const [ stretchingAge, setStretchingAge ] = useState( "" );

  const openClose = () => {
    openMenu === "openMenu" ? setOpenMenu( "" ) : setOpenMenu( "openMenu" );
  };
  const openStretchingAge = () => {
    stretchingAge === "openMenu"
      ? setStretchingAge( "" )
      : setStretchingAge( "openMenu" );
  };
  return (
    <>
      <div className="service__container">
        <div className="section__service" id="stretchingSection">
          <div className="section__img"></div>
          <div className="section__text__container">
            <h2 className="section__title text__highlight header__text animate__animated animate__lightSpeedInRight animate__delay-0.5s">
              Stretching
            </h2>
            <p className="section__text">
              Es una disciplina orientada a estirar los músculos de nuestro
              cuerpo y a ampliar nuestro rango articular. Se trabaja a través de movimientos suaves y conscientes.
            </p>
            <details className="accordion">
              <summary className="accordion_title">
                <IoIosArrowForward className="accordion__icon" />
                Beneficios
              </summary>
              <summary className="accordion_text">
                <div>
                  <p className="accordion_text">
                    Reducir las emociones negativas, adquirir habilidades para
                    controlar el estrés, aumentar la autoconciencia, enfocarse
                    en el presente, disminución de dolores corporales.
                  </p>
                </div>
              </summary>
            </details>
            <Link to="/contact"
              className="btn-primary"
              type="button"
              aria-label="Obtén más información sobre mí"
              title="Haz clic aquí para conocer más acerca de mí"
            >Contratar
            </Link>
          </div>
        </div>
        <div className="section__service pilatesMat" id='pilatesMat'>
          <div className="section__img"></div>
          <div className="section__text__container">
            <div className="section__text--oneLine">
              <div className='d-flex'>
                <h2 className="section__title text__highlight header__text animate__animated animate__lightSpeedInRight animate__delay-0.5s">
                  Pilates&nbsp;
                </h2>
                <br />
                <h2 className="section__title text__highlight header__text animate__animated animate__lightSpeedInRight animate__delay-0.5s">
                  Mat
                </h2>
              </div>
            </div>
            <p className="section__text">
              Es una disciplina orientada a fortalecer nuestro cuerpo, a través
              de una serie de ejercicios realizados en colchoneta que combinan
              fuerza y flexibilidad.
            </p>
            <details className="accordion">
              <summary className="accordion_title">
                <IoIosArrowForward className="accordion__icon" />
                Beneficios
              </summary>
              <summary className="accordion_text">
                <div>
                  <p className="accordion_text">
                    Fortalecimiento de músculos, aumento de la flexibilidad,
                    conexión mente - cuerpo, previene lesiones, corrección
                    postural.
                  </p>
                </div>
              </summary>
            </details>
            <Link to="/contact"
              className="btn-primary"
              type="button"
              aria-label="Obtén más información sobre mí"
              title="Haz clic aquí para conocer más acerca de mí"
            >Contratar
            </Link>
          </div>
        </div>
        <div className="section__service stretchingRestaurativo" id='stretchingRestaurativo'>
          <div className="section__img"></div>
          <div className="section__text__container">
            <div>
              <h2 className="section__title text__highlight header__text animate__animated animate__lightSpeedInRight animate__delay-0.5s">
                Stretching
              </h2>
              <br />
              <h2 className="section__title text__highlight header__text animate__animated animate__lightSpeedInRight animate__delay-0.5s">
                Restaurativo
              </h2>
            </div>
            <p className="section__text">
              Es una disciplina orientada a la conexión entre la mente y el
              cuerpo a través de ejercicios suaves de flexibilidad, de movilidad
              articular, de respiración y meditaciones guiadas.
            </p>
            <details className="accordion">
              <summary className="accordion_title">
                <IoIosArrowForward className="accordion__icon" />
                Beneficios
              </summary>
              <summary className="accordion_text">
                <div>
                  <p className="accordion_text">
                    Reducir las emociones negativas, adquirir habilidades para
                    controlar el estrés, aumentar la autoconciencia, enfocarse
                    en el presente, disminución de dolores corporales.
                  </p>
                </div>
              </summary>
            </details>
            <Link to="/contact"
              className="btn-primary"
              type="button"
              aria-label="Obtén más información sobre mí"
              title="Haz clic aquí para conocer más acerca de mí"
            >Contratar
            </Link>
          </div>
        </div>
        <div className="section__service bienestarEmpresas" id='bienestarEmpresas'>
          <div className="section__img"></div>
          <div className="section__text__container">
            <div>
              <h2 className="section__title text__highlight header__text animate__animated animate__lightSpeedInLeft animate__delay-0.5s">
                Bienestar
              </h2>
              <br />
              <h2 className="section__title text__highlight header__text animate__animated animate__lightSpeedInLeft animate__delay-0.5s">
                Empresas
              </h2>
            </div>
            <p className="section__text">
              Es un plan o programa que implementa medidas para mejorar la
              calidad de vida de los trabajadores. Entre los servicios que
              presta este paquete se incluyen: sesiones grupales online con
              ejercicios simples de stretching que se realizan desde la silla o
              el escritorio, técnicas de respiración, información sobre pausas
              activas, tips para mejorar la calidad de vida.
            </p>
            <details className="accordion">
              <summary className="accordion_title">
                <IoIosArrowForward className="accordion__icon" />
                Beneficios
              </summary>
              <summary className="accordion_text">
                <div>
                  <p className="accordion_text">
                    Disminución de conflictos entre empleados, estimulación de
                    la creatividad, cuidado de la salud mental del equipo, menos
                    ausentismo, mayor compromiso, disminución en el número de
                    fallas o errores, mejor atención al cliente.
                  </p>
                </div>
              </summary>
            </details>
            <Link to="/contact"
              className="btn-primary"
              type="button"
              aria-label="Obtén más información sobre mí"
              title="Haz clic aquí para conocer más acerca de mí"
            >Contratar
            </Link>
            <div>
              <p className="service__appointment">
                “Es fundamental garantizar que los empleados de una organización
                se encuentren en las mejores condiciones, que gocen de bienestar
                físico, mental y emocional”. Erika Brú
              </p>
              <p className="service__author"></p>
            </div>
          </div>
        </div>
      </div >
    </>
  );
};
