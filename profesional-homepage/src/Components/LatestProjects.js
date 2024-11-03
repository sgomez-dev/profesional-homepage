import React, { useEffect, useState } from "react";

export const LatestProjects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/users/Santi1503/repos?sort=updated&per_page=3",
          {
            headers: {
              Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
            },
          }
        );
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error("Error fetching GitHub projects:", error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div className="latest-projects">
      <div className="project-list">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <a
              href={project.html_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver en GitHub
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};
