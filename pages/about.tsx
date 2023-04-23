import { useState } from "react";
import Button from "../components/UI/Button";

export default function About() {
  const [timerRunning, setTimerRunning] = useState(false);
  const [timerButtonText, setTimerButtonText] = useState("Start Timer");

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
        setTimerButtonText("Start Timer");
        console.log(prevState, timerButtonText);
      } else {
        // we started the timer now
        setTimerButtonText("Stop Timer");
        console.log(prevState, timerButtonText);
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
        {/* Conditionally set text based on timerRunning */}
        {timerButtonText}
      </Button>
      <button className="rounded-full">Hello</button>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </div>
  );
}
