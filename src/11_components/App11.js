import React, { useState, useEffect } from 'react';
import './App11.css';
import Header from './Header';
import AddItem from './AddItem';
import SearchItem from './SearchItem';
import Content from './Content';
import Footer from './Footer';

const App11 = () => {
  const [items, setItems] = useState(JSON.parse(localStorage.getItem('shoppingList')) || []);
  const [newItem, setNewItem] = useState('');
  const [search, setSearch] = useState('');

  useEffect(() => {
    localStorage.setItem('shoppingList', JSON.stringify(items));
  }, [items]); 

  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = { id, checked: false, item };
    const listItems = [...items, myNewItem];
    setItems(listItems);
  };

  const handleCheck = (id) => {
    console.log(id);
    const listItems = items.map((item) => item.id === id 
            ? {...item, checked: !item.checked} 
            : item
    );
    console.log(listItems);
    setItems(listItems);
  };

  const handleDelete = (id) => {
    console.log(id);
    if(window.confirm(`Are you sure you want to delete an item ?`)) {
      const listItems = items.filter((item) => item.id !== id);
      console.log(listItems);
      setItems(listItems);
    }
    else {
      console.log(`The item was not deteted!`);
      return;
    };
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if(!newItem) {
      return;
    };
    console.log(newItem);
    // addItem
    addItem(newItem);
    setNewItem('');
    console.log(`Submitted`);
  };

  return (
    <div className='App11'>
       <Header 
          title='Groceries Props'
       />
       <AddItem 
          newItem={newItem}
          setNewItem={setNewItem}
          handleSubmit={handleSubmit}
       />
       <SearchItem 
          search={search}
          setSearch={setSearch}
      />
       <Content 
          items={items.filter((item) => 
              ((item.item).toLowerCase())
              .includes(search.toLowerCase())
            )}
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

export default App11;
