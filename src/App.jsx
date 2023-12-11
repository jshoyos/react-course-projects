import React, { useState } from 'react';

import SideBar from './components/SideBar';
import NoProjectSelected from './components/NoProjectSelected';
import NewProject from './components/NewProject';

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: []
  });

  const handleStartAddProject = () => {
    setProjectsState((previous) => {
      return {
        ...previous,
        selectedProjectId: null
      };
    });
  };

  const handleAddProject = (addedProject) => {
    const newProject = {
      ...addedProject,
      id: Math.random()
    };

    setProjectsState((previous) => {
      return {
        ...previous,
        projects: [...previous.projects, newProject]
      };
    });
  };

  let content;

  if (projectsState.selectedProjectId === null) content = <NewProject onAdd={handleAddProject} />;
  else if (projectsState.selectedProjectId === undefined)
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;

  return (
    <main className="h-screen my-8 flex gap-8">
      <SideBar projects={projectsState.projects} onStartAddProject={handleStartAddProject} />
      {content}
    </main>
  );
}

export default App;
