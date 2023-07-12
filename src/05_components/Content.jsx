import React from 'react';

const Content = () => {

  const handleNameChange = () => {
     const names = ['Bob', 'Kevin', 'Dave'];
     const int = Math.floor(Math.random() * 3);
     return names[int];
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
        <p>Hello {handleNameChange()} !</p>
        <button onClick={handleClick}>
          Click Me
        </button>
        <button onClick={() => handleClick2('Kerim')}>
          Click Me 2
        </button>
        <button onClick={(event) => handleClick3(event)}>
          Click Me 3
        </button>
        <button onDoubleClick={handleClick4}>
          Clicke Me 4
        </button>
    </main>
  );
};

export default Content;
