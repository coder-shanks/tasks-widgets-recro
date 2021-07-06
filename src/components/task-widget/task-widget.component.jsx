import { useState } from 'react';

import Timer from '../timer/timer.component';
import './task-widget.styles.css';

const TaskWidget = ({ closeWidget, addNewTask }) => {
  const [title, setTitle] = useState('');
  const [timerFinished, setTimerFinished] = useState(false); // Helps in changing bg-color of task based on timer state

  const handleClick = () => {
    if (title.length >= 3) {
      addNewTask({ title, timerFinished });
      closeWidget();
    } else {
      alert('Please enter atleast 3 characters for task title');
    }
  };

  return (
    <div className="task-widget">
      <div className="task-widget-main">
        <div>
          <h3>Create a Task</h3>
          <div>
            <input
              type="text"
              className="task-title"
              placeholder="enter task title"
              onChange={(evt) => setTitle(evt.target.value)}
            />
          </div>
          <Timer timerInMinutes={2} stopTimer={() => setTimerFinished(true)} />
        </div>
        <div>
          <button className="btn btn-create" onClick={handleClick}>
            Create
          </button>
          <button className="btn btn-close" onClick={closeWidget}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskWidget;
