import React, { useState } from 'react';

import SideBar from './components/SideBar';
import NoProjectSelected from './components/NoProjectSelected';
import NewProject from './components/NewProject';
import SelectedProject from './components/SelectedProject';

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: []
  });

  const handleSelectProject = (id) => {
    setProjectsState((previous) => {
      return {
        ...previous,
        selectedProjectId: id
      };
    });
  };

  const handleStartAddProject = () => {
    setProjectsState((previous) => {
      return {
        ...previous,
        selectedProjectId: null
      };
    });
  };

  const handleAddProject = (addedProject) => {
    const projectId = Math.random();
    const newProject = {
      ...addedProject,
      id: projectId
    };

    setProjectsState((previous) => {
      return {
        ...previous,
        selectedProjectId: undefined,
        projects: [...previous.projects, newProject]
      };
    });
  };

  const handleCancelAddProject = () => {
    setProjectsState((previous) => {
      return {
        ...previous,
        selectedProjectId: undefined
      };
    });
  };

  const handleDeleteProject = () => {
    setProjectsState((previous) => {
      let remainingProjects = previous.projects.filter((p) => p.id !== previous.selectedProjectId);
      return {
        ...previous,
        selectedProjectId: undefined,
        projects: [...remainingProjects]
      };
    });
  };

  const selectedProject = projectsState.projects.find(
    (p) => p.id == projectsState.selectedProjectId
  );

  let content = <SelectedProject project={selectedProject} onDelete={handleDeleteProject} />;

  if (projectsState.selectedProjectId === null)
    content = <NewProject onAdd={handleAddProject} onClose={handleCancelAddProject} />;
  else if (projectsState.selectedProjectId === undefined)
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;

  return (
    <main className="h-screen my-8 flex gap-8">
      <SideBar
        projects={projectsState.projects}
        onStartAddProject={handleStartAddProject}
        onSelectProject={handleSelectProject}
        selectedProjectId={projectsState.selectedProjectId}
      />
      {content}
    </main>
  );
}

export default App;
