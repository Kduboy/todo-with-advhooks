import React from 'react';

const TasksContext = React.createContext([
  {
    id: 1,
    task: 'tarea pendiente 1',
    isCompleted: false,
  },
  {
    id: 2,
    task: 'tarea 2 completada',
    isCompleted: true,
  }
]);

export default TasksContext