import React from "react";

import "../styles/About.css";

const About = () => {
  return (
    <div className="format-text">
      <h1>Um pouco sobre mim:</h1>
      <div className="align-text">
        <p>
          Olá, me chamo Jhuan de Souza, tenho 24 anos, sou de Joinville-SC.
          Estou cursando Bacharel em Engenharia de Software pela
          UNIVILLE(Universidade da Região de Joinville). Tenho experiência de 1
          ano em Analista de T.I, cujo área essa que estou trabalhando
          atualmente, inspecionando servidores, manutenção em desktops e
          infraestrutura de rede.
        </p>
        <p>
          Dentre minhas atividades cotidianas, inclui-se também atuação na área
          de Técnico de Qualidade, onde coloco em prática a organização com
          mapeamento dinâmico de cabos e servidores, identificando o rack, cabos
          de rede no switch, análise de processos de trabalho, indicadores e
          planilhas excel.
        </p>
      </div>
    </div>
  );
};

export default About;
