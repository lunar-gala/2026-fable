'use client';
import '../Landing/LandingAnimation.css';
import './Teaser.css';

import { useState, useEffect } from 'react';

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date();
      const currentYear = now.getFullYear();
      
      // Set target to February 20, 12AM Eastern Standard Time (EST, UTC-5)
      // Midnight EST corresponds to 05:00 UTC, so construct the UTC instant accordingly
      let target = new Date(Date.UTC(currentYear, 1, 20, 5, 0, 0)); // Month is 0-indexed, so 1 = February

      // If the target date has already passed, set it to next year (keep EST)
      if (now > target) {
        target = new Date(Date.UTC(currentYear + 1, 1, 20, 5, 0, 0));
      }

      const difference = target.getTime() - now.getTime();

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="countdown">
      <span>
        {timeLeft.days} d {String(timeLeft.hours).padStart(2, '0')}h {String(timeLeft.minutes).padStart(2, '0')}m {String(timeLeft.seconds).padStart(2, '0')}s
      </span>
    </div>
  );
}
