

import { Link } from "react-router-dom";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { GrLinkedinOption, GrInstagram } from "react-icons/gr";
import { ImWhatsapp } from "react-icons/im";
import Swal from 'sweetalert2'

import { Button } from "../Button";


export const ContactForm = () => {

  const form = useRef();

  const sendEmail = ( e ) => {
    e.preventDefault();

    emailjs.sendForm( 'service_35jkkxn', 'template_9zqwuib', form.current, 'IpjOqTCRVvRhhiyiJ' )
      .then( ( result ) => {

        Swal.fire( {
          position: 'center',
          icon: 'success',
          title: 'Mensaje enviado',
          background: '#D881AB',
          color: '#ffff',
          showConfirmButton: false,
          timer: 1500
        } )

        console.log( result.text );
        e.target.reset();

      }, ( error ) => {

        Swal.fire( {
          position: 'center',
          icon: 'error',
          title: 'Error de envio',
          showConfirmButton: false,
          timer: 1500
        } )

        console.log( error.text );
      } );
  };


  return (
    <>
      <div className="main__form">
        <div className="hero__form">
          <img className="hero__img" src="https://res.cloudinary.com/ferjen/image/upload/v1683587895/yeah_stretching/icons/form_nuf5gx.png" alt="Banner con ondas rosado" />

          <div className="hero__text">
            <div className="text_title text__highlight">
              <h2>
                ¡Entrenemos juntos! {' :)'}
              </h2>
            </div>
            <span>
              Dejame tus datos en este formulario o enviame tu consulta a
              yamilaleilasayag@gmail.com.
            </span>
          </div>
        </div>

        <div className="form__redes">
          <form
            className="contact__form"
            ref={form}
            onSubmit={sendEmail}
          >
            <div className="form__section">
              <label>Nombre y Apellido / Empresa</label>
              <input type="text" name="user_name" />
            </div>
            <div className="form__section">
              <label>Correo electrónico</label>
              <input type="email" name="user_email" />
            </div>
            <div className="form__section">
              <label>Detalle de tu consulta</label>
              <textarea name="message"></textarea>
            </div>
            <Button type="submit" value="Send">Enviar Consulta</Button>
          </form>

          <div className="form__redes__container ff-primary">
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
