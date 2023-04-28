import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { Button } from "../Button";

export const Service = () => {
  const [openMenu, setOpenMenu] = useState("");
  const [stretchingAge, setStretchingAge] = useState("");

  const openClose = () => {
    openMenu === "openMenu" ? setOpenMenu("") : setOpenMenu("openMenu");
  };
  const openStretchingAge = () => {
    stretchingAge === "openMenu"
      ? setStretchingAge("")
      : setStretchingAge("openMenu");
  };
  return (
    <>
      <div className="service__container">
        <div className="section__service">
          <div className="section__img"></div>
          <div className="section__text__container">
            <h2 className="section__title">
              Stretching<span></span>
            </h2>
            <p className="section__text">
              Es una disciplina orientada a estirar los músculos de nuestro
              cuerpo y a ampliar nuestro rango articular. Se trabaja a través de
              movimientos suaves y conscientes.
            </p>
            <details className="accordion">
              <summary className="accordion_title">
                <IoIosArrowForward className="accordion__icon" />
                Beneficios
              </summary>
              <summary className="accordion_text">
                <div>
                  <p>
                    Reducir las emociones negativas, adquirir habilidades para
                    controlar el estrés, aumentar la autoconciencia, enfocarse
                    en el presente, disminución de dolores corporales.
                  </p>
                </div>
              </summary>
            </details>
            <details className="accordion">
              <summary className="accordion_title">
                <IoIosArrowForward className="accordion__icon" />
                Edades
              </summary>
              <summary className="accordion_text">
                <div>
                  <p>30 en adelante.</p>
                </div>
              </summary>
            </details>
            <Button className="button__service">Contratar</Button>
          </div>
        </div>
        <div className="section__service pilatesMat">
          <div className="section__img"></div>
          <div className="section__text__container">
            <h2 className="section__title">
              Pilates Mat<span></span>
            </h2>
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
                  <p>
                    Fortalecimiento de músculos, aumento de la flexibilidad,
                    conexión mente - cuerpo, previene lesiones, corrección
                    postural.
                  </p>
                </div>
              </summary>
            </details>
            <details className="accordion">
              <summary className="accordion_title">
                <IoIosArrowForward className="accordion__icon" />
                Edades
              </summary>
              <summary className="accordion_text">
                <div>
                  <p>30 en adelante.</p>
                </div>
              </summary>
            </details>
            <Button className="button__service">Contratar</Button>
          </div>
        </div>
        <div className="section__service stretchingRestaurativo">
          <div className="section__img"></div>
          <div className="section__text__container">
            <div>
              <h2 className="section__title">
                Stretching<span></span>
              </h2>
              <h2 className="section__title">
                Restaurativo<span></span>
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
                  <p>
                    Reducir las emociones negativas, adquirir habilidades para
                    controlar el estrés, aumentar la autoconciencia, enfocarse
                    en el presente, disminución de dolores corporales.
                  </p>
                </div>
              </summary>
            </details>
            <details className="accordion">
              <summary className="accordion_title">
                <IoIosArrowForward className="accordion__icon" />
                Edades
              </summary>
              <summary className="accordion_text">
                <div>
                  <p>30 en adelante.</p>
                </div>
              </summary>
            </details>
            <Button className="button__service">Contratar</Button>
          </div>
        </div>
        <div className="section__service bienestarEmpresas">
          <div className="section__img"></div>
          <div className="section__text__container">
            <div>
              <h2 className="section__title">
                Bienestar<span></span>
              </h2>
              <h2 className="section__title">
                Empresas<span></span>
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
                  <p>
                    Disminución de conflictos entre empleados, estimulación de
                    la creatividad, cuidado de la salud mental del equipo, menos
                    ausentismo, mayor compromiso, disminución en el número de
                    fallas o errores, mejor atención al cliente.
                  </p>
                </div>
              </summary>
            </details>
            <details className="accordion">
              <summary className="accordion_title">
                <IoIosArrowForward className="accordion__icon" />
                Edades
              </summary>
              <summary className="accordion_text">
                <div>
                  <p>30 en adelante.</p>
                </div>
              </summary>
            </details>
            <Button className="button__service">Contratar</Button>
            <div>
              <p className="service__appointment">
                “Es fundamental garantizar que los empleados de una organización
                se encuentren en las mejores condiciones, que gocen de bienestar
                físico, mental y emocional”.
              </p>
              <p className="service__author">Erika Brú</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
