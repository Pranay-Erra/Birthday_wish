
import React, { useState, useEffect } from 'react';
import Balloon from './Balloon.js';
import './Balloon.css';

const Game = () => {
  const [score, setScore] = useState(0);

  const handleBalloonClick = () => {
    setScore(score + 1);
  };

  const generateRandomPosition = () => {
    const position = {
      top: `${Math.random() * 60}vh`, // Adjusted to 60vh to leave space between balloons
      left: `${Math.random() * 60}vw`, // Adjusted to 60vw to leave space between balloons
    };
    return position;
  };
  
  const generateBalloons = () => {
    const balloons = [];
    for (let i = 0; i < 10; i++) {
      const position = generateRandomPosition();
      balloons.push(
        <Balloon key={i} onClick={handleBalloonClick} style={position} />
      );
    }
    return balloons;
  };
  useEffect(() => {
    const intervalId = setInterval(() => {
      const poppedBalloons = document.querySelectorAll('.balloon.popped');
      if (poppedBalloons.length === 10) {
        clearInterval(intervalId);
        alert(`Game Over! Your Score: ${score}`);
      }
    }, 1000);
    return () => clearInterval(intervalId);
  }, [score]);

  return (
    <div className="App">
      <h1>Balloon Popping Game</h1>
      <p>Score: {score}</p>
      <div className="balloon-container">{generateBalloons()}</div>
    </div>
  );
};

export default Game;
