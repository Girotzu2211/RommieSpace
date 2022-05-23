import React, { useState, useEffect } from "react";

export default function Pomodoro() {
  const [minutes, setMinutes] = useState(1);
  const [seconds, setSeconds] = useState(0);
  const [displayMessage, setDisplayMessage] = useState(false);

  useEffect(() => {
    let interval = setInterval(() => {
      clearInterval(interval);

      if (seconds === 0) {
        if (minutes !== 0) {
          setSeconds(59);
          setMinutes(minutes - 1);
        } else {
            alert("Enviando a otra ruta")
        // Poner aqui la ruta del video
        }
      } else {
        setSeconds(seconds - 1);
      }
    }, 1000);
  }, [seconds]);

  const timerMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const timerSeconds = seconds < 10 ? `0${seconds}` : seconds;

  return (
    <div className="pomodoro">
        <Menu/>
      <div className="message">
        {displayMessage && <div>Descanso</div>}
      </div>
      <div className="timer">
        {timerMinutes}:{timerSeconds}
      </div>
    </div>
  );
}
