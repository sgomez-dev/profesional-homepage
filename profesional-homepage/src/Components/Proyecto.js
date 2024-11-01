import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { works } from '../data/works';

export const Proyecto = () => {
    const [proyecto, setProyecto] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const selectedProject = works.find(work => work.id === id);
        setProyecto(selectedProject || {});
    }, [id]);

    if (!proyecto) return <p>Proyecto no encontrado</p>;

    return (
        <div className='page'>
          <h1 className='project-heading'>{proyecto.nombre}</h1>
          <span className='project-category'>{proyecto.categorias}</span>
          <h3 className='project-tech'>{proyecto.tecnologias}</h3>
          <p className='project-description'>{proyecto.descripcion}</p>
          <a href={proyecto.url} target='_blank' rel='noopener noreferrer' className='project-link'>
              Ver Proyecto
          </a>
          <div>
            <button onClick={() => navigate(-1)}>Regresar al Portafolio</button>
          </div>
        </div>  
    );
};