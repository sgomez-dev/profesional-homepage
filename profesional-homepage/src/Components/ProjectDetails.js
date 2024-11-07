import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export const ProjectDetails = () => {
  const { projectName } = useParams();
  const [readme, setReadme] = useState('');
  const [projectUrl, setProjectUrl] = useState(''); // Estado para almacenar el enlace del proyecto
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProjectData = async () => {
      try {
        // Obtener el README
        const readmeResponse = await fetch(
          `https://api.github.com/repos/Santi1503/${projectName}/readme`,
          {
            headers: {
              Accept: "application/vnd.github.v3.raw"
            },
          }
        );

        if (!readmeResponse.ok) {
          throw new Error(`Failed to fetch README: ${readmeResponse.status} ${readmeResponse.statusText}`);
        }
        
        const readmeData = await readmeResponse.text();
        setReadme(readmeData);

        // Obtener los datos del repositorio para obtener el enlace HTML
        const repoResponse = await fetch(
          `https://api.github.com/repos/Santi1503/${projectName}`,
          {
            headers: {
              Accept: "application/vnd.github.v3+json"
            },
          }
        );

        if (repoResponse.ok) {
          const repoData = await repoResponse.json();
          setProjectUrl(repoData.homepage);
        } else {
          console.error("Error fetching project URL:", repoResponse.status, repoResponse.statusText);
        }

      } catch (error) {
        console.error("Error fetching project data:", error);
        setError(error.message);
      }
    };

    fetchProjectData();
  }, [projectName]);

  return (
    <div className="project-details">
      {error ? (
        <div className="error-message">Error: {error}</div>
      ) : (
        <>
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{readme}</ReactMarkdown>
        </>
      )}
      {projectUrl && (
          <button onClick={() => window.open(projectUrl, "_blank")}>
            Ver proyecto
          </button>
        )}
      <div>
        <button onClick={() => navigate(-1)}>Regresar al Portafolio</button>
      </div>
    </div>
  );
};