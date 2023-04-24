import { useEffect, useState } from "react";
import Button from "./UI/Button";

export default function Timer() {
  const [timerRunning, setTimerRunning] = useState(false);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    let interval = null;
    console.log("use effect ran");

    if (timerRunning) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds + 1);
      }, 1000);
    } else if (!timerRunning && seconds !== 0) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [timerRunning, seconds]);

  const clickHandler = (event) => {
    console.log(event);

    const date = new Date(Date.now() + 15000).getTime();
    console.log(new Date().getTime(), date);

    // check if we are already running
    // Get our current time
    // Add the amount of the timer to our current time
    // set an interval that updates the time

    // display the new time at each interval tick
    setTimerRunning((prevState) => {
      // timer was already running, we stopped the timer
      if (prevState) {
        // clearInterval(timerInterval);
        setTimerRunning(false);
      } else {
        setSeconds(0);
        setTimerRunning(true);
        // we started the timer now
        // const timerInterval = setInterval(() => {
        //   setTimerRunning(true);
        //   console.log("running");
        // }, 1000);
      }
      return !prevState;
    });
  };

  return (
    <Button
      className="bg-amber-800 hover:bg-amber-900 text-white font-bold py-2 px-4 border-b-4 border-amber-700 hover:border-amber-800 rounded"
      onClick={clickHandler}
    >
      {timerRunning && "Stop Timer"}
      {seconds}
      {!timerRunning && "Start Timer"}
    </Button>
  );
}
