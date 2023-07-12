import React, { useState } from 'react';

const Content = () => {

  const [name, setName] = useState('Kerim');
  const [count, setCount] = useState(0);

  const handleNameChange = () => {
     const names = ['Bob', 'Kevin', 'Dave'];
     const int = Math.floor(Math.random() * 3);
     setName(names[int]);
     console.log('names[int]:', names[int]);
     console.log('name:', name);
  };

  const handleIncrementCount = () => {
    setCount(count + 1);
    console.log(count);
  };

  const handleDecrementCount = () => {
    setCount(count - 1);
    console.log(count);
  };

  const handleClick = () => {
    console.log(`You clicked!`);
  };

  const handleClick2 = (name) => {  // shift + alt + down arrow
    console.log(`${name} was clicked!`);
  };

  const handleClick3 = (event) => {
    console.log(event);
    console.log(event.target);
    console.log(event.target.innerText);
  };

  const handleClick4 = () => {  
   console.log(`Double click Button element!`);
  };

  return (
    <main>
        <p>Hello {name}!</p>

        <button onClick={handleNameChange}>Change Name</button>

        <button onClick={handleIncrementCount}>Increment +</button>
        <button onClick={handleDecrementCount}>Decrement -</button>

        <button onClick={handleClick}>Click Me</button>

        <button onClick={() => handleClick2('Kerim')}>Click Me 2</button>
        
        <button onClick={(event) => handleClick3(event)}>Click Me 3</button>

        <button onDoubleClick={handleClick4}>Click Me 4</button>
    </main>
  );
};

export default Content;
