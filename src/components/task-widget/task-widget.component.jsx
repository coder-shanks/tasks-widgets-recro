import { useEffect, useState } from 'react';
import './task-widget.styles.css';

const TaskWidget = ({ closeWidget, timerInMinutes, addNewTask }) => {
  const [timer, setTimer] = useState(timerInMinutes * 60);
  const [title, setTitle] = useState('');
  const [timerFinished, setTimerFinished] = useState(false);

  let minutes = Math.floor(timer / 60);
  let seconds = timer - minutes * 60;

  useEffect(() => {
    const countDown = setInterval(() => setTimer(timer - 1), 1000);

    if (timer === 0) {
      setTimerFinished(true);
      clearInterval(countDown);
    }

    return () => clearInterval(countDown);
  }, [timer]);

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
            <progress
              className="task-progress"
              value={timer}
              max={timerInMinutes * 60}
            ></progress>
            <p>
              Time remaining:{' '}
              <span className="task-timer">{`${minutes}:${
                seconds < 10 ? `0${seconds}` : seconds
              }`}</span>
            </p>
          </div>
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
