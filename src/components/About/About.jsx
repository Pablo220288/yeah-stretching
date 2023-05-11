import { TbBolt } from "react-icons/tb";
import { FiCoffee, FiThumbsUp, FiStar } from "react-icons/fi";
import { Button } from "../Button";

export const About = () => {
  return (
    <>
      <div className="about__container">
        <div className="about__header">
          <div className="header__text">
            <h3>Hola!</h3>
            <h3>Soy Yami Sayag</h3>
            <div className="text_secondary__inner">
              <h3>
                Instructora de Stretching,
                <span></span>
              </h3>
              <h3>
                Pilates Mat,Meditación y Esferodinamia
                <span></span>
              </h3>
            </div>
          </div>
          <div className="header__img"></div>
        </div>
        <div className="text_secondary">
          <h3>
            Instructora de Stretching,
            <span></span>
          </h3>
          <h3>
            Pilates Mat,Meditación y Esferodinamia
            <span></span>
          </h3>
        </div>
        <div className="about__main__container">
          <div className="main__container">
            <h3 className="main__title">
              Mi Hsitoria<span></span>
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
                <FiThumbsUp className="icon" />
              </div>
              <sapn className="redes__text">
                Canceriana con ascendente en Leo
              </sapn>
            </div>
            <div className="redes__container">
              <div className="redes__icon">
                <TbBolt className="icon" />
              </div>
              <sapn className="redes__text">Inquieta, sociable y creativa</sapn>
            </div>
            <div className="redes__container">
              <div className="redes__icon">
                <FiStar className="icon" />
              </div>
              <sapn className="redes__text">Emprendedora empedernida</sapn>
            </div>
            <div className="redes__container">
              <div className="redes__icon">
                <FiCoffee className="icon" />
              </div>
              <sapn className="redes__text">
                Amante del mate y del café con leche
              </sapn>
            </div>
          </div>
        </div>
        <div className="about__curriculum">
          <h2>
            Mis Capacidades<span></span>
          </h2>
          <span>¡Descargá mi CV para conocerme más!</span>
          <Button>Descargar</Button>
        </div>
        <div className="about__footer">
          <h2>
            Movimiento es vida…<span></span>
          </h2>
          <span>y quiero acompañarte en ese proceso.</span>
          <span>¡Te espero!</span>
        </div>
      </div>
    </>
  );
};
