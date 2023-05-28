import global from "../../utils/global.json";
import { BiHeart } from "react-icons/bi";

import AOS from "aos";

import { CardContainer } from "../Cards/CardContainer";
import { Reviews } from "../Reviews/Reviews";
import { Link } from 'react-router-dom';


export const Home = () => {
  AOS.init();

  return (
    <main>
      <section className="hero__curve">

        <img
          className="hero__curve"
          src="https://res.cloudinary.com/ferjen/image/upload/v1685076073/yeah_stretching/icons/ys-animated-waves_qp7ro9.svg"
          // src="https://res.cloudinary.com/ferjen/image/upload/v1685068539/yeah_stretching/icons/animated-waves_aa76ti.svg"
          alt="Imagen de curvas rosadas"
        />
      </section>

      <section className="hero__container">
        <article className="hero__title animate__animated animate__lightSpeedInLeft">
          <h2>Tu cuerpo es el único lugar donde se puede vivir,{" "}
            <span className="text__highlight">cuida de él.</span>
          </h2>
          <img
            className="hero__icon-arrow"
            src="https://res.cloudinary.com/ferjen/image/upload/v1681962589/yeah_stretching/icons/ys-icon-down-arrow_bcbfv1.svg"
            alt="Decorativo icono con flecha"
          />
          <h2>¡Hola!</h2>
        </article>

        <article className="hero__img animate__animated animate__lightSpeedInRight">
          <img
            src="https://res.cloudinary.com/ferjen/image/upload/v1685068676/yeah_stretching/profe/img-prof-01-1_ge9drw.png"
            alt="Prof. Yamila Sayag" />

        </article>

        <article className="hero__title--middle animate__animated animate__lightSpeedInLeft">
          <h2>Soy Yami Sayag</h2>
          <h5 className="mb-3 mt-3">Profe y creadora de Yeah Stretching</h5>
        </article>

        <article className="hero__title--second animate__animated animate__lightSpeedInLeft animate__delay-0.5s">
          <h4>
            Yeah comenzó en Marzo del 2021, surge como una alternativa online
            para{" "}
            <span className="hero__title--b">
              {" "}
              seguir activos y en movimiento, cuidando la salud de nuestro
              cuerpo y nuestra mente
            </span>
            , desde el hogar.
          </h4>

          <h5 className="text__highlight text-bold mt-2">
            ¡Todos podemos y &nbsp;
          </h5>
          <h5 className="text__highlight text-bold mb-2">
            debemos hacer ejercicio!
          </h5>

        </article>

        <article className="hero__title--third animate__animated animate__lightSpeedInLeft animate__delay-0.5s">
          <h4 className="text__hero__end">
            Por eso, mi gran motivación es que mejores tu salud a través de mis
            clases, que sientas{" "}
            <span className="hero__title--b">
              {" "}
              los resultados de forma progresiva y que puedas conectar con eso
              tiempo de
            </span>
            autocuidado para vos.
          </h4>

          <Link
            to="/about"
            className="btn-primary"
            type="button"
            aria-label="Obtén más información sobre mí"
            title="Haz clic aquí para conocer más acerca de mí"
          >
            Conocé más sobre mi &gt;
          </Link>

        </article>
      </section>

      <div></div>

      <section
        className="services__container pt-2"
        data-aos="fade-right"
        data-aos-offset="200"
      >
        <h2 className="services__title">
          <span className="text__highlight">
            Servicios que podés elegir{` :)`}
          </span>
        </h2>
        <h5 className="services__subtitle">Súmate a nuevas experiencias</h5>
        <div>
          <CardContainer global={global} />
        </div>
      </section>

      <section className="empresa__container mt-4 mb-3">
        <div
          className="empresa__text ps-2 mb-3 mt-2"
          data-aos="fade-up"
          data-aos-offset="200"
        >
          <h2 className="mt-2 mb-1">Si tenés una Empresa,</h2>
          <p className="mb-2">
            Invertí en la salud y bienestar pa tu recurso más valioso: el capital humano.
          </p>
          <div className='empresa__container--btn'>
            <Link
              to="/service/#bienestarEmpresas"
              className="btn-primary"
              type="button"
              aria-label="Obtén más información sobre Empresas"
              title="Haz clic aquí para conocer más acerca de planes para Empresas"
            >
              Quiero saber más &gt;
            </Link>
          </div>
        </div>

        <div className="empresa__img">
          <img
            className="empresa__img"
            src="https://res.cloudinary.com/ferjen/image/upload/v1683589683/yeah_stretching/clases/4-Stretching_de_oficina_t3aw4j.jpg"
            alt="Mujer sentada en silla en la oficina, estirando los brazos, haciendo stretching"
          />
        </div>
      </section>

      <section className="reviews__container mt-4">
        <div data-aos="fade-right" data-aos-offset="200">
          <div className="reviews-text__container">
            <div className="reviews-title">
              <h2 className=" text__highlight mt-1 mb-2">
                Opiniones&nbsp;
                <BiHeart />
              </h2>
            </div>
            <p className="reviews__text mb-2">
              Los testimonios de nuestros clientes nos importan mucho
            </p>
          </div>

          <div
            className="reviews__container"
            data-aos="fade-right"
            data-aos-offset="200"
          >
            <Reviews global={global} />
          </div>
        </div>

        <div className="mt-5 mb-5">
          <div className="home__footer">
            <h2>Cuando te falte motivación,</h2>
            <h2 className="text__highlight--white">que te sobre disciplina</h2>
          </div>
        </div>
      </section>
    </main >
  );
};
