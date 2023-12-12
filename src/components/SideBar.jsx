import React from 'react';

import PropTypes from 'prop-types';
import Button from './Button';

const SideBar = ({ projects, onStartAddProject }) => {
  return (
    <>
      <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
        <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">Your Project</h2>
        <di>
          <Button onClick={onStartAddProject}>+ Add Project</Button>
        </di>
        <ul className="mt-8">
          {projects.map((project) => {
            return (
              <li key={project.id}>
                <button className="w-full text-left px-2 py-1 rounded-sm my-1 text-stone-400 hover:text-stone-200 hover:bg-stone-800">
                  {project.title}
                </button>
              </li>
            );
          })}
        </ul>
      </aside>
    </>
  );
};

SideBar.propTypes = {
  projects: PropTypes.object.isRequired,
  onStartAddProject: PropTypes.func.isRequired
};

export default SideBar;
