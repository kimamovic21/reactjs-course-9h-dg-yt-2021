import React from 'react';
import './App02.css';

const App02 = () => {
  const myName = 'Kerim';

  const handleNameChange = () => {
    const names = ['Bob', 'Kevin', 'Dave'];
    const int = Math.floor(Math.random() * 3);
    return names[int];
  };

  return (
    <div className='App02'>
        <h1>Hello World</h1>
        <h2>Hi {myName} 🖐🏻</h2>
        <h3>Hi {handleNameChange()} !</h3>
    </div>
  );
};

export default App02;
