import React, { useState } from "react";

import "./App.css";
import backgroundImage from "./assets/background.jpeg";

import Header from "./components/Header";

function App() {
  const [projects, setProjects] = useState([
    "Desenvolvimento de app",
    "Front-end web",
  ]);

  function handleAddProject() {
    // projects.push(`Novo Projeto ${Date.now()}`);
    // console.log(projects);

    setProjects([...projects, `Novo Projeto ${Date.now()}`]);
  }
  return (
    <>
      <Header title="Projects" />
      <img width={150} src={backgroundImage} alt="" />

      <ul>
        {projects.map((project) => (
          <li key={project}>{project}</li>
        ))}
      </ul>

      <button type="button" onClick={handleAddProject}>
        Adicionar Projeto
      </button>
    </>
  );
}

export default App;
