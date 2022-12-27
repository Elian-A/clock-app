import { useDebugValue, useEffect, useState } from "react";

const formatTime = (date: Date) => {
  const hs = date.getHours();
  const min = date.getMinutes();
  const hours = String(hs).length === 1 ? `0${hs}` : `${hs}`;
  const minutes = String(min).length === 1 ? `0${min}` : `${min}`;
  return {
    hours,
    minutes,
  };
};

export const useClock = () => {
  const [date, setDate] = useState(new Date());
  const { hours, minutes } = formatTime(date);

  useEffect(() => {
    const intervalId = setInterval(() => setDate(new Date()), 5000);
    return () => clearInterval(intervalId);
  }, []);
  
  useDebugValue({date,hours,minutes})

  return {
    date,
    hours,
    minutes,
  };
};
