import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          console.log('SUCCESS!');
          alert("El mensaje se envió con éxito.");
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert("Hubo un error al enviar el mensaje, por favor intenta nuevamente.");
        }
      );

    e.target.reset();
  };

  return (
    <div className='page'>
      <h1 className='heading'>Contact</h1>

      <div className="card">
        <form ref={form} onSubmit={sendEmail} className='contact'>
          <input type='text' name="user_name" placeholder='Nombre' required />
          <input type='text' name="user_lastname" placeholder='Apellidos' required />
          <input type='email' name="user_email" placeholder='Email' required />
          <textarea name="message" placeholder='Motivo de contacto' required />
          <input type='submit' value="Enviar" />
        </form>
      </div>
    </div>
  );
};