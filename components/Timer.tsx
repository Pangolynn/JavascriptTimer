import { useEffect, useState } from "react";
import Button from "../components/UI/Button";

export default function Timer({ className }) {
  const [timerRunning, setTimerRunning] = useState<boolean>(false);
  const [seconds, setSeconds] = useState<number>(25 * 60);
  // 25 minutes by 60 seconds

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    console.log("use effect ran");

    if (timerRunning) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds - 1);
      }, 1000);
    } else if (!timerRunning && seconds !== 0) {
      clearInterval(interval!);
    }

    return () => clearInterval(interval!);
  }, [timerRunning, seconds]);

  const timerHandler = (event) => {
    console.log(event);

    setTimerRunning((prevState) => {
      // timer was already running, we stopped the timer
      if (prevState) {
        setTimerRunning(false);
      } else {
        // start the timer
        setSeconds(25 * 60);
        setTimerRunning(true);
      }
      return !prevState;
    });
  };

  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  return (
    <div className={className}>
      <div className="text-[40px]">{`${minutes}:${remainingSeconds
        .toString()
        .padStart(2, "0")}`}</div>
      <div className="buttonContainer mt-8">
        <Button
          className="bg-amber-800 mr-4 hover:bg-amber-900 text-white font-bold py-2 px-4 border-b-4 border-amber-700 hover:border-amber-800 pa rounded"
          onClick={timerHandler}
        >
          {timerRunning ? "Stop Timer" : "Start Timer"}
        </Button>
        <Button
          className="bg-amber-800 hover:bg-amber-900 text-white font-bold py-2 px-4 border-b-4 border-amber-700 hover:border-amber-800 rounded"
          onClick={timerHandler}
        >
          Reset Timer
        </Button>
      </div>
    </div>
  );
}
