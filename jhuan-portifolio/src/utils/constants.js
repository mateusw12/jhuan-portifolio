import React from 'react';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

export const projects = [
    {
        projectTitle: "Padaria",
        projectBody: "O sistema é desenvolvido no front-end em Angular e back-end em Java Spring Boot. é projetado para fornecer uma simulação de sistema comercial de uma padaria." +
            " Ele permite que os usuários possam realizar operações CRUD (criar, ler, atualizar e excluir)" +
            " em dados de padaria, como produtos, funcionários e estoque.",
        repositoryLink: "https://github.com/mateusw12/Padaria"
    }
];

export const socialMedias = [
    { link: "https://instagram.com/jhuan_5ouza?igshid=ZDdkNTZiNTM=", title: "Instagram", icon: <FaInstagram size={30} color="#C13584" /> },
    { link: "https://www.facebook.com/jhuan.souza17?mibextid=ZbWKwL", title: "Facebook", icon: <FaFacebook size={30} color="#1877F2" /> },
    { link: "https://www.linkedin.com/in/mateus-walz-b40866137/", title: "Linkedin", icon: <FaLinkedin size={30} color="#0077B5" /> },
    { link: "https://github.com/Jhuan12016", title: "GitHub", icon: <FaGithub size={30} color="#211F1F" /> },
];

export const pages = [
    { link: "/about", title: "Sobre" },
    { link: "/skills", title: "Habilidades" },
    { link: "/project", title: "Projetos" },
];

export const softSkills = [
    { skill: "Proativo" },
    { skill: "Organizado" },
    { skill: "Trabalho em equipe" },
    { skill: "Ágil" },
    { skill: "Criativo" },
    { skill: "Flexível" },
];

export const hardSkills = [
    { skill: "Cursando Engenharia de Software" },
    { skill: "Analista de T.I" },
    { skill: "Técnico da qualidade" },
    { skill: "JavaScript, TypeScript, HTML, CSS" },
    { skill: "Node Js" },
    { skill: "Angular" },
    { skill: "java Spring Boot" },
];