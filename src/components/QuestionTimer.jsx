import { useEffect, useState } from "react";

export default function QuesdtionTimer({ timeout, onTimeout }) {
  const [remainingTime, setRemainigTime] = useState(timeout);

  useEffect(() => {
    setTimeout(onTimeout, timeout);
  }, [onTimeout, timeout]);

  useEffect(() => {
    setInterval(() => {
      setRemainigTime((prevRemainigTime) => prevRemainigTime - 100);
    }, 100);
  }, []);

  return <progress id="question-time" max={timeout} value={remainingTime} />;
}
