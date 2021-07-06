import './task.styles.css';

const Task = ({ task }) => {
  const { title, timerFinished } = task;
  return (
    <div className={`task ${timerFinished ? `bg-red` : `bg-green`}`}>
      <h4>{title}</h4>
    </div>
  );
};

export default Task;
