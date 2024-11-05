import React from 'react';
import { CountdownTimer } from './CountdownTimer';

export const Home = () => (
  <div className="home">
    <h2>Welcome to Coinchance</h2>
    <CountdownTimer />
    <button className="join-btn">Join Now</button>
  </div>
);
