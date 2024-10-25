import {useEffect, useState} from 'react';
import {calEffectiveTime} from '../utils';

export const useCountdownTimer = (targetDate: Date) => {
  const calculateTimeLeft = () => calEffectiveTime(targetDate);

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return timeLeft;
};
