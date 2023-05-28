

import { useRef, useState } from 'react';
import { Link } from "react-router-dom";
import { GrLinkedinOption, GrInstagram } from "react-icons/gr";
import { ImWhatsapp } from 'react-icons/im';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'
import AOS from 'aos';


const EMAILJS_SERVICE_ID = import.meta.env.VITE_APP_EMAIL_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_APP_EMAIL_TEMPLATE_ID;
const EMAILJS_USER_ID = import.meta.env.VITE_APP_EMAIL_USER_ID;


const validateName = ( name ) => {
  if ( !name || !/^[a-z ,.'-]+$/i.test( name ) ) {
    Swal.fire( {
      position: 'center',
      icon: 'error',
      title: 'Error',
      text: 'Por favor, ingrese un nombre correcto .',
      background: '#ffff',
      color: '#D881AB',
      showConfirmButton: false,
      timer: 2500
    } );
    return false;
  }
  return true;
};

const validateEmail = ( email ) => {
  if ( !email || !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test( email ) ) {
    Swal.fire( {
      position: 'center',
      icon: 'error',
      title: 'Error',
      text: 'Por favor, ingrese un correo válido.',
      background: '#ffff',
      color: '#D881AB',
      showConfirmButton: false,
      timer: 2500
    } );
    return false;
  }
  return true;
};

const validateMessage = ( message ) => {
  if ( !message ) {
    Swal.fire( {
      position: 'center',
      icon: 'error',
      title: 'Error',
      text: 'Por favor, ingrese un mensaje.',
      background: '#ffff',
      color: '#D881AB',
      showConfirmButton: false,
      timer: 2500
    } );
    return false;
  }
  return true;
};

export const ContactForm = () => {
  AOS.init();

  const form = useRef();
  const [ isMessageSent, setMessageSent ] = useState( false );
  const [ isSubmitting, setIsSubmitting ] = useState( false );

  const sendEmail = ( e ) => {
    e.preventDefault();

    const name = form.current.user_name.value;
    const email = form.current.user_email.value;
    const message = form.current.message.value;

    if ( !validateName( name ) || !validateEmail( email ) || !validateMessage( message ) ) {
      return;
    }

    setIsSubmitting( true );

    emailjs.sendForm( EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, form.current, EMAILJS_USER_ID )

      .then( ( result ) => {
        Swal.fire( {
          position: 'center',
          icon: 'success',
          title: 'Mensaje enviado',
          background: '#ffff',
          color: '#D881AB',
          showConfirmButton: false,
          timer: 2500
        } );

        form.current.reset();
        setMessageSent( true );
        setIsSubmitting( false );

      }, ( error ) => {
        Swal.fire( {
          position: 'center',
          icon: 'error',
          title: 'Error de envio',
          showConfirmButton: false,
          timer: 2500
        } );

        console.log( error.text );
      } );
  };

  return (
    <>
      <div className="main__form" id='contactSection'>
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
            <div className="form__section animate__animated animate__lightSpeedInRight animate__delay-0.5s">
              <label>Nombre y Apellido / Empresa</label>
              <input type="text" name="user_name" />
            </div>
            <div className="form__section animate__animated animate__lightSpeedInLeft animate__delay-0.5s">
              <label>Correo electrónico</label>
              <input type="email" name="user_email" />
            </div>
            <div className="form__section animate__animated animate__lightSpeedInRight animate__delay-0.5s">
              <label>Detalle de tu consulta</label>
              <textarea name="message"></textarea>
            </div>

            <button
              className="btn-primary"
              type="submit"
              value="Send"
              disabled={isMessageSent || isSubmitting}
            >
              {isMessageSent ? 'Enviada' : 'Enviar'}
            </button>

          </form>

          <div className="form__redes__container ff-primary">
            <span>¿Ya me seguís? Conocé mis redes</span>
            <div className="icon__redes">

              <a
                className="redes__icon"
                href="https://www.linkedin.com/in/yamilasayag/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GrLinkedinOption className="icon" />
              </a>

              <a
                className="redes__icon"
                href="https://www.instagram.com/yeah_stretching/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GrInstagram className="icon" />
              </a>

              <a
                className="redes__icon"
                href="https://api.whatsapp.com/send?phone=5491132197694"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ImWhatsapp className="icon" />
              </a>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

