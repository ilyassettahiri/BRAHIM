import { useState, useEffect, useCallback } from 'react';

function formatTime(value) {
  return String(value).length === 1 ? `0${value}` : `${value}`;
}

function calculateTimeDifference(futureDate, currentDate) {
  const distance = futureDate.getTime() - currentDate.getTime();

  return {
    jours: Math.floor(distance / (1000 * 60 * 60 * 24)),
    heures: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
    secondes: Math.floor((distance % (1000 * 60)) / 1000),
  };
}

// ----------------------------------------------------------------------

export function useCountdownDate(targetDate, placeholder = '- -') {
  const [value, setValue] = useState({
    jours: placeholder,
    heures: placeholder,
    minutes: placeholder,
    secondes: placeholder,
  });

  const handleUpdate = useCallback(() => {
    const now = new Date();
    const { jours, heures, minutes, secondes } = calculateTimeDifference(targetDate, now);

    setValue({
      jours: formatTime(jours),
      heures: formatTime(heures),
      minutes: formatTime(minutes),
      secondes: formatTime(secondes),
    });
  }, [targetDate]);

  useEffect(() => {
    handleUpdate();
    const interval = setInterval(handleUpdate, 1000);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return value;
}

// ----------------------------------------------------------------------

export function useCountdownsecondes(initialsecondes) {
  const [value, setValue] = useState(initialsecondes);

  const [isCounting, setIsCounting] = useState(false);

  const handleStart = useCallback(() => {
    setIsCounting(true);
  }, []);

  const handleReset = useCallback(() => {
    setIsCounting(false);
    setValue(initialsecondes);
  }, [initialsecondes]);

  useEffect(() => {
    let interval = null;

    if (isCounting && value > 0) {
      interval = setInterval(() => {
        setValue((prevValue) => prevValue - 1);
      }, 1000);
    } else if (value <= 0) {
      setIsCounting(false);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isCounting, value]);

  return {
    value,
    setValue,
    isCounting,
    start: handleStart,
    reset: handleReset,
  };
}

/**
 * Usage
 * const countdown = useCountdownsecondes(10);
 * const { value, start, reset, isCounting } = useCountdownsecondes(30);
 */
