import { useEffect, useState } from "react";

export default function QuesdtionTimer({ timeout, onTimeout }) {
  const [remainingTime, setRemainigTime] = useState(timeout);

  useEffect(() => {
    console.log("Setting Timeout");
    setTimeout(onTimeout, timeout);
  }, [onTimeout, timeout]);

  useEffect(() => {
    console.log("Setting Interval");
    setInterval(() => {
      setRemainigTime((prevRemainigTime) => prevRemainigTime - 100);
    }, 100);
  }, []);

  return <progress id="question-time" max={timeout} value={remainingTime} />;
}
