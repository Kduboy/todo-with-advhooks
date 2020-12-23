import React from 'react';

import './AddTask.scss'

const AddTask = () => {
  return (
    <section className='addTaskLine'>
      <h3>Nueva Tarea</h3>
      <input type='text' className='taskInput'></input>
      <button className='addBtn'>Agregar</button>
    </section>
  )

};

export default AddTask;