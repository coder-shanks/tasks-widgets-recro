import { useState, useEffect } from 'react';
import './timer.styles.css';

const Timer = ({ timerInMinutes, stopTimer }) => {
  const [timer, setTimer] = useState(timerInMinutes * 60);

  // Convert the time into MM:SS format
  let minutes = Math.floor(timer / 60);
  let seconds = timer - minutes * 60;

  // Kick off the countdown timer every 1s, stops when reached 0 or component gets unmounted
  useEffect(() => {
    const countDown = setInterval(() => setTimer(timer - 1), 1000);

    if (timer === 0) {
      stopTimer();
      clearInterval(countDown);
    }

    return () => clearInterval(countDown);
  }, [timer, stopTimer]);

  return (
    <div>
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
  );
};

export default Timer;
