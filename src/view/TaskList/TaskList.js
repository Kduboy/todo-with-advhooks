import React from 'react';
import ListItem from '../../components/justFunctional/ListItem/ListItem.js'

import './TaskList.scss'

/* const TaskList = ({ listItems }) => {
  const [tasks, dispatch] = useReducer()

  const handleSubmit = event => {
    dispatch({ type: 'ADD_TODO', task, id: t });
  };

  const handleChange = () => {
    dispatch({
      type: todo.complete ? 'UNDO_TODO' : 'DO_TODO',
      id: todo.id,
    });
  }; */

return (
  <div>
    {listItems.map((item, i) => {
      <ListItem key={i} listItem={item} />
    })
    }
  </div>
)

}

export default TaskList;
