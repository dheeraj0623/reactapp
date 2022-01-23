import React, { useEffect, useState } from 'react';

function Myhook() {
  
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(50);

  const handleIncrement = () => {
    setCount(count+1);
  }
  const handleDecrement = () => {
    setCount1(count1-1);
  }

  useEffect(() => {
    console.log(`You clicked ${count} times`);
  })

  return (
    <>
      <p>Count Up {count} times</p>
      <button onClick={handleIncrement}>
        Increment
      </button>
      <p>Count Down {count1} times</p>
      <button onClick={handleDecrement}>
        Decrement
      </button>
    </>
  );
}

export default Myhook;
