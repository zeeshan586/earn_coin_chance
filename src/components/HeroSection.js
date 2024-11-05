import React, { useEffect, useState } from 'react';
import './HeroSection.css';
import { ReactComponent  as Join} from './assest/Join.svg'; 

function HeroSection() {
  const [timeLeft, setTimeLeft] = useState({ days: 43, hours: 23, minutes: 59, seconds: 53 });

  useEffect(() => {
    const timer = setInterval(() => {
      // Calculate the new time left and update state
      setTimeLeft(prevTime => {
        let { days, hours, minutes, seconds } = prevTime;
        if (seconds > 0) seconds -= 1;
        else if (minutes > 0) {
          minutes -= 1;
          seconds = 59;
        } else if (hours > 0) {
          hours -= 1;
          minutes = 59;
          seconds = 59;
        } else if (days > 0) {
          days -= 1;
          hours = 23;
          minutes = 59;
          seconds = 59;
        }
        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="hero-section">
      <h1>
        <span className="first-line">Get Early Access to</span>
        <span className="second-line">CoinChance Tokens Today!</span>
      </h1>
      <br />
      <p>
        Don't miss out on early access to CoinChance tokens! Our limited-time pre-sale offers exclusive pricing and a seamless secure purchase process. Act now to secure your share before it's gone.
      </p>
      <br />
      <br />
      <div className="counter-timer">
        <div className="time-component">
          <span className="digit">{timeLeft.days}</span>
          <span className="label">Days</span>
        </div>
        <span className="separator">:</span>
        <div className="time-component">
          <span className="digit">{timeLeft.hours}</span>
          <span className="label">Hours</span>
        </div>
        <span className="separator">:</span>
        <div className="time-component">
          <span className="digit">{timeLeft.minutes}</span>
          <span className="label">Minutes</span>
        </div>
        <span className="separator">:</span>
        <div className="time-component">
          <span className="digit">{timeLeft.seconds}</span>
          <span className="label">Seconds</span>
        </div>
      </div>
      <br/>
      <br/>
      
      <button className="join-button">
        <Join style={{ marginRight: '8px', width: '20px', height: '20px' }} /> {/* SVG inside the button */}
        Join Now
      </button>
    </div>
  );
}

export default HeroSection;
