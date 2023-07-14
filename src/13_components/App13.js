import React, { useState, useEffect } from 'react';
import './App13.css';
import Header from './Header';
import AddItem from './AddItem';
import SearchItem from './SearchItem';
import Content from './Content';
import Footer from './Footer';

const App13 = () => {
  const API_URL = 'http://localhost:3500/items';

  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');
  const [search, setSearch] = useState('');
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect( () => {
    const fetchItems = async () => {
      try {
        const response = await fetch(API_URL);
        // console.log(response);
        if (!response.ok) {
          throw Error(`Did not receive expected data!`);
        };
        const listItems = await response.json();
        // console.log(listItems);
        setItems(listItems);
        setFetchError(null);
      }
      catch (error) {
        setFetchError(error.message);
      }
      finally {
        setIsLoading(false);
      };
    };
    setTimeout(() => {
      (async () => await fetchItems()) ();
    }, 2000);
  }, []); 

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
    <div className='App13'>
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
      <main>
        {isLoading && (<p>Loading Items...</p>)}
        {fetchError && (
            <p style={{color: 'red'}}>
              {`Error: ${fetchError}`}
            </p>
        )}
        {!fetchError && !isLoading && (<Content 
            items={items.filter((item) => 
                ((item.item).toLowerCase())
                .includes(search.toLowerCase())
            )}
            setItems={setItems}
            handleCheck={handleCheck}
            handleDelete={handleDelete}
        />)}
      </main>
       <Footer 
          length={items.length}   
       />
    </div>
  );
};

export default App13;
