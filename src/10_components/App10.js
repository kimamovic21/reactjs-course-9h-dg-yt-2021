import React, { useState } from 'react';
import './App10.css';
import Square from './Square';
import Input from './Input';

const App10 = () => {
    const [colorValue, setColorValue] = useState('');
    const [hexValue, setHexValue] = useState('');
    const [isDarkText, setIsDarkText] = useState('');

    return (
       <div className='App10'>
            <Square 
                colorValue={colorValue}
                hexValue={hexValue}
                isDarkText={isDarkText}
            />
            <Input 
                colorValue={colorValue}
                setColorValue={setColorValue}
                setHexValue={setHexValue}
                isDarkText={isDarkText}
                setIsDarkText={setIsDarkText}
            />
       </div>
    );
};

export default App10;
