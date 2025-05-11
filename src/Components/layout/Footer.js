import React from "react";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-icons">
        Santiago Gómez de la Torre &copy; Developer - 2024
        <a
          href="https://www.instagram.com/sgomez.dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={require("../../Images/instagram.png")} alt="Intagram" />
        </a>
        <a
          href="https://www.linkedin.com/in/santiago-gomez-de-la-torre-3a7b62249/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={require("../../Images/linkedin.png")} alt="Linkedin" />
        </a>
        <a
          href="https://github.com/Santi1503"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={require("../../Images/github.png")} alt="Github" />
        </a>
      </div>
    </footer>
  );
};
