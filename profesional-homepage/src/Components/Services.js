import React from 'react';

export const Services = () => {
  return (
    <div className='page'>
      <h1 className='heading'>Servicios</h1>

      <section className='services'>
        <article className='service'>
          <h2>Diseño Web</h2>
          <p>
            Realizo diseños web atractivos y funcionales, centrados en la experiencia del usuario.
            Me especializo en crear interfaces limpias y efectivas que se adaptan a las necesidades
            de cada proyecto. Mi enfoque está en el diseño minimalista.
          </p>
        </article>

        <article className='service'>
          <h2>Desarrollo Web</h2>
          <p>
            Desarrollo aplicaciones web completas utilizando tecnologías como React para el frontend
            y Node.js para el backend. Mis proyectos incluyen la creación de estructuras seguras y
            funcionales, desde la autenticación hasta el despliegue en la nube.
          </p>
        </article>

        <article className='service'>
          <h2>Desarrollo de aplicaciones Python</h2>
          <p>
            Tengo experiencia en desarrollo de aplicaciones con Python, abarcando desde la automatización
            hasta proyectos de inteligencia artificial. He trabajado en diversos proyectos en los que he
            aplicado conocimientos de machine learning y desarrollo de aplicaciones prácticas.
          </p>
        </article>

        <article className='service'>
          <h2>Desarrollo de aplicaciones móviles</h2>
          <p>
            Desarrollo aplicaciones móviles utilizando Swift para iOS, adaptando mis conocimientos de
            diseño y desarrollo web al entorno móvil. Actualmente, estoy trabajando en mejorar mis
            habilidades en Swift y SwiftUI.
          </p>
        </article>
      </section>
    </div>
  );
};