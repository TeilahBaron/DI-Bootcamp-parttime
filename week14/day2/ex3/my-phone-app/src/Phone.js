import React, { useState } from 'react';

const Phone = () => {
  const [brand, setBrand] = useState("Samsung");
  const [model, setModel] = useState("Galaxy S20");
  const [color, setColor] = useState("black");
  const [year, setYear] = useState(2020);

  // Function to change the color to 'blue'
  const changeColor = () => {
    setColor('blue');
  };

  return (
    <div>
      <h1>Phone Details</h1>
      <p>Brand: {brand}</p>
      <p>Model: {model}</p>
      <p>Color: {color}</p>
      <p>Year: {year}</p>
      <button onClick={changeColor}>Change Color to Blue</button>
    </div>
  );
};

export default Phone;
