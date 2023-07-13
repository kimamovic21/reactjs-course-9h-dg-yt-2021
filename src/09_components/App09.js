import React, { useState } from 'react';
import './App09.css';
import Header from './Header';
import AddItem from './AddItem';
import SearchItem from './SearchItem';
import Content from './Content';
import Footer from './Footer';

const App09 = () => {
  const [items, setItems] = useState(JSON.parse(localStorage.getItem('shoppingList')));

  const [newItem, setNewItem] = useState('');

  const [search, setSearch] = useState('');

  const setAndSaveItems = (newItems) => {
    setItems(newItems);
    localStorage.setItem('shoppingList', JSON.stringify(newItems));
  };

  const addItem = (item) => {
    const id = items.length 
        ? items[items.length - 1].id + 1 
        : 1;
    const myNewItem = {
      id,
      checked: false,
      item
    };
    const listItems = [...items, myNewItem];
    setAndSaveItems(listItems);
  };

  const handleCheck = (id) => {
    console.log(id);
    const listItems = 
          items.map((item) => item.id === id 
            ? {...item, checked: !item.checked} 
            : item
          );
    console.log(listItems);
    setAndSaveItems(listItems);
  };

  const handleDelete = (id) => {
    console.log(id);
    if(window.confirm(`Are you sure you want to delete an item ?`)) {
      const listItems = items.filter((item) => item.id !== id);
      console.log(listItems);
      setAndSaveItems(listItems);
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
    <div className='App09'>
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

export default App09;
