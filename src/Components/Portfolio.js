import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export const Portfolio = () => {
  const [projects, setProjects] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 10; // Número de proyectos por página
  const [totalProjects, setTotalProjects] = useState(0); // Para almacenar el total de proyectos

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/users/Santi1503/repos?page=${currentPage}&per_page=${projectsPerPage}`,
          {
            headers: {
              Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
            },
          }
        );
        const data = await response.json();
        setProjects(data);

        // Establecer el total de proyectos
        setTotalProjects(parseInt(response.headers.get("X-Total-Count")) || projectsPerPage * 2); // En caso de que no esté el encabezado
      } catch (error) {
        console.error("Error fetching GitHub projects:", error);
      }
    };

    fetchProjects();
  }, [currentPage]);

  // Calcular el número total de páginas
  const totalPages = Math.ceil(totalProjects / projectsPerPage);

  // Manejadores de cambio de página
  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  return (
    <div className='page'>
      <h1 className='heading'>Portfolio</h1>
      <hr />
      <div className='portfolio-container'>
        {projects.map((project) => (
          <article key={project.id} className='work-card'>
            <span className='work-category'>{project.language || 'Sin categoría'}</span> 
            <h2 className='work-title'>
              <Link to={`/proyecto/${project.name}`}>{project.name}</Link>
            </h2>
            <h3 className='work-tech'>{project.language}</h3>
          </article>
        ))}
      </div>

      {/* Barra de paginación centrada */}
      <div className='pagination' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px' }}>
        <button onClick={prevPage} disabled={currentPage === 1}>Anterior</button>
        <span style={{ margin: '0 10px' }}>Página {currentPage} de {totalPages}</span>
        <button onClick={nextPage} disabled={currentPage === totalPages}>Siguiente</button>
      </div>
    </div>
  );
};