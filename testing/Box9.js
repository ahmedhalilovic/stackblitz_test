import React, { useState } from 'react';

function FavouriteColor() {
  const [color, setColor] = useState('...');

  return (
    <>
      <h3>My favourite color is {color}!</h3>
      <button
        style={{ color: 'blue' }}
        type="button"
        onClick={() => setColor('blue')}
      >
        Blue
      </button>
      <button
        style={{ color: 'green' }}
        type="button"
        onClick={() => setColor('green')}
      >
        Green
      </button>
      <button
        style={{ backgroundColor: 'red' }}
        type="button"
        onClick={() => setColor('red')}
      >
        Red
      </button>
    </>
  );
}

export default FavouriteColor;
