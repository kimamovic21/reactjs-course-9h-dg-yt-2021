import React, { useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';

const Content = () => {
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

  const showMyList = () => {
    return (
      <ul>
          {items.map((item) => {
            // console.log(item);
            return (
              <li className='item' key={item.id}>
                <input 
                    type="checkbox" 
                    onChange={() => handleCheck(item.id)}
                    checked={item.checked}
                />

                <label 
                    onDoubleClick={() => handleCheck(item.id)}
                    style={
                      item.checked 
                        ? {textDecoration: 'line-through'}
                        : null
                    }
                >
                  {item.item}
                </label>

                <FaTrashAlt 
                    onClick={() => handleDelete(item.id)}
                    role='button' 
                    tabIndex='0'
                />
              </li>
            )
          })}
      </ul>
    );
  };

  const emptyList = () => {
    return (
      <p style={{marginTop: '2rem'}}>Your list is empty</p>
    );
  };

  return (
    <main>
      {items.length ? (showMyList()) : (emptyList())}
    </main>
  );
};

export default Content;
