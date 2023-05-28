import { Link } from "react-router-dom";
import AOS from "aos";
import { TbBolt, TbBallVolleyball } from "react-icons/tb";
import { FiCoffee, FiStar } from "react-icons/fi";


export const About = () => {
  AOS.init();

  return (
    <>
      <div id="pageAbout"></div>
      <div className="about__container">
        <div className="about__header">
          <div className="header__text animate__animated animate__lightSpeedInLeft animate__delay-0.5s">
            <h3>
              Hola!
              <br />
              Soy Yami Sayag
            </h3>
            <div>
              <h4 className="text__highlight">
                Instructora de Stretching,
                <span></span>
              </h4>
              <h4 className="text__highlight">
                Pilates Mat, Meditación y&nbsp;<span> </span>
              </h4>
              <h4 className="text__highlight">
                Esferodinamia
                <span></span>
              </h4>
            </div>
          </div>
          <div className="header__img"></div>
        </div>

        <div className="about__main__container">
          <div className="main__container">
            <h3 className="main__title text__highlight animate__animated animate__lightSpeedInLeft animate__delay-0.5s">
              Mi Historia
            </h3>
            <p className="main__text">
              Soy Yami Sayag, tengo 35 años y soy Licenciada en Administración
              Hotelera, Instructora de Stretching, Pilates Mat, Meditación y
              Esferodinamia…¡ya sé lo que estás pensando! ¿Cómo pasaste de la
              Hotelería al deporte? Qué cambio, ¿no?
            </p>
            <p className="main__text">
              Si vos sos como yo, con una mente inquieta, sociable y con mucha
              creatividad, me vas a entender.
            </p>
            <p className="main__text">
              Estudié en la Universidad Nacional de Quilmes hasta recibirme en
              2014, sólo para darme cuenta que la hotelería no era para mi.
            </p>
            <p className="main__text">
              ¿Qué hacer entonces con una carrera terminada y la vocación
              perdida por algún lado? En plena pandemia, con el encierro y el
              mundo al revés, empecé a entrenar desde casa y, automáticamente,
              me enamoré del deporte y de cómo me hacía sentir.
            </p>
            <p className="main__text">
              En ese momento lo entendí. Yo quería transmitir a otras personas
              cómo el movimiento me cambió el día a día, la rutina, el ánimo…la
              vida.
            </p>
            <p className="main__text">
              En 2021, hice el Instructorado de Stretching y en marzo de ese
              mismo año di mi primera clase online para no detenerme más…
            </p>
            <p className="main__text">
              Hoy, Yeah_stretching ofrece Pilates Mat, Stretching, Meditación,
              Esferodinamia y paquetes de bienestar para empresas. Con las ganas
              y la vista puestas en el futuro, próximamente se sumarán más
              actividades.
            </p>
          </div>
          <div className="about__redes__container">
            <div className="redes__container">
              <div className="redes__icon">
                <TbBolt className="icon" />
              </div>
              <span className="redes__text animate__animated animate__lightSpeedInRight animate__delay-1s">
                Inquieta, sociable y creativa
              </span>
            </div>
            <div className="redes__container">
              <div className="redes__icon">
                <FiStar className="icon" />
              </div>
              <span className="redes__text animate__animated animate__lightSpeedInRight animate__delay-0.5s">
                Emprendedora empedernida
              </span>
            </div>
            <div className="redes__container">
              <div className="redes__icon">
                <FiCoffee className="icon" />
              </div>
              <span className="redes__text animate__animated animate__lightSpeedInRight animate__delay-1s">
                Amante del mate y del café con leche
              </span>
            </div>
            <div className="redes__container">
              <div className="redes__icon">
                <TbBallVolleyball className="icon" />
              </div>
              <span className="redes__text animate__animated animate__lightSpeedInRight animate__delay-0.5s">
                Fan del Voley
              </span>
            </div>
          </div>
        </div>
        <div className="about__curriculum">
          <h2
            className="text__highlight"
            data-aos="fade-right"
            data-aos-offset="200"
          >
            Mis Capacitaciones
          </h2>
          <span className="ff-primary">
            ¡Descargá mi CV para conocerme más!
          </span>

          <Link
            data-aos="fade-up"
            data-aos-offset="200"
            to="https://drive.google.com/drive/folders/1cvGK_zS3_eiUeN12WX9r0cckFgfqwUAb?usp=share_link"
            target="_blank"
            rel="noopener noreferrer"
            title="Descargar CV en formato PDF"
          >
            <button className="btn-primary ff-primary">Descargar</button>
          </Link>
        </div>
        <div
          className="about__footer"
          data-aos="fade-right"
          data-aos-offset="200"
        >
          <h2 className="text__highlight--white">Movimiento es vida…</h2>
          <h2>y quiero acompañarte en ese proceso.</h2>
          <h2>¡Te espero!</h2>
        </div>
      </div>
    </>
  );
};
