import Task from '../task/task.component';
import './tasks.styles.css';

const Tasks = ({ tasks }) => {
  return (
    <div>
      <h3>List of Tasks</h3>
      <div className="tasks-container">
        {tasks.length !== 0 ? (
          tasks.map((task, idx) => <Task key={idx} task={task} />)
        ) : (
          <div>No tasks created...</div>
        )}
      </div>
    </div>
  );
};

export default Tasks;
