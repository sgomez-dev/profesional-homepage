import React from 'react'
import { Link } from 'react-router-dom'
import { LatestProjects } from './LatestProjects'

export const Home = () => {
  return (
    <div className='home'>
      <h1>
      Bienvenido, mi nombre es <strong>Santiago Gómez de la Torre Romero</strong>, 
      soy un entusiasta en el <strong>desarrollo web</strong>. 
      Aunque estoy en los primeros pasos de mi carrera, 
      cada proyecto es una oportunidad de aprendizaje y perfeccionamiento.       
      </h1>

      <h2>
        Estoy a toda dispisición de colaborar en la creación de alguna aplicación web
        o sitio web <Link to="/contact">Contacta conmigo</Link>
      </h2>

      <section className='lastProjects'>
        <h2 className='heading'>Mis últimos proyectos</h2>
        <p>Estos son algunos de los últimos proyectos que he desarrollado</p>

        <div className='projects'>
          <LatestProjects />
        </div>
      </section>

    </div>
  )
}
