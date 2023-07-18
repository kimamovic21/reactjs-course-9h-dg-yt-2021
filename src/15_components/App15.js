import React, { useState, useEffect } from 'react';
import './App15.css';
import Form from './Form';
import List from './List';
import Table from './Table';

const App15 = () => {
    const API_URL = `https://jsonplaceholder.typicode.com/`;
    const [requestType, setRequestType] = useState('users');
    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const response = await fetch(`${API_URL}${requestType}`);
                console.log(response);
                const data = await response.json();
                console.log(data);
                setItems(data);
            }
            catch (error) {
                console.error(error.message);
            }
        };
        fetchItems();
    }, [requestType]);

    return (
        <div className='App15'>
            <Form 
                requestType={requestType} 
                setRequestType={setRequestType}
            />
            {/* <List items={items} /> */}
            <Table items={items} />
        </div>
    );
};

export default App15;
