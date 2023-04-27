import { useEffect, useState } from "react";
import Button from "../components/UI/Button";

type TimerProps = {
  className?: string;
};

export default function Timer({ className }: TimerProps) {
  const [timerRunning, setTimerRunning] = useState<boolean>(false);
  const [timerAmount, setTimerAmount] = useState(25 * 60);
  const [seconds, setSeconds] = useState<number>(timerAmount);
  const [paused, setPaused] = useState<boolean>(false);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (timerRunning) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds - 1);
      }, 1000);
    } else if (paused) {
      console.log(timerAmount);
      clearInterval(interval!);
    } else if (!timerRunning && seconds !== 0) {
      clearInterval(interval!);
    }

    // Check if timer is done
    if (seconds === 0) {
      clearInterval(interval!);
      setTimerRunning(false);
    }

    return () => clearInterval(interval!);
  }, [timerRunning, seconds, paused, timerAmount]);

  const timerHandler = (event) => {
    console.log(event);

    setTimerRunning((prevState) => {
      // timer was already running, we stopped the timer
      if (prevState) {
        setPaused(true);
        setTimerRunning(false);
      } else {
        // start the timer
        setPaused(false);
        setSeconds(timerAmount);
        setTimerRunning(true);
      }
      return !prevState;
    });
  };

  const minutes = Math.floor(seconds / 60) % 60;
  console.log(minutes);
  const remainingSeconds = seconds % 60;
  const hours = Math.floor(Math.floor(seconds / 60) / 60);

  const amountHandler = (event) => {
    let entry = event.target.amount.value;
    let minutes = entry * 60;
    console.log(minutes);
    event.preventDefault();
    setTimerAmount(minutes);
    setSeconds(minutes);
  };

  const resetTimer = () => {
    setTimerRunning(false);
    setSeconds(timerAmount);
  };

  return (
    <div className={className}>
      <div className="text-[40px]">{`${hours}:${minutes
        .toString()
        .padStart(2, "0")}:${remainingSeconds
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
          onClick={resetTimer}
        >
          Reset Timer
        </Button>
        <form className="mt-8 flex flex-col" onSubmit={amountHandler}>
          <label htmlFor="amount" />
          <input max="5999" type="number" id="amount" />
          <Button className="bg-amber-400 hover:bg-amber-900 text-white font-bold py-2 px-4 border-b-4 border-amber-700 hover:border-amber-800 rounded">
            Custom Timer
          </Button>
        </form>
      </div>
    </div>
  );
}
