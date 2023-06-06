import { useEffect, useState } from "react";
import React from "react";
import "../styles/clock.css";

function Clock() {
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);

  let update  = () => {
    const updateTime = () => {
      let currentTime = new Date();
      let seconds = String(currentTime.getSeconds());
      seconds = seconds.length == 1 ? "0" + seconds : seconds;
      let minutes = String(currentTime.getMinutes());
      minutes = minutes.length == 1 ? "0" + minutes : minutes;
      let hours = String(currentTime.getHours());
      hours = hours.length == 1 ? "0" + hours : hours;
      setSecond(seconds);
      setMinute(minutes);
      setHour(hours);
    };
    const intervalId = setInterval(updateTime, 1000);
    return () => clearInterval(intervalId);
  }

  useEffect(()=>{
    let id = setInterval(update)
    return ()=>clearInterval(id);
  }, []);


  return (
    <React.Fragment>
      <div className="clock">
        {hour}:{minute}:{second}
      </div>
    </React.Fragment>
  );
}

export default Clock;