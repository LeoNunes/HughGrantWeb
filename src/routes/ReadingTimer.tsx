import React, { useState } from 'react';
import './ReadingTimer.css';

export default () => {

  const [isReading, setIsReading] = useState(false);
  const [readingStartTime, setReadingStartTime] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

  const BeforeReading = () => {
    const handleStart = () => {
      setReadingStartTime(new Date().getTime());
      setIsReading(true);
    }

    return (
      <div>
        <p>To start, read a paragraph while we measure the time it takes.
        <br/>Click in the button below to start</p>
        <button onClick={handleStart}>Start</button>
      </div>
    );
  }
  
  const DuringReading = () => {
    const handleComplete = () => {
      const readingTime = new Date().getTime() - readingStartTime;
      console.log(readingTime);
      setIsCompleted(true);
      setIsReading(false);
    }

    return (
      <div>
        <p>PARAGRAPH TO READ</p>
        <button onClick={handleComplete}>Finish</button>
      </div>
    );
  }
  
  const AfterReading = () => {
    const handleReset = () => {
      setIsReading(false);
      setIsCompleted(false);
      setReadingStartTime(0);
    }

    return (
      <div>
        <p>After Reading</p>
        <button onClick={handleReset}>Restart</button>
      </div>
    );
  }

  const Content = isReading ? DuringReading : (isCompleted ? AfterReading : BeforeReading);

  return (
    <div className='Reading-Timer-Container'>
      <Content/>
    </div>
  );
}



