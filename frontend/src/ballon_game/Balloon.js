// src/components/Balloon.js
import React, { useState } from 'react';
import './Balloon.css';

const Balloon = ({ onClick }) => {
  const [popped, setPopped] = useState(false);

  const handleClick = () => {
    if (!popped) {
      setPopped(true);
      onClick();
    }
  };

  return (
    <div
      className={`balloon ${popped ? 'popped' : ''}`}
      onClick={handleClick}
    ></div>
  );
};

export default Balloon;
