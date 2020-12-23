import logo from './logo.svg';

import NavBar from './view/NavBar/NavBar.js';
import AddTask from './view/AddTask/AddTask.js';
import TasksContext from './contexts/TasksContext/TasksContext.js';
import TaskMonitor from './view/TaskMonitor/TaskMonitor.js'

import './App.scss';


function App() {
  return (
    <TasksContext.Provider>
      <div className="App">
        <NavBar />
        <AddTask />
        <TasksMonitor />
      </div>
    </TasksContext.Provider>
  );
}

export default App;
