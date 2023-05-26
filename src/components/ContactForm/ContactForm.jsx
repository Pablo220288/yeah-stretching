

import { useRef, useState } from 'react';
import { Link } from "react-router-dom";
import emailjs from '@emailjs/browser';

import AOS from "aos";

import { GrLinkedinOption, GrInstagram } from "react-icons/gr";
import { ImWhatsapp } from "react-icons/im";

import Swal from 'sweetalert2'

import { Button } from '../Button/Button';


export const ContactForm = () => {

  AOS.init();

  const form = useRef();
  const [ isMessageSent, setMessageSent ] = useState( false );
  const [ isSubmitting, setIsSubmitting ] = useState( false );

  const buttonClassName = `btn-primary ${isMessageSent || isSubmitting ? 'disabled' : ''}`;

  const sendEmail = ( e ) => {
    e.preventDefault();

    const name = form.current.user_name.value;
    const email = form.current.user_email.value;
    const message = form.current.message.value;

    // Name validation
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
      return;
    };

    // Email validation
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
      return;
    };

    // Message validation
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
      return;
    };

    setIsSubmitting( true );

    emailjs.sendForm( 'service_35jkkxn', 'template_9zqwuib', form.current, 'IpjOqTCRVvRhhiyiJ' )
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

        // Reset form and re-enable submit button after 5 minutes
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
        } )

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
            <Button
              className="btn-primary"
              type="submit"
              value="Send"
              disabled={isMessageSent || isSubmitting}
            >
              {isMessageSent ? 'Enviada' : 'Enviar'}
            </Button>
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
                to="https://api.whatsapp.com/send?phone=5491132197694"
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
