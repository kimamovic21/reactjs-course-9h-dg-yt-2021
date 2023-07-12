import React, { useState } from 'react';
import './App08.css';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

const App08 = () => {
  const [items, setItems] = useState([
      {
          id: 1,
          checked: false,
          item: `Hoodie`,
      },
      {
          id: 2,
          checked: false,
          item: `Jacket`,
      },
      {
          id: 3,
          checked: false,
          item: `T-Shirt`,
      },
  ]);

  const handleCheck = (id) => {
    console.log(id);
    const listItems = 
          items.map((item) => item.id === id 
            ? {...item, checked: !item.checked} 
            : item
          );
    console.log(listItems);
    setItems(listItems);
    localStorage.setItem('shoppingList', JSON.stringify(listItems));
  };

  const handleDelete = (id) => {
    console.log(id);
    if(window.confirm(`Are you sure you want to delete an item ?`)) {
      const listItems = items.filter((item) => item.id !== id);
      console.log(listItems);
      setItems(listItems);
      localStorage.setItem('shoppingList', JSON.stringify(listItems));
    }
    else {
      console.log(`The item was not deteted!`);
      return;
    };
  };

  return (
    <div className='App08'>
       <Header title='Groceries Props'/>
       <Content 
          items={items}
          setItems={setItems}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
       />
       <Footer 
          length={items.length}   
       />
    </div>
  );
};

export default App08;
