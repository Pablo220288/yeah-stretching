import { Link } from "react-router-dom";
import formBackground from "../../assets/form.png";
import { Button } from "../Button";
import { GrLinkedinOption, GrInstagram } from "react-icons/gr";
import { ImWhatsapp } from "react-icons/im";
export const ContactForm = () => {
  return (
    <>
      <div className="main__form">
        <div className="hero__form">
          <img className="hero__img" src={formBackground} alt="" />
          <div className="hero__text">
            <div className="text_title">
              <h2>
                ¡Entrenemos<span></span>
              </h2>
              <h2>
                juntos! :)<span></span>
              </h2>
            </div>
            <span>
              Dejame tus datos en este formulario o enviame tu consulta a
              yamilaleilasayag@gmail.com.
            </span>
          </div>
        </div>
        <div className="form__redes">
          <form className="contact__form">
            <div className="form__section">
              <label>Nombre y Apellido / Empresa</label>
              <input type="text" name="name" />
            </div>
            <div className="form__section">
              <label>Correo electrónico</label>
              <input type="text" name="email" />
            </div>
            <div className="form__section">
              <label>Asunto</label>
              <input type="text" name="affair" />
            </div>
            <div className="form__section">
              <label>Detalle de tu consulta</label>
              <textarea name="message"></textarea>
            </div>
            <Button>Enviar Consulta</Button>
          </form>
          <div className="form__redes__container">
            <span>¿Ya me seguís? Conocé mis redes</span>
            <div className="icon__redes">
              <Link
                className="redes__icon"
                to="https://www.linkedin.com/in/yamilasayag/"
                target="_blank"
              >
                <GrLinkedinOption className="icon" />
              </Link>
              <Link
                className="redes__icon"
                to="https://www.instagram.com/yeah_stretching/"
                target="_blank"
              >
                <GrInstagram className="icon" />
              </Link>
              <Link
                className="redes__icon"
                to="https://api.whatsapp.com/qr/WCIAORYRAY2ZN1?autoload=1&app_absent=0"
                target="_blank"
              >
                <ImWhatsapp className="icon" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
