import React from 'react';

import PropTypes from 'prop-types';
import NewTask from './NewTask';

const Task = ({ tasks, onAddTask, onDeleteTask }) => {
  let content = <p className="text-stone-800 my-4">This project does not have any tasks yet.</p>;

  if (tasks != undefined && tasks.length > 0)
    content = (
      <ul className="p-4 mt-8 rounded-sm bg-stone-100">
        {tasks.map((task) => {
          return (
            <li key={task.id} className="flex justify-between my-4">
              <span>{task.text}</span>
              <button
                className="text-stone-700 hover:text-red-500"
                onClick={() => onDeleteTask(task.id)}>
                Clear
              </button>
            </li>
          );
        })}
      </ul>
    );

  return (
    <>
      <section>
        <h2 className="text-2xl font-bold text-stone-700 mb-4">Task</h2>
        <NewTask onAdd={onAddTask} />
        {content}
      </section>
    </>
  );
};

Task.propTypes = {
  tasks: PropTypes.array.isRequired,
  onAddTask: PropTypes.func.isRequired,
  onDeleteTask: PropTypes.func.isRequired
};

export default Task;
