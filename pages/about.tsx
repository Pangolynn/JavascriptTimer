import { useEffect, useState } from "react";
import Button from "../components/UI/Button";

export default function About() {
  const [timerRunning, setTimerRunning] = useState<boolean>(false);
  const [seconds, setSeconds] = useState<number>(0);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    console.log("use effect ran");

    if (timerRunning) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds + 1);
      }, 1000);
    } else if (!timerRunning && seconds !== 0) {
      clearInterval(interval!);
    }

    return () => clearInterval(interval!);
  }, [timerRunning, seconds]);

  const clickHandler = (event) => {
    console.log(event);

    const date = new Date(Date.now() + 15000).getTime();
    console.log(new Date().getTime(), date);

    setTimerRunning((prevState) => {
      // timer was already running, we stopped the timer
      if (prevState) {
        setTimerRunning(false);
      } else {
        // start the timer
        setSeconds(0);
        setTimerRunning(true);
      }
      return !prevState;
    });
  };

  return (
    <div>
      <p>About</p>
      <Button
        className="bg-amber-800 hover:bg-amber-900 text-white font-bold py-2 px-4 border-b-4 border-amber-700 hover:border-amber-800 rounded"
        onClick={clickHandler}
      >
        {timerRunning && "Stop Timer"}
        {seconds}
        {!timerRunning && "Start Timer"}
      </Button>
      <button className="rounded-full">Hello</button>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </div>
  );
}
