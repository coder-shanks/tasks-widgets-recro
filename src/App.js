import { useState } from 'react';

import Tasks from './components/tasks/tasks.component.jsx';
import TaskWidget from './components/task-widget/task-widget.component.jsx';
import './App.css';

function App() {
  const [showWidget, setShowWidget] = useState(false); // Widget toggler to show/hide the create task widget
  const [tasks, setTasks] = useState([]); // To maintain the list of tasks

  // Adds a new task to the existing list
  const addNewTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  return (
    <div className="App">
      <Tasks tasks={tasks} />

      <button className="btn btn-create" onClick={() => setShowWidget(true)}>
        Create a task
      </button>

      {showWidget ? (
        <TaskWidget
          closeWidget={() => setShowWidget(false)}
          addNewTask={addNewTask}
        />
      ) : null}
    </div>
  );
}

export default App;
