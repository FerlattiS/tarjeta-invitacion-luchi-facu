import { useEffect, useState } from "react";

type Countdown = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isPast: boolean;
};

const getCountdown = (dateTime: string): Countdown => {
  const target = new Date(dateTime).getTime();
  const distance = target - Date.now();
  const safeDistance = Math.max(distance, 0);

  return {
    days: Math.floor(safeDistance / (1000 * 60 * 60 * 24)),
    hours: Math.floor((safeDistance / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((safeDistance / (1000 * 60)) % 60),
    seconds: Math.floor((safeDistance / 1000) % 60),
    isPast: distance <= 0,
  };
};

export const useCountdown = (dateTime: string) => {
  const [countdown, setCountdown] = useState(() => getCountdown(dateTime));

  useEffect(() => {
    const interval = window.setInterval(() => {
      setCountdown(getCountdown(dateTime));
    }, 1000);

    return () => window.clearInterval(interval);
  }, [dateTime]);

  return countdown;
};
