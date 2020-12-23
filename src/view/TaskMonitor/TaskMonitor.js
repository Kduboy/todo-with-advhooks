import React, { Fragment, useState, useContext, useReducer } from 'react';

import './TaskMonitor.scss';
import TasksContext from '../../contexts/TasksContext/TasksContext.js'
import TaskList from '../TaskList/TaskList.js'

const TaskMonitor = () => {
  const [pendingTasks, setPendingTasks] = useState([]);
  const [doneTasks, setDoneTasks] = useState([]);
  const [allTasks, setAllTasks] = useContext(TasksContext)

  const getPendingTasks = () => {
    return (allTasks.filter((task) => { task.isComplete === false }))
  }

  const getDoneTasks = () => {
    allTasks.filter((task) => { task.isComplete === true })
  }

  const handleSubmit = event => {
    dispatch({ type: 'ADD_TODO', task, id: uuid() });
  };

  const handleChange = () => {
    dispatch({
      type: todo.complete ? 'UNDO_TODO' : 'DO_TODO',
      id: todo.id,
    });
  };

  //const setInitialTasks = ()
  return (
    <>
      <div className='pendingList'>
        <TaskList listItems={getPendingTasks} />
      </div>
      <div className='doneList'>
        <TaskList listItems={getDoneTasks} />
      </div>
    </>
  )
}

export default TaskMonitor;