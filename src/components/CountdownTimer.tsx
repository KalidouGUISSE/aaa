import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer = () => {
  const { t, isRTL } = useLanguage();
  const eventDate = new Date('2026-03-07T11:00:00').getTime();

  const calculateTimeLeft = (): TimeLeft => {
    const now = new Date().getTime();
    const difference = eventDate - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((difference % (1000 * 60)) / 1000),
    };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { value: timeLeft.days, label: t('countdown.days') },
    { value: timeLeft.hours, label: t('countdown.hours') },
    { value: timeLeft.minutes, label: t('countdown.minutes') },
    { value: timeLeft.seconds, label: t('countdown.seconds') },
  ];

  return (
    <div className="text-center">
      <p className="text-sm text-primary-foreground/80 mb-4 font-medium uppercase tracking-wider">
        {t('countdown.title')}
      </p>
      <div className={`flex justify-center gap-3 md:gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
        {timeUnits.map((unit, index) => (
          <div key={index} className="countdown-box min-w-[70px] md:min-w-[90px]">
            <div className="text-2xl md:text-4xl font-heading font-bold text-foreground">
              {unit.value.toString().padStart(2, '0')}
            </div>
            <div className="text-xs md:text-sm text-muted-foreground mt-1">
              {unit.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountdownTimer;
