'use client'
import React, { useState, useEffect, useRef } from 'react';

function useInterval(callback, delay) {
 const savedCallback = useRef();

 // Remember the latest callback.
 useEffect(() => {
  savedCallback.current = callback;
 }, [callback]);

 // Set up the interval.
 useEffect(() => {
  function tick() {
    savedCallback.current();
  }
  if (delay !== null) {
    let id = setInterval(tick, delay);
    return () => clearInterval(id);
  }
 }, [delay]);
}

const Time = () => {
 const [time, setTime] = useState();

 useInterval(() => {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  const Time = `${hours}:${minutes}:${seconds}`;
  setTime(Time);
 }, 1000);

 return (
  <div className="flex items-center gap-1">
    <span className='targetAnimate'>
    <svg width="9" height="8" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="5.5" cy="5.5" r="5.5" fill="black"/>
</svg>
    </span>
    <span>{time}</span> NG</div>
 );
}

export default Time;


