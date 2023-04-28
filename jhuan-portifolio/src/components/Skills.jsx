import React from "react";

import "../styles/Skills.css";

const Skills = () => {
  return (
    <div>
      <div className="skills-container">
        <div className="skills-title">
          <h1>Soft Skills</h1>
        </div>
        <div>
          <ul>
            <li className="pointer-item"> Proativo</li>
            <li className="pointer-item">Organizado</li>
            <li className="pointer-item">Trabalho em equipe</li>
            <li className="pointer-item">Ágil</li>
            <li className="pointer-item">Criativo</li>
            <li className="pointer-item">Flexível</li>
          </ul>
        </div>
      </div>
      <hr />
      <div className="skills-container">
        <div className="skills-title">
          <h1>Hard Skills</h1>
        </div>
        <div>
          <ul>
            <li className="pointer-item">Cursando Engenharia de Software</li>
            <li className="pointer-item">Analista de T.I</li>
            <li className="pointer-item">Trabalho em equipe</li>
            <li className="pointer-item">Técnico da qualidade</li>
            <li className="pointer-item">JavaScript, TypeScript, HTML, CSS</li>
            <li className="pointer-item">Node Js</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
