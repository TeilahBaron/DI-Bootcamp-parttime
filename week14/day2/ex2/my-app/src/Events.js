import React, { useState } from 'react';

const Events = () => {
  // Part I: Click event
  const clickMe = () => {
    alert('I was clicked');
  };

  // Part II: Key down event
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      alert(event.target.value);
    }
  };

  // Part III: Toggle state
  const [isToggleOn, setIsToggleOn] = useState(true);

  const toggleState = () => {
    setIsToggleOn(prevState => !prevState);
  };

  return (
    <div>
      {/* Part I: Click event */}
      <button onClick={clickMe}>Click me</button>
      
      {/* Part II: Key down event */}
      <input type="text" onKeyDown={handleKeyDown} placeholder="Type and press Enter" />
      
      {/* Part III: Toggle state */}
      <button onClick={toggleState}>
        {isToggleOn ? 'ON' : 'OFF'}
      </button>
    </div>
  );
};

export default Events;
